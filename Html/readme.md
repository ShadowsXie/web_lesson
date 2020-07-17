# 浮动 float
浮动会让元素脱离文档流，间接导致父容器高度坍塌

# 清楚浮动带来的负面影响
1. 在浮动元素最后面添加一个空容器<div style="clear: left;"></div>

2. 给浮动元素父容器添加一个伪类
        .clearfix::after{
            content: '';
            clear: left;
            display: block;
        }

3. BFC -- Block Formatting Context
解决元素脱离文档流带来的负面影响,margin重叠问题

bfc的触发方式：
   根元素或其它包含它的元素；
   浮动 (元素的float不为none)；
   绝对定位元素 (元素的position为absolute或fixed)；
   行内块inline-blocks(元素的 display: inline-block)；
   表格单元格(元素的display: table-cell，HTML表格单元格默认属性)；
   overflow的值不为visible的元素；
   弹性盒 flex boxes (元素的display: flex或inline-flex)；


