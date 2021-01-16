import { from, Observable, of } from "rxjs";
import { catchError, switchMap } from "rxjs/operators";
import { IProducts } from "../components/products/state/products.state.model";
import {fb} from "../firebase/firebase"
import { IUser, IUserActionProps } from "../store/user/user.model"

interface IResponse<TMeta, TError, TData> {
  meta?: TMeta;
  error?: TError;
  data?: TData;
}

export const userSingOut = (): Observable<IResponse<{}, string, any>> => {
  return from(fb.firebase.auth().signOut()).pipe(
    switchMap(()=> of({error: "", data: null})),
    catchError((e)=> of({error: e}))
  )
  
}
export const userSingIn = ({email, password}: IUserActionProps): Observable<IResponse<{}, string, IUser | {}>> =>{
    return from(fb.firebase.auth().signInWithEmailAndPassword(email, password)).pipe(
      switchMap((res) => getUser(res.user?.uid)),
      catchError((e)=> of({error: e}))
    )
}

export const userSingInRemember = ({email, password}: IUserActionProps): Observable<IResponse<{}, string, {}>> =>{
    return from(fb.firebase.auth().setPersistence(fb.firebase.auth.Auth.Persistence.LOCAL))
      .pipe(
          switchMap(()=> userSingIn({email, password})),
          catchError((e)=> of({error: e}))
        )
}

export const getUser = (userID?:string):  Observable<IResponse<{}, string, IUser >>=>{
  return from(fb.dbh.collection("users").where('userID', '==', userID).get())
  .pipe(
    switchMap((res: any)=> {

      let data:any = {};
      let i = 0,BreakException = {};

      try {
        res.forEach(function(doc:any) {
          data = doc.data();
          if (i === 0) throw BreakException;
        })
      } catch(e){if (e !== BreakException) throw e;} 
      return of({data})

    }),
    catchError((e)=> of({error: e}))
  )
}


export const getProductsById = (id:string):  Observable<IResponse<{}, string,  IProducts >>=>{
  return from(fb.dbh.collection('products').doc(id).get())
  .pipe(
    switchMap((res: any)=> {
      return of({data: {...res.data(), id}})
    }),
    catchError((e)=> of({error: e}))
  )
}



export const getProducts = (limit:number=10, offset:number=0):  Observable<IResponse<{}, string,  IProducts[] >>=>{
  return from(fb.dbh.collection("products")
    //.orderBy("status")
    .limit(limit)
    .get()
  )
  .pipe(
    switchMap((res: any)=> {

      let data:IProducts[] = [];

        res.forEach(function(doc:any) {
          data.push({...doc.data(), id: doc.id})
        })
      return of({data: data})

    }),
    catchError((e)=> {console.log("error===>",e); return of({error: e})})
  )
}