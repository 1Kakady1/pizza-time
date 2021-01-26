import {userSlice} from './user/user.reducer'
import {headerSlice} from "../components/header/state/header.reducer"
import {settingSlice} from "../components/setting/state/setting.reducer"
import { productsSlice } from '../components/products/state/products.state.reducer'
import { cartSlice } from '../components/cart/state/cart.state.reducer'
import { postSlice } from '../components/post-screen/state/post-screen.state.reducer'
import { cartPanelSlice } from '../components/cart-panel/state/cart-panel.state.reducer'

export const slices = {
  [userSlice.name]: userSlice.reducer,
  [headerSlice.name]: headerSlice.reducer,
  [settingSlice.name]: settingSlice.reducer,
  [productsSlice.name]: productsSlice.reducer,
  [cartSlice.name]: cartSlice.reducer,
  [postSlice.name]: postSlice.reducer,
  [cartPanelSlice.name]: cartPanelSlice.reducer,
}

export const sliceKeys=[
  userSlice.name,
  headerSlice.name,
  settingSlice.name,
  productsSlice.name,
  cartSlice.name,
  postSlice.name,
  cartPanelSlice.name,
]