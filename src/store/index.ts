import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createEpicMiddleware } from 'redux-observable';
import { slices } from './slices';
import rootEpic from './epics';
import logger from 'redux-logger'

const middlewareArr:any = [];

if(process.env.NODE_ENV === `development`){
   //middlewareArr.push(logger)
}

const epicMiddleware = createEpicMiddleware({
    dependencies: {
        //storage: localStorage,
        location: window.location
    }
});


const createRootReducer = () =>
    combineReducers({
        ...slices
    });


export const store = configureStore({
    reducer: createRootReducer(),
    middleware: [epicMiddleware,...middlewareArr,...getDefaultMiddleware()]
});

epicMiddleware.run(rootEpic);

// можно получить инфу до создания
//store.dispatch(toUserAction.loginActionRequest());