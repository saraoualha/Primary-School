import React,{useState} from 'react';
import './SignIn.css';
import Button from '../../UI/Button';
import Card from '../../UI/Card';
import ErrorModal from '../../UI/ErrorModal';

const SignIn = (props) => {
        const [enteredUsername,setEnteredUsername] = useState('');
        const [enteredPassword,setEnteredPassword] = useState('');
        const [error,setError] = useState();
     
         const addUserHandler = (event) => {
             event.preventDefault();
             if (enteredUsername.trim().length===0 || enteredPassword.trim().length===0) {
                 setError ({
                     title : 'Invalid user name or password',
                     message : 'please enter a valid username and password '
                 })
                 return;
             }
             if ( enteredPassword.trim().length < 8) {
                 setError ({
                     title : 'invalide password',
                     message : 'please enter a valid password '
                 }) 
                 return;
             }
             props.onAddUser(enteredUsername,enteredPassword);
             setEnteredUsername('');
             setEnteredPassword('');
         };
     
          const usernameChangeHandler = (event) => {
             setEnteredUsername(event.target.value);
     
          };     
          const passwordChangeHandler = (event) => {
             setEnteredPassword(event.target.value);
     
          };   
          const errorHandler = () => {
             setError(null);
          };
     
         return(
             <div>
             {error && <ErrorModal title={error.title} message={error.message} onHandlerClick={errorHandler} /> }
             <Card className="input">
             <form onSubmit={addUserHandler}>
                 <label htmlFor="username" >Username</label>
                 <input id="username"
                      type ="text"
                       value={enteredUsername} 
                       onChange={usernameChangeHandler} />
                 <label htmlFor="password" >Password</label>
                 <input id="password"
                     type ="password"
                      value={enteredPassword}
                       onChange={passwordChangeHandler} />
                 <Button type="submit">Sign in</Button>
             </form>
             </Card>
             </div>
         );
     };
export default SignIn;