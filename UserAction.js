import dispatcher from '../Dispatcher/dispatcher'; 

//Event Handler that will be invoked rom components
//Dispatch action to dispatcher

export let registerUser=(newUser)=>{
    dispatcher.dispatch({
        type: "REGISTER_USER", 
        newUser
    })
}

export let deleteUser=(index)=>{
    dispatcher.dispatch({
        type: "DELETE_USER", 
        index
    })
}