import { combineEpics } from "redux-observable";
import { catSetEffect } from "../components/cat/state/cat.state.effect";
import { postRefreshSetEffect, postSetEffect } from "../components/post-screen/state/post-screen.state.effect";
import { productsSetEffect } from "../components/products/state/products.state.effect";
import { searchSetEffect } from "../components/search/state/search.effect";
import { initCatEffect, setCatEffect, setCurrentCatEffect } from "./effects/chande-cat.effect";
import { setCloseSearchEffect, setOpenSearchEffect } from "./effects/change-search.effect";
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
    changeSizeProductEffect,
    setOpenSearchEffect,
    setCloseSearchEffect,
    searchSetEffect,
    catSetEffect,
    initCatEffect,
    setCatEffect,
    setCurrentCatEffect,
);

export default rootEpic