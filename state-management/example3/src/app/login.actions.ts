import { createAction, props } from "@ngrx/store";
export const login = createAction("login",props<{username:string,password:string}>());