import {EventEmitter} from 'events'; 
import dispatcher from "../Dispatcher/dispatcher"; 

class UserStore extends EventEmitter{
    constructor(){
        super(); 
        

        //1. Initializing store data
        this.users=[
            { name: "abc", email: "abc@acc.com"}, 
            { name: "hello", email: "hello@acc.com"}
        ]
    }

    //2. Data Manipulation functions
    getUser=()=>this.users; 
    addUser=()=>(newUser)=>{
        this.users.push(newUser); 

        //Publishing update on the store change
        this.emit('userChanged'); 
        console.log(this.users); 
    }

    //3. Action Handlers
    handleActions(action){
        switch(action.type){
            case "REGISTER_USER": this.addUser(action.newUser); break;
            case "DELETE_USER": this.users.splice(action.index, 1); 
                                this.emit('userChanged'); break;  
            default: break; 
        }
    }
}
//Register the store with Dispatcher
const userStore=new UserStore();
dispatcher.register(userStore.handleActions.bind(userStore)); 
export default userStore; 

