import React,{useState} from 'react';
import Button from '../../UI/Button';
import Card from '../../UI/Card';
import classes from './SignIn.module.css'

const SignIn = (props) => {
       /* const [enteredUsername,setEnteredUsername] = useState('');
        const [enteredPassword,setEnteredPassword] = useState('');
        const [error,setError] = useState();
     
         const addUserHandler = (event) => {
             event.preventDefault();
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
                       onChange={usernameChangeHandler} 
                       required/>
                 <label htmlFor="password" >Password</label>
                 <input id="password"
                     type ="password"
                      value={enteredPassword}
                       onChange={passwordChangeHandler} 
                       required/>
                 <Button type="submit">Sign in</Button>
             </form>
             </Card>
             </div> */

             const [enteredUsername, setEnteredUsername] = useState('');
             const [UsernameIsValid, setUsernameIsValid] = useState();
             const [enteredPassword, setEnteredPassword] = useState('');
             const [passwordIsValid, setPasswordIsValid] = useState();
             const [formIsValid, setFormIsValid] = useState(false);
             const [isLoggedIn, setIsLoggedIn] = useState(false);
             const usernameChangeHandler = (event) => {
                setEnteredUsername(event.target.value);
            
                setFormIsValid(
                  (event.target.value.trim().length > 8 && enteredPassword.trim().length > 6)
                );
              };
            
              const passwordChangeHandler = (event) => {
                setEnteredPassword(event.target.value);
            
                setFormIsValid(
                  enteredUsername.trim().length > 8 && event.target.value.trim().length > 6
                );
              };
            
              const validateUsernameHandler = () => {
                setUsernameIsValid(enteredUsername.trim().length > 8);
              };
            
              const validatePasswordHandler = () => {
                setPasswordIsValid(enteredPassword.trim().length > 6);
              };
            
              const submitHandler = (event) => {
                event.preventDefault();
                setIsLoggedIn(true);
              };
            
              return (
                <Card className={classes.login}>
                  <form onSubmit={submitHandler}>
                    <div
                      className={`${classes.control} ${
                        UsernameIsValid === false ? classes.invalid : ''
                      }`}
                    >
                      <label htmlFor="Username">Username</label>
                      <input
                        type="username"
                        id="username"
                        value={enteredUsername}
                        onChange={usernameChangeHandler}
                        onBlur={validateUsernameHandler}
                      />
                    </div>
                    <div
                      className={`${classes.control} ${
                        passwordIsValid === false ? classes.invalid : ''
                      }`}
                    >
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        id="password"
                        value={enteredPassword}
                        onChange={passwordChangeHandler}
                        onBlur={validatePasswordHandler}
                      />
                    </div>
                    <div className={classes.actions}>
                      <Button type="submit" className={classes.btn} disabled={!formIsValid}>
                        Login
                      </Button>
                    </div>
                  </form>
                </Card>
              );
     };
export default SignIn;