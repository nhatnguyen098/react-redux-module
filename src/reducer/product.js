import * as types from './../constant/action_types'
const initialState = []
// callAPI('products','GET',null).then(res=>initialState = res.data)
const reducer = (state = initialState, action) => {
    switch(action.type){
        case types.GET_DATA:
            state = action.products
            return [...state]
        case types.DELETE_DATA:
            var arr = [...state]
            arr.forEach(s=>{
                if(s.id === action.id){
                    arr.splice(arr.indexOf(s),1)
                }
            })
            state = arr
            return [...state]
        case types.CHANGE_STATUS:
            var arr = [...state]
            arr.forEach(s=>{
                if(s.id === action.obj.id){
                    s.status = action.obj.status
                    
                }
            })
            state = arr
            return [...state]
        case types.CREATE_DATA:
            state.push(action.obj)
            return [...state]
        case types.GET_DATA_UPDATE:
            var obj = null
            state.forEach(s=>{
                if(s.id === action.id){
                    obj = s
                }
            })
            return obj
        default:
            return [...state]
    }
}
export default reducer