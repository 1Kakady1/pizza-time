import { combineEpics } from "redux-observable";
import { productsSetEffect } from "../components/products/state/products.state.effect";
import { changeHeaderSettingOpenEffect, changeSettingHeadeCloseEffect } from "./effects/change-setting-menu.effect";
import {userSetEffect, userCheckRememberEffect, userLogoutEffect} from "./user/user.effect"


const rootEpic = combineEpics(
    userSetEffect, 
    userCheckRememberEffect,
    userLogoutEffect,
    changeHeaderSettingOpenEffect,
    changeSettingHeadeCloseEffect,
    productsSetEffect
);

export default rootEpic