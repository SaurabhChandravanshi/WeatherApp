import { combineReducers } from "redux";
import dataChanger from './dataChanger'
import locationChanger from './locationChanger'
import locationNameChanger from './locationNameChanger'

const reducer = combineReducers({
    data:dataChanger,
    location:locationChanger,
    locationName:locationNameChanger
})
export default reducer;