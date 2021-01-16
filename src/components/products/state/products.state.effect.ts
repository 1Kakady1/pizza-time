import { Action } from 'redux';
import { ActionsObservable, ofType } from 'redux-observable';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { Observable} from 'rxjs';

import { getProducts } from '../../../services/api';
import { toProductsAction } from './products.state.reducer';

export const productsSetEffect = (
    action$: ActionsObservable<Action>,
    state: Observable<Record<string, unknown>>
): Observable<Action> =>
    action$.pipe(
        ofType(
            toProductsAction.productsRequest.type,
        ),
        withLatestFrom(state),
        switchMap(([, state]) => {
            return getProducts()
            .pipe(
                map((response) => {
                    if (response.error) {
                        return toProductsAction.productsRequestFailed(
                            response.error.toString()
                        );
                    }

                    if (response.data){
                        console.log("state full",response.data)
                        return toProductsAction.productsRequestSuccess(
                            response?.data
                        );
                    }

                    return toProductsAction.productsRequestFailed(
                        'Data is empty'
                    );
                })
            );
        })
    );

