import apiLogin from './interface/login'
import apiRegister from './interface/register'
import apiGetShops from './interface/getShops'
import apiPublishShop from './interface/publishShop'
import apiUploadFile from './interface/uploadFiles.js'

const install = Vue => {
  if (install.installed) {
    return
  }
  install.installed = true

  Object.defineProperties(Vue.prototype, {
    $http: {
      get () {
        return Object.assign(
          {},
          apiLogin,
          apiRegister,
          apiGetShops,
          apiPublishShop,
          apiUploadFile
        )
      }
    }
  })
}

export default install