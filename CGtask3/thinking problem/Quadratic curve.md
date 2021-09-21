# Quadratic curve

**1950679**

**孟繁青**



考虑一般的二元二次方程 ![[公式]](https://www.zhihu.com/equation?tex=Ax%5E2%2BBxy%2BCy%5E2%2BDx%2BEy%2BF%3D0) ，其中 ![[公式]](https://www.zhihu.com/equation?tex=A) ， ![[公式]](https://www.zhihu.com/equation?tex=B) ， ![[公式]](https://www.zhihu.com/equation?tex=C) 不全为零。它的图像什么时候是椭圆，什么时候是双曲线，什么时候是抛物线，什么时候会是其它的哪些曲线？





但是在这之前，我们先看这样一个事实：

我们把曲线 ![[公式]](https://www.zhihu.com/equation?tex=Ax%5E2%2BBxy%2BCy%5E2%2BDx%2BEy%2BF%3D0) 逆时针旋转 ![[公式]](https://www.zhihu.com/equation?tex=%5Ctheta) 角度，得到的曲线的方程，仍然是一个二元二次方程 ![[公式]](https://www.zhihu.com/equation?tex=A%27x%5E2%2BB%27xy%2BC%27y%5E2%2BD%27x%2BE%27y%2BF%27%3D0) ，其中 ![[公式]](https://www.zhihu.com/equation?tex=A%27) ， ![[公式]](https://www.zhihu.com/equation?tex=B%27) ， ![[公式]](https://www.zhihu.com/equation?tex=C%27) ， ![[公式]](https://www.zhihu.com/equation?tex=D%27) ， ![[公式]](https://www.zhihu.com/equation?tex=E%27) ， ![[公式]](https://www.zhihu.com/equation?tex=F%27) 都是 ![[公式]](https://www.zhihu.com/equation?tex=A) ， ![[公式]](https://www.zhihu.com/equation?tex=B) ， ![[公式]](https://www.zhihu.com/equation?tex=C) ， ![[公式]](https://www.zhihu.com/equation?tex=D) ， ![[公式]](https://www.zhihu.com/equation?tex=E) ， ![[公式]](https://www.zhihu.com/equation?tex=F) ，以及 ![[公式]](https://www.zhihu.com/equation?tex=%5Ctheta) 的函数。很容易证明三个二次项不全为零（比如通过把旋转后的曲线转回去来证明）。

这样我们有：二元二次方程的曲线旋转后仍然是某个二元二次方程的曲线。平移的情况也相同。（相似变换也一样）

注意，曲线旋转之后在原坐标系下的方程，和坐标系反向旋转相同的角度后，旋转前的曲线在新坐标系下的方程相同。平移也有类似的性质。这样我们就有：

如果某曲线在某（平面直角）坐标系下是二元二次方程的图像，那么它在任意（平面直角）坐标系下，都是某个二元二次方程的图像。

我们把这样的曲线称为二次曲线。虽然我们借助坐标系定义二次曲线，但是一个曲线是否是二次曲线，不依赖于坐标系的选择。而根据上面的讨论，二次曲线经任意的平移，旋转，相似变换后仍然是二次曲线。用不那么严密的话说，一个曲线是二次曲线，既不依赖于坐标系的选取，也不依赖于它的大小和位置。



这里我们显式地写出 ![[公式]](https://www.zhihu.com/equation?tex=B%27) 的表达式： ![[公式]](https://www.zhihu.com/equation?tex=B%27%3D2A%5Ccos%7B%5Ctheta%7D%5Csin%7B%5Ctheta%7D%2BB%28%5Ccos%5E2%7B%5Ctheta%7D-%5Csin%5E2%7B%5Ctheta%7D%29-2C%5Ccos%7B%5Ctheta%7D%5Csin%7B%5Ctheta%7D%3D%28A-C%29%5Csin%7B2%5Ctheta%7D%2BB%5Ccos%7B2%5Ctheta%7D) 

于是我们有总可以通过旋转一个适当的角度，让旋转后的曲线方程的 ![[公式]](https://www.zhihu.com/equation?tex=xy) 项系数![[公式]](https://www.zhihu.com/equation?tex=B%27%3D0) 。**这样，对任意的二元二次方程的曲线，我们总可以通过旋转，使新曲线方程是不含 ![[公式]](https://www.zhihu.com/equation?tex=xy) 项的二元二次方程 ![[公式]](https://www.zhihu.com/equation?tex=A%27x%5E2%2BC%27y%5E2%2BD%27x%2BE%27y%2BF%27%3D0) 。**



**如果 ![[公式]](https://www.zhihu.com/equation?tex=A%27%5Cne0) ，我们就可以通过将曲线向右平移 ![[公式]](https://www.zhihu.com/equation?tex=%5Cfrac%7BD%27%7D%7B2A%27%7D) ，使新曲线的方程不含 ![[公式]](https://www.zhihu.com/equation?tex=x) 项。 ![[公式]](https://www.zhihu.com/equation?tex=C%27%5Cne+0) 时也有类似的操作，使平移后的曲线方程不含 ![[公式]](https://www.zhihu.com/equation?tex=y) 项。因此我们要讨论两个二次项系数是不是零。**

**之后就变成了我们熟悉的标准形式**

（1）如果 ![[公式]](https://www.zhihu.com/equation?tex=A%27) 和 ![[公式]](https://www.zhihu.com/equation?tex=C%27) 都不是零，那么我们可以通过平移，使新曲线的方程变为 ![[公式]](https://www.zhihu.com/equation?tex=A%27x%5E2%2BC%27y%5E2%2BF%27%27%3D0) ，其中 ![[公式]](https://www.zhihu.com/equation?tex=F%27%27%3DF%27-%5Cfrac%7BD%27%5E2%7D%7B4A%27%7D-%5Cfrac%7BE%27%5E2%7D%7B4C%27%7D) 。这样，

(a)如果 ![[公式]](https://www.zhihu.com/equation?tex=A%27) 和 ![[公式]](https://www.zhihu.com/equation?tex=C%27) 异号而 ![[公式]](https://www.zhihu.com/equation?tex=F%27%27%5Cne0) ，它是双曲线。

(b)如果 ![[公式]](https://www.zhihu.com/equation?tex=A%27) 和 ![[公式]](https://www.zhihu.com/equation?tex=C%27) 异号而 ![[公式]](https://www.zhihu.com/equation?tex=F%27%27%3D0) ，它是两条相交直线。

(c)如果 ![[公式]](https://www.zhihu.com/equation?tex=A%27) 和 ![[公式]](https://www.zhihu.com/equation?tex=C%27) 同号并和 ![[公式]](https://www.zhihu.com/equation?tex=F%27%27) 异号，它是椭圆或圆，其中当且仅当 ![[公式]](https://www.zhihu.com/equation?tex=A%27%3DC%27) 时是圆。

(d)如果 ![[公式]](https://www.zhihu.com/equation?tex=A%27) 和 ![[公式]](https://www.zhihu.com/equation?tex=C%27) 同号并和 ![[公式]](https://www.zhihu.com/equation?tex=F%27%27) 同号，它是空集。

(e)如果 ![[公式]](https://www.zhihu.com/equation?tex=A%27) 和 ![[公式]](https://www.zhihu.com/equation?tex=C%27) 同号而 ![[公式]](https://www.zhihu.com/equation?tex=F%27%27%3D0) ，它是单个点。

（2）如果 ![[公式]](https://www.zhihu.com/equation?tex=A%27) 和 ![[公式]](https://www.zhihu.com/equation?tex=C%27) 其中之一是零，不妨假设 ![[公式]](https://www.zhihu.com/equation?tex=C%27%3D0) （ ![[公式]](https://www.zhihu.com/equation?tex=A%27%3D0) 情况同理，或者干脆让曲线再转 ![[公式]](https://www.zhihu.com/equation?tex=%5Cfrac%7B%5Cpi%7D%7B2%7D) 变成 ![[公式]](https://www.zhihu.com/equation?tex=C%27%3D0) 的情况）。这样我们将曲线向右平移 ![[公式]](https://www.zhihu.com/equation?tex=%5Cfrac%7BD%27%7D%7B2A%27%7D) ，得到 ![[公式]](https://www.zhihu.com/equation?tex=A%27x%5E2%2BE%27y%2BF%27%27%3D0) ，其中 ![[公式]](https://www.zhihu.com/equation?tex=F%27%27%3DF%27-%5Cfrac%7BD%27%5E2%7D%7B4A%27%7D) 。这样，

(f)如果 ![[公式]](https://www.zhihu.com/equation?tex=E%27%5Cne0) ，它是抛物线（向上平移 ![[公式]](https://www.zhihu.com/equation?tex=%5Cfrac%7BF%27%27%7D%7BE%27%7D) 之后，会到达标准位置）。

(g)如果 ![[公式]](https://www.zhihu.com/equation?tex=E%27%3D0) 而 ![[公式]](https://www.zhihu.com/equation?tex=F%27%27) 和 ![[公式]](https://www.zhihu.com/equation?tex=A%27) 异号时，它是两条平行直线。

(h)如果 ![[公式]](https://www.zhihu.com/equation?tex=E%27%3D0) 而 ![[公式]](https://www.zhihu.com/equation?tex=F%27%27) 和 ![[公式]](https://www.zhihu.com/equation?tex=A%27) 同号时，它是空集。

(i)如果 ![[公式]](https://www.zhihu.com/equation?tex=E%27%3D0) 而 ![[公式]](https://www.zhihu.com/equation?tex=F%27%27%3D0) 时，它是一条直线（或者说两条重合直线）。





这样，我们就讨论完了所有二次曲线的可能情况。根据系数不同，它可能是圆和椭圆，双曲线，抛物线，两条平行直线，两条相交直线，两条重合直线，单个点，或者空集。对于一个具体的二次曲线，要判断它的形状，只需要按照上面的做法，一步步做下去就可以了。

而对于上面的情况的标准方程形式，我们都已经进行了绘制，在标准方程绘制的像素点基础上，经过相应的旋转以及平移及可得到任意的二次曲线。





# Third degree curve or higher

对于三次或者更高次曲线，我认为如果我们仍然采用通过比较中点来确定到底画哪一个像素点的话，我们可以思考一下在画椭圆时候出现的情况，即**我们很关心的是曲线切线斜率的绝对值为1的情况，对应的是法向量的y分量与法向量的x分量的大小关系**

我们就先考虑简单情况 $$AX^n + BY^n = C$$

其法向量是$$(AnX^{n-1},BnY^{n-1})$$,那么我们最终需要比较分量大小面对的将是一个高次方程（我们熟知的对于五次以上方程就没有解析解了）。

这还仅仅是最简单的高次曲线，事实上，最难处理的是标准方程中$$X^{i}Y^{j},i+j <= n$$的情况，因为对于高次曲线如何变化为没有XY乘积项以及X，Y的项的标准形式以及其具体分类也并没有明确的说法（尽管NewTon对三次曲线完成了类似于二次曲线的分类）

所以对于一般的高次曲线，我认为是没有一种普适性的画法的。



**经过检索，我发现CG对于高次曲线的绘制，基本是对于一种特殊的高次曲线，即Bezier曲线的绘制**



对于Bezier曲线，我主要参考了[怎么理解贝塞尔曲线](https://www.zhihu.com/question/29565629/answer/1184466425)

我们对于n次Bezier曲线需要给出n个点的坐标，然后Bezier曲线的系数根据公公式，从而写出Bezier曲线的表达式。

![image-20210921144456006](/Users/fanqing_m/Library/Application Support/typora-user-images/image-20210921144456006.png)

**对于具体的代码，参考了[参考资料](https://www.cxyzjd.com/article/qq_47867028/116355539)**

**并在此基础上进行了解读以及基于我的理解的改写**

