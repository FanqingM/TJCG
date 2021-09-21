# Task2

**1950679 孟繁青**

**test.ipynb中是人脸融合的程序，test.ipynb2中是关于猫逐渐变虎的程序**

**引言**：对于人脸（脸部）融合，其关键点是课堂上所说的对于图片赋予不同的权重，其权重相加为1，最后对于每个图片的像素点做同样的操作得到结果，但是这样做有一个很大的问题，就是容易出现特征点的错位，导致出来的图片四不像，比如下面这幅图（**引用**）

<img src="/Users/fanqing_m/Library/Application Support/typora-user-images/image-20210915204938326.png" alt="image-20210915204938326" style="zoom:50%;" />

所以，我认为在做关键的插入权重之前，首先应当对图片提取特征（比如对于人脸来说，眼睛，嘴巴，鼻子等五官是比较明显的特征），之后再对图片做一定的仿射变换（**可以理解为平移+线性变换（旋转加伸缩）**），使其相同的特征点尽量处于图片的同一区域，最后进行插值融合，可以得到较好的效果。

有了想法之后，受限于能力，我**无法从零实现**特征提取以及图片的仿射变化操作，**这里采用dlib库所提供的模型以及相应参数实现人脸的68个特征提取，采用scipy中的Delaunay实现面部的三角化分割操作（也是为了之后的仿射变换对齐）**

**并采用了opencv提供的对于图片的读取，写入，以及仿射变换函数。**
