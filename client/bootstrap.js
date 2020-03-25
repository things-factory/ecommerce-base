import { store } from '@things-factory/shell'
import ecommerceBase from './reducers/main'

export default function bootstrap() {
  store.addReducers({
    ecommerceBase
  })
}
