置换元素：
```html
<img src=""/>
<iframe src=""/>
<canvas />
<video src="" />
```
1. 不受css视觉模型控制（css渲染规则不考虑内部内容的）
2. img没有默认宽高

非置换元素
```html
<div>
  <div></div>
</div>
```
css 视觉模型
css 布局方案
float
position
normal flow
  - inline-level-box  ifc (base-line)
  - block-level-box   bfc (清除浮动[bfc容器在计算高度时浮动元素也会参与],两栏布局)
flex
grid