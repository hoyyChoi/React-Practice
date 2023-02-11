import Search from "../component/Search"

let initailState ={
    arr:[],
    searchname:""
    
}

const reducer=(state=initailState,action)=>{
    if(action.type=='create'){
        return {...state,arr:[...state.arr,{name:action.payload.name,num:action.payload.num}]}
    }else if(action.type=="search"){
        return{...state,searchname:action.payload.searchname}
    }

    return {...state}
}

export default reducer