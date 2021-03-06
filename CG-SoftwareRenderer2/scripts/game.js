import { Player } from "./player.js";
import { Bitmap } from "./bitmap.js";
import { View } from "./view.js";
import * as Util from "./utils.js";
import * as Resources from "./resources.js";
import { Constants } from "./constants.js";

export class Game
{
    constructor()
    {
        this.times = [];
        this.fps;

        this.started = false;

        this.cvs;
        this.tmpCvs;
        this.gfx;
        this.tmpGfx;

        this.resBtns = [];
        this.pspBtns = [];

        this.frameCounterElement;

        this.pause = false
        this.time = 0;

        this.view;

        this.keys = {};
        this.mouse = { down: false, lastX: 0.0, lastY: 0.0, currX: 0.0, currY: 0.0, dx: 0.0, dy: 0.0 };
        //滤镜
        this.postprocessEnabled = [false, false, false, false, false];
    }

    start()
    {
        this.init();
        this.run();
    }

    init()
    {
        this.cvs = document.getElementById("canvas");
        this.gfx = this.cvs.getContext("2d");

        this.gfx.font = "60px verdana";
        this.gfx.fillText("Loading...", 10, 60);

        this.tmpCvs = document.createElement("canvas");
        this.tmpGfx = this.tmpCvs.getContext("2d");

        this.resBtns.push(document.getElementById("res1"));
        this.resBtns.push(document.getElementById("res2"));
        this.resBtns.push(document.getElementById("res4"));
        this.resBtns.push(document.getElementById("res5"));
        this.resBtns.push(document.getElementById("res8"));
        this.resBtns.push(document.getElementById("res10"));
        this.resBtns.push(document.getElementById("res20"));

        function reloadView(index)
        {
            if (index == Constants.SCALES[index]) return;

            const newWidth = Constants.WIDTH * Constants.SCALE / Constants.SCALES[index];
            const newHeight = Constants.HEIGHT * Constants.SCALE / Constants.SCALES[index];
            this.view = new View(newWidth, newHeight, this.player);

            Constants.WIDTH = newWidth;
            Constants.HEIGHT = newHeight;
            Constants.SCALE = Constants.SCALES[index];
            Constants.FOV = Constants.HEIGHT;

            this.tmpCvs.width = Constants.WIDTH;
            this.tmpCvs.height = Constants.HEIGHT;

            for (const btn of this.resBtns) btn.style.backgroundColor = "aliceblue";
            this.resBtns[index].style.backgroundColor = "green";
        }

        for (let i = 0; i < this.resBtns.length; i++)
        {
            const btn = this.resBtns[i];
            btn.onclick = () => reloadView.bind(this)(i);
        }

        this.resBtns[Constants.SCALE_INDEX].style.backgroundColor = "green";

        this.pspBtns.push(document.getElementById("psp1"));
        this.pspBtns.push(document.getElementById("psp2"));
        // this.pspBtns.push(document.getElementById("psp3"));
        // this.pspBtns.push(document.getElementById("psp4"));
        // this.pspBtns.push(document.getElementById("psp5"));

        function setPostProcess(index)
        {
            if(index==0)
            { 
                if(this.pspBtns[0].style.backgroundColor=="aliceblue")
               {
                    this.pspBtns[0].style.backgroundColor="green";
                    this.pspBtns[1].style.backgroundColor="aliceblue";
                    this.postprocessEnabled[0] = false;
                    this.postprocessEnabled[1] = true;
                    this.postprocessEnabled[2] = false;
                    this.postprocessEnabled[3] = false;
                    this.postprocessEnabled[4] = true;
                }
                else{
                    for(let i=0;i<5;i++)
                    {
                        this.postprocessEnabled[i] = false;
                        this.pspBtns[0].style.backgroundColor="aliceblue";
                    }  
                }
            }
            else if(index==1)
            {
                if(this.pspBtns[1].style.backgroundColor=="aliceblue")
                {
                    this.pspBtns[1].style.backgroundColor="green";
                    this.pspBtns[0].style.backgroundColor="aliceblue";
                    this.postprocessEnabled[0] = false;
                    this.postprocessEnabled[1] = false;
                    this.postprocessEnabled[2] = true;
                    this.postprocessEnabled[3] = true;
                    this.postprocessEnabled[4] = true;
                 }
                 else{
                     for(let i=0;i<5;i++)
                     {
                         this.postprocessEnabled[i] = false;
                         this.pspBtns[1].style.backgroundColor="aliceblue";
                     }  
                 }
                
            }
        }

        for (let i = 0; i < this.pspBtns.length; i++)
        {
            const btn = this.pspBtns[i];
            btn.onclick = () => setPostProcess.bind(this)(i);

        }

        //以上是游戏的基本布局，包括画板，按钮等

        // 来自于resources
        // import * as Resources from "./resources.js";
        // 这里是根据别人建好的模型以及图片，在web端展示出来
        for (const key in Resources.textures)
        {
            if (Object.hasOwnProperty.call(Resources.textures, key))
            {
                const imageURL = Resources.textures[key][0];
                const imageWidth = Resources.textures[key][1][0];
                const imageHeight = Resources.textures[key][1][1];

                let image = new Image();
                image.src = imageURL;
                image.crossOrigin = "Anonymous";
                image.onload = () =>
                {
                    // 这是对canvas画布进行操作，显示别人已经建好的物件模型
                    this.tmpCvs.setAttribute("width", imageWidth + "px");
                    this.tmpCvs.setAttribute("height", imageHeight + "px");
                    // Loading textures.

                    this.tmpGfx.drawImage(image, 0, 0, imageWidth, imageHeight);

                    if (key == "skybox")
                    {
                        const size = Util.int(imageWidth / 4);

                        let top = this.tmpGfx.getImageData(size, 0, size, size);
                        let bottom = this.tmpGfx.getImageData(size, size * 2, size, size);
                        let front = this.tmpGfx.getImageData(size, size, size, size);
                        let back = this.tmpGfx.getImageData(size * 3, size, size, size);
                        let right = this.tmpGfx.getImageData(size * 2, size, size, size);
                        let left = this.tmpGfx.getImageData(0, size, size, size);
                    //背景图渲染
                        Resources.textures["skybox_top"] = Util.convertImageDataToBitmap(top, size, size);
                        Resources.textures["skybox_bottom"] = Util.convertImageDataToBitmap(bottom, size, size);
                        Resources.textures["skybox_front"] = Util.convertImageDataToBitmap(front, size, size);
                        Resources.textures["skybox_back"] = Util.convertImageDataToBitmap(back, size, size);
                        Resources.textures["skybox_right"] = Util.convertImageDataToBitmap(right, size, size);
                        Resources.textures["skybox_left"] = Util.convertImageDataToBitmap(left, size, size);
                        Constants.loadedResources++;
                        return;
                    }

                    image = this.tmpGfx.getImageData(0, 0, imageWidth, imageHeight);
                    image = Util.convertImageDataToBitmap(image, imageWidth, imageHeight);

                    Resources.textures[key] = image;
                    Constants.loadedResources++;
                }
            }
        }

        //下面三个函数是根据键盘移动函数以及随鼠标移动函数
        window.addEventListener("mousedown", (e) =>
        {
            if (e.button != 0) return;

            this.mouse.down = true;
        }, false);
        window.addEventListener("mouseup", (e) =>
        {
            if (e.button != 0) return;

            this.mouse.down = false;
        }, false);

        window.addEventListener("keydown", (e) =>
        {
            if (e.key == "Escape") this.pause = !this.pause;

            if (e.key == "w" || e.key == "ArrowUp") this.keys.up = true;
            if (e.key == "a" || e.key == "ArrowLeft") this.keys.left = true;
            if (e.key == "s" || e.key == "ArrowDown") this.keys.down = true;
            if (e.key == "d" || e.key == "ArrowRight") this.keys.right = true;
            if (e.key == " ") this.keys.space = true;
            if (e.key == "c") this.keys.c = true;
            if (e.key == "q") this.keys.q = true;
            if (e.key == "e") this.keys.e = true;
            if (e.key == "Shift") this.keys.shift = true;
        });

        window.addEventListener("keyup", (e) =>
        {
            if (e.key == "w" || e.key == "ArrowUp") this.keys.up = false;
            if (e.key == "a" || e.key == "ArrowLeft") this.keys.left = false;
            if (e.key == "s" || e.key == "ArrowDown") this.keys.down = false;
            if (e.key == "d" || e.key == "ArrowRight") this.keys.right = false;
            if (e.key == " ") this.keys.space = false;
            if (e.key == "c") this.keys.c = false;
            if (e.key == "q") this.keys.q = false;
            if (e.key == "e") this.keys.e = false;
            if (e.key == "Shift") this.keys.shift = false;
        });

        window.addEventListener("mousemove", (e) =>
        {
            this.mouse.currX = e.screenX;
            this.mouse.currY = e.screenY;
        });

        this.frameCounterElement = document.getElementById("frame_counter");

        Constants.WIDTH = Constants.WIDTH / Constants.SCALE;
        Constants.HEIGHT = Constants.HEIGHT / Constants.SCALE;

        this.player = new Player(this.keys, this.mouse);
        this.view = new View(Constants.WIDTH, Constants.HEIGHT, this.player);

        let sample = new Bitmap(64, 64);
        for (let i = 0; i < 64 * 64; i++)
        {
            const x = i % 64;
            const y = Util.int(i / 64);
            sample.pixels[i] = (((x << 6) % 0xff) << 8) | (y << 6) % 0xff;
        }
        Resources.textures["sample0"] = sample;

        sample = new Bitmap(64, 64);
        sample.clear(0xff00ff);
        Resources.textures["sample1"] = sample;

        sample = new Bitmap(64, 64);
        sample.clear(0xffffff);
        Resources.textures["white"] = sample;

        sample = new Bitmap(64, 64);
        sample.clear(0x8080ff);
        Resources.textures["default_normal"] = sample;
    }

