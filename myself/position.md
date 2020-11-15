position
  初始值：static
  相对定位：realitive
    相对于当前元素位置进行偏移，如： top: 10px, right: 10px
    即相对于元素最初位置据顶部10px，右边10px
  
  绝对定位：absolute
    脱离文档流，绝对定位元素相对于最近的非 static 祖先元素定位。当这样的祖先元素不存在时，则相对于ICB（inital container block, 初始包含块），来确定元素位置。

  固定定位：fixed
    该定位方式常用于创建在滚动屏幕时仍固定在相同位置的元素，即无论屏幕怎么滚始终按照定位值出现在屏幕

  粘性定位：sticky
    粘性定位可以被认为是相对定位和固定定位的混合。元素在跨越特定阈值前为相对定位，之后为固定定位
    { position: sticky; top: 10px; }
    即在屏幕滚动10px时，固定不动，超过10px则跟随屏幕移动