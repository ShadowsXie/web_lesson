module.exports = {
  css: {
    loaderOptions: {
      less: {
        // 若使用 less-loader@5，请移除 lessOptions 这一级，直接配置选项。
          modifyVars: {
            'nav-bar-background-color': '#D3D3D3',
            'nav-bar-height': '60px',
            'cell-font-size': '15px',
            'cell-line-height': '32px',
            'tabbar-background-color': '#D3D3D3',
            'search-input-height': '10px'
          },
      },
    },
  },
  devServer: {
    proxy: {
      '/ajax': {
        target: 'http://localhost:3000',
        changeOrigin: true
      }
    }
  },
};