    run()
    {
        const now = performance.now();
        while (this.times.length > 0 && this.times[0] <= now - 1000) this.times.shift();

        const delta = (now - this.times[this.times.length - 1]) / 1000.0;
        // console.log("frame time:", delta * 1000.0);

        this.times.push(now);
        this.fps = this.times.length;
        this.frameCounterElement.innerHTML = this.fps + "fps";

        if (!this.started && Constants.loadedResources == Constants.resourceReady)
        {
            this.started = true;
            this.cvs.setAttribute("width", Constants.WIDTH * Constants.SCALE + "px");
            this.cvs.setAttribute("height", Constants.HEIGHT * Constants.SCALE + "px");
            this.tmpCvs.setAttribute("width", Constants.WIDTH * Constants.SCALE + "px");
            this.tmpCvs.setAttribute("height", Constants.HEIGHT * Constants.SCALE + "px");
            this.gfx.font = "48px verdana";
        }
        if (!this.started)
        {
            this.gfx.clearRect(0, 0, this.cvs.width, this.cvs.height);
            this.gfx.fillText("Loading..." + Util.int(Constants.loadedResources / Constants.resourceReady * 100) + "%", 10, 60);
        }

        if (this.started && !this.pause)
        {
            this.update(delta);
            this.render();
            this.time += delta;
        }
        else if (this.pause)
        {
            this.gfx.fillText("PAUSE", 4, 40);
        }

        requestAnimationFrame(this.run.bind(this));
    }

    update(delta)
    {
        this.mouse.dx = this.mouse.currX - this.mouse.lastX;
        this.mouse.dy = this.mouse.currY - this.mouse.lastY;
        this.mouse.lastX = this.mouse.currX;
        this.mouse.lastY = this.mouse.currY;

        this.player.update(delta);
        this.view.update(delta);
    }

    render()
    {
        this.view.clear(0x808080);
        this.view.renderView();
        this.view.postProcess(this.postprocessEnabled);

        if (true)
        {
            this.tmpGfx.putImageData(Util.convertBitmapToImageData(this.view), 0, 0);
            this.gfx.save();
            this.gfx.imageSmoothingEnabled = false;
            this.gfx.scale(Constants.SCALE, Constants.SCALE);
            this.gfx.drawImage(this.tmpCvs, 0, 0);
            this.gfx.restore();
        } else
        {
            this.gfx.putImageData(Util.convertBitmapToImageData(this.view, Constants.SCALE), 0, 0)
        }
    }
}