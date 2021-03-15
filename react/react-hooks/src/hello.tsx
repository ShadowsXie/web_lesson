// tsx  jsx组件
// .tsx -> main.ts 加载的路上
// webpack   index.tsx -> hello.tsx  .tsx -> modules -> awasome-typrscript-loader
// -> typescript ->

import * as React from 'react';

export const HelloComponent = (props) => {
    console.log(props);
    return <h2>Hello {props.username}</h2>
}