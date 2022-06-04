import { SET_CATS, SET_DETAILS } from "./types";

export const setCats = (cats)=>({type: SET_CATS, cats});
export const setDetails = (cat)=>({type: SET_DETAILS, cat})