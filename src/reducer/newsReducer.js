import { types } from "../types/types";

export const newsReducer = (state={},action) => {
    switch(action.types){
        case types.login:
            return{
                ...action.payload,
                logged:true
            }
        case types.login:
            return{
                logged:false
            }
    }
}
