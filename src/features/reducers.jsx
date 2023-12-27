import { combineReducers } from "redux";
const localReducers = import.meta.glob('./local/*.jsx', {import: 'default', eager: true});
const apiReducers = import.meta.glob('./apis/*.jsx', {import: 'default', eager: true})
const parsedReducers = {};
const middlewares = [];
for(let key in localReducers){
    const reducer = localReducers[key]
    parsedReducers[reducer.name] = reducer.reducer
}

const importedReducers = {...parsedReducers, }
// export const middlewares = [];
// const localReducers = import.meta.glob("./local/*.jsx", {import: 'default', eager: true})
// console.log(localReducers)
// for(let key in localReducers){
//     console.log(key)
// }
export const reducers = combineReducers(importedReducers);
export default reducers;