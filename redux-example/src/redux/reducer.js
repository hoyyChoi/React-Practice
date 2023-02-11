let initialState={
    count:0,
    id:'',
    ps:''
}


function reducer(state=initialState,action){
    if(action.type=="increament"){
        return {...state,count:state.count+1,id:action.payload.id,ps:action.payload.password}
    }

    return {...state}
}

export default reducer