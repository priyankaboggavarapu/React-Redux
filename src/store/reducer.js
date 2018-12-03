const initialstate={
    age:2,
    history:[]
}
const reducer = ( state=initialstate, action)=>{
    const newState={...state};
    //new state();
    // if(action.type==="AGE_UP"){
    //     newState.age++
    // }
    // if(action.type==="AGE_DOWN"){
    //     newState.age--
    // }
    switch(action.type){
        case "AGE_UP":
       // newState.age +=action.value;
        return{
            ...state,
            age:state.age +=action.value,
            history:state.history.concat({age:state.age+action.value}),
            
        }

       
        case "AGE_DOWN":
        //newState.age -=action.value; 
        return{
            ...state,
            age:state.age +=action.value,
            history:state.history.concat({age:state.age+action.value})
        }
    }
    return(newState)  
}
export default reducer;