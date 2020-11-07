import apiLogin from './interface/login'
import apiRegister from './interface/register'
import apiGetShops from './interface/getShops'


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
          apiGetShops
        )
      }
    }
  })
}

export default install