import { createHttpClient } from '@mercadona/mo.library.web-services/http'

const settings = {
  getHeaders() {
    return {
      'Content-Type': 'application/json',
    }
  },
  API_HOST: 'http://websockets.vlc1.sta.monline',
}

const Http = createHttpClient(settings)

export { Http }
