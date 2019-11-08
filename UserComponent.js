import React, {Component} from 'react'; 
import userStore from '../store/UserStore'; 
import * as UserActions from '../action/UserAction'; 

export default class UserComponent extends Component{
    constructor(props){
        super(props); 
        this.state={
            users: userStore.getUser()
        }
        }

        componentDidMount=()=>{
            userStore.on('userChanged', ()=>{
                //Subscriber
                this.setState({users:userStore.getUser()})
            })
        }
    
        addUser = (e)=>{
            e.preventDefault(); 
            UserActions.registerUser({
                name: this.refs.uname.value, 
                mail: this.refs.uemail.value, 
                action: true 
            })
        }



    render(){
        return(
         <div>
             <ul>
                 {
                     this.state.users.map((user, i)=>
                     <li key={i}> {user.name} :: {user.email}
                        <button onClick={()=>UserActions.deleteUser(i)}>X</button>
                     </li>)

                 }
             </ul>

             <form>
                 Name: <input type="text" ref="uname"/><br/>
                 Email: <input type="email" ref="uemail"/><br/>
                 <button onClick={this.addUser}>Register</button>
             </form>
         </div>   
        );
    }
}
