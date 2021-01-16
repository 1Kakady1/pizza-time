import {userSlice} from './user/user.reducer'
import {headerSlice} from "../components/header/state/header.reducer"
import {settingSlice} from "../components/setting/state/setting.reducer"
import { productsSlice } from '../components/products/state/products.state.reducer'

export const slices = {
  [userSlice.name]: userSlice.reducer,
  [headerSlice.name]: headerSlice.reducer,
  [settingSlice.name]: settingSlice.reducer,
  [productsSlice.name]: productsSlice.reducer
}