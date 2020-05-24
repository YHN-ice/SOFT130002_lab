lab08设计文档
===

全局变量
---
>pictureOn 记录当前展示的是第几张图片（取1、2、3、4、5）<br>
>wrap 图片展示区域 <br>
>buttons 数字按钮 <br>
>arrows 左右箭头 <br>
>next 右箭头> <br>
>prev 左箭头< <br>
>cells td元素/单元格 <br>
>wrapMarginLeft 记录图片展示区域的margin-left，修改以后改变wrap中展示可见的图片，初始设为0 <br>
>auto 用于轮播的interval <br>
>editable 用于记录单元格是否变成了输入框 


任务一
---
设计`changePic(direction)`函数，其中`direction`是图片轮播的步数，如`direction = 1`则切换到下一张图片，`direction = 2`则切换到上上张图片。该函数首先用`originPictureOn`记录当前展示照片的序号，再`pictureOn = pictureOn + direction;`得到下一张展示照片的序号，`wrapMarginLeft = wrapMarginLeft - direction * 600;`得到`margin-left`，两个if语句处理开头末尾处`wrapMarginLeft`和`pictureOn`的变化。最后通过
>wrap.style.marginLeft = wrapMarginLeft + "px";<br>
>buttons[originPictureOn - 1].className = null;<br>
>buttons[pictureOn - 1].className = 'on';<br>

完成外边距的设定/图片切换以及数字按钮的样式转换。

任务二
---
通过初始化`let auto = setInterval(function () { changePic(1)}, 2000);`实现自动轮播。分别给`wrap、buttons、arrows`设置`mouseover`和`mouseout`来达到鼠标进入展示区轮播停止（`clearInterval(auto);`），离开后自动轮播`auto = setInterval(function () {changePic(1)}, 2000);`

任务三
---
给每一个数字按钮设定`buttons[i].addEventListener("click", function () {changePic(i + 1 - pictureOn);})`实现切换图片。其中`i+1`是该按钮的序数，通过`i + 1 - pictureOn`计算数字按钮代表的图片和当前展示的图片所差的轮播步数。

任务四
---
给每一个单元格设置`cells[i].addEventListener("click", function () {if(editable === false)edit(cells[i]);})` 当单元格不处于编辑状态时，通过`edit`方法读取单元格内容，并替换成相应初始内容的`input`输入框，通过`input.selectionStart = 0;`和`input.selectionEnd = 0;`来使单元格转换成输入框后光标处于最前。`input.focus();`和`editable = true;`保证了点击后输入框获得焦点并记录编辑状态（防止编辑状态时点击触发`edit`方法）。
通过
>input.addEventListener("blur", function () { <br>
>         let newTextNode = document.createTextNode(input.value); <br>
>         cell.replaceChild(newTextNode,input); <br>
>         editable = false; <br>
>      })


实现点击其他区域时，输入框替换回相应内容的单元格,并记录未编辑状态。

任务四中的替换是`textNode`和`input`之间的替换


---

