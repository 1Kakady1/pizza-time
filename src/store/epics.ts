import { combineEpics } from "redux-observable";
import { postRefreshSetEffect, postSetEffect } from "../components/post-screen/state/post-screen.state.effect";
import { productsSetEffect } from "../components/products/state/products.state.effect";
import { changeHeaderSettingOpenEffect, changeSettingHeadeCloseEffect } from "./effects/change-setting-menu.effect";
import { changeSizeProductEffect } from "./effects/change-size.effect";
import {userSetEffect, userCheckRememberEffect, userLogoutEffect} from "./user/user.effect"

const rootEpic = combineEpics(
    userSetEffect, 
    userCheckRememberEffect,
    userLogoutEffect,
    changeHeaderSettingOpenEffect,
    changeSettingHeadeCloseEffect,
    productsSetEffect,
    postSetEffect,
    postRefreshSetEffect,
    changeSizeProductEffect,
    changeSizeProductEffect
);

export default rootEpic