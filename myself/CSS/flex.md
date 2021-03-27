flex布局
<style>
  /* 父容器 */
  .parent {
    display: flex;
    /* 垂直居中 */
    align-items: center;     
    /* 左对齐 | 右对齐 | 居中 | 两端对齐，项目之间的间隔都相等 | 每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍 */
    justify-content: flex-start | flex-end | center | space-between | space-around;
    /* 水平方向，起点在左端(默认) | 水平方向，起点在右端  | 主轴为垂直方向，起点在上沿 | 主轴为垂直方向，起点在下沿*/
    flex-direction: row | row-reverse | column | column-reverse;
    /* （默认）不换行 | 换行，第一行在上方| 换行，第一行在下方*/
    flex-wrap: nowrap | wrap | wrap-reverse;
    /* 上面两个属性简写 */
    flex-flow: <flex-direction> || <flex-wrap>
  }

  .child {
    order: 属性定义项目的排列顺序。数值越小，排列越靠前，默认为0;
    flex-grow: 属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。;
    flex-shrink: 属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。;
    flex-basis: 属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。;
    flex: 属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。
  }
</style>