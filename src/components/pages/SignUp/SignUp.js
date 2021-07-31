import React, { useState } from "react";
import Button from "../../UI/Button";
import Card from "../../UI/Card";
import classes from "./SignUp.module.css";
const SignUp = () => {
  const re = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$");
  var r = new RegExp("[0-9]");
  var r1 = new RegExp("(?=.*[@$!%é*?&])");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [enteredConfPassword, setEnteredConfPassword] = useState("");
  const [confPasswordIsValid, setConfPasswordIsValid] = useState();
  const [enteredAdress, setEnteredAdress] = useState("");
  const [adressIsValid, setAdressIsValid] = useState();
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredUsername, setEnteredUsername] = useState("");
  const [UsernameIsValid, setUsernameIsValid] = useState();
  const [enteredPhoneNumber, setEnteredPhoneNumber] = useState("");
  const [phoneNumberIsValid, setPhoneNumberIsValid] = useState();
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredLastName, setEnteredLastName] = useState("");
  const [firstNameIsValid, setFirstNameIsValid] = useState();
  const [lastNameIsValid, setLastNameIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const firstNameChangeHandler = (event) => {
    setEnteredFirstName(event.target.value);

    setFormIsValid(
      !r.test(event.target.value) &&
        event.target.value.trim().length > 0 &&
        !r.test(enteredLastName) &&
        enteredLastName.trim().length > 0 &&
        !r1.test(enteredUsername) &&
        enteredUsername.trim().length > 6 &&
        r.test(enteredPhoneNumber) &&
        enteredPhoneNumber.trim().length >= 8 &&
        enteredConfPassword == enteredPassword &&
        enteredAdress.trim().length > 8 &&
        enteredEmail.includes("@") &&
        enteredEmail.trim().length > 0 &&
        r.test(enteredPhoneNumber) &&
        enteredPhoneNumber.trim().length >= 8 &&
        enteredPassword.trim().length > 6 &&
        re.test(enteredPassword)
    );
  };
  const lastNameChangeHandler = (event) => {
    setEnteredLastName(event.target.value);

    setFormIsValid(
      !r.test(event.target.value) &&
        event.target.value.trim().length > 0 &&
        !r.test(enteredFirstName) &&
        enteredFirstName.trim().length > 0 &&
        !r1.test(enteredUsername) &&
        enteredUsername.trim().length > 6 &&
        r.test(enteredPhoneNumber) &&
        enteredPhoneNumber.trim().length >= 8 &&
        enteredAdress.trim().length > 8 &&
        enteredConfPassword == enteredPassword &&
        enteredEmail.includes("@") &&
        enteredEmail.trim().length > 0 &&
        r.test(enteredPhoneNumber) &&
        enteredPhoneNumber.trim().length >= 8 &&
        enteredPassword.trim().length > 6 &&
        re.test(enteredPassword)
    );
  };
  const adressChangeHandler = (event) => {
    setEnteredAdress(event.target.value);

    setFormIsValid(
      event.target.value.trim().length > 8 &&
        !r.test(enteredLastName) &&
        enteredLastName.trim().length > 0 &&
        !r.test(enteredFirstName) &&
        enteredFirstName.trim().length > 0 &&
        !r1.test(enteredUsername) &&
        enteredUsername.trim().length > 6 &&
        enteredConfPassword == enteredPassword &&
        enteredEmail.includes("@") &&
        enteredEmail.trim().length > 0 &&
        r.test(enteredPhoneNumber) &&
        enteredPhoneNumber.trim().length >= 8 &&
        enteredPassword.trim().length > 6 &&
        re.test(enteredPassword)
    );
  };
  const userNameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);

    setFormIsValid(
      !r1.test(event.target.value) &&
        event.target.value.trim().length > 6 &&
        !r.test(enteredLastName) &&
        enteredLastName.trim().length > 0 &&
        enteredConfPassword == enteredPassword &&
        enteredAdress.trim().length > 8 &&
        !r.test(enteredFirstName) &&
        enteredFirstName.trim().length > 0 &&
        enteredEmail.includes("@") &&
        enteredEmail.trim().length > 0 &&
        r.test(enteredPhoneNumber) &&
        enteredPhoneNumber.trim().length >= 8 &&
        enteredPassword.trim().length > 6 &&
        re.test(enteredPassword)
    );
  };
  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(
      !r1.test(enteredUsername) &&
        enteredUsername.trim().length > 6 &&
        !r.test(enteredLastName) &&
        enteredLastName.trim().length > 0 &&
        enteredConfPassword == enteredPassword &&
        enteredAdress.trim().length > 8 &&
        r.test(enteredPhoneNumber) &&
        enteredPhoneNumber.trim().length >= 8 &&
        enteredEmail.includes("@") &&
        enteredEmail.trim().length > 0 &&
        !r.test(enteredFirstName) &&
        enteredFirstName.trim().length > 0 &&
        event.target.value.trim().length > 6 &&
        re.test(event.target.value)
    );
  };
  const confPasswordChangeHandler = (event) => {
    setEnteredConfPassword(event.target.value);

    setFormIsValid(
      event.target.value == enteredPassword &&
        !r.test(enteredLastName) &&
        enteredLastName.trim().length > 0 &&
        !r1.test(enteredUsername) &&
        enteredUsername.trim().length > 6 &&
        enteredAdress.trim().length > 8 &&
        r.test(enteredPhoneNumber) &&
        enteredPhoneNumber.trim().length >= 8 &&
        enteredEmail.includes("@") &&
        enteredEmail.trim().length > 0 &&
        !r.test(enteredFirstName) &&
        enteredFirstName.trim().length > 0 &&
        enteredPassword.trim().length > 6 &&
        re.test(enteredPassword)
    );
  };
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

    setFormIsValid(
      event.target.value.includes("@") &&
        event.target.value.trim().length > 0 &&
        !r.test(enteredLastName) &&
        enteredLastName.trim().length > 0 &&
        enteredAdress.trim().length > 8 &&
        enteredConfPassword == enteredPassword &&
        !r1.test(enteredUsername) &&
        enteredUsername.trim().length > 6 &&
        r.test(enteredPhoneNumber) &&
        enteredPhoneNumber.trim().length >= 8 &&
        !r.test(enteredFirstName) &&
        enteredFirstName.trim().length > 0 &&
        enteredPassword.trim().length > 6 &&
        re.test(enteredPassword)
    );
  };
  const phoneNumberChangeHandler = (event) => {
    setEnteredPhoneNumber(event.target.value);

    setFormIsValid(
      r.test(event.target.value) &&
        event.target.value.trim().length >= 8 &&
        !r.test(enteredLastName) &&
        enteredAdress.trim().length > 8 &&
        enteredLastName.trim().length > 0 &&
        enteredAdress.trim().length > 8 &&
        !r1.test(enteredUsername) &&
        enteredUsername.trim().length > 6 &&
        enteredConfPassword == enteredPassword &&
        enteredEmail.includes("@") &&
        enteredEmail.trim().length > 0 &&
        !r.test(enteredFirstName) &&
        enteredFirstName.trim().length > 0 &&
        enteredPassword.trim().length > 6 &&
        re.test(enteredPassword)
    );
  };
  const validateFirstNameHandler = () => {
    setFirstNameIsValid(
      !r.test(enteredFirstName) && enteredFirstName.trim().length > 0
    );
  };
  const validateLastNameHandler = () => {
    setLastNameIsValid(
      !r.test(enteredLastName) && enteredLastName.trim().length > 0
    );
  };
  const validatePhoneNumberHandler = () => {
    setPhoneNumberIsValid(
      r.test(enteredPhoneNumber) && enteredPhoneNumber.trim().length >= 8
    );
  };
  const validateConfPasswordHandler = () => {
    setConfPasswordIsValid(enteredConfPassword == enteredPassword);
  };
  const validateEmailHandler = () => {
    setEmailIsValid(
      enteredEmail.includes("@") && enteredEmail.trim().length > 0
    );
  };
  const validateUserNameHandler = () => {
    setUsernameIsValid(
      !r1.test(enteredUsername) && enteredUsername.trim().length > 6
    );
  };
  const validateAdressHandler = () => {
    setAdressIsValid(enteredAdress.trim().length > 8);
  };
  const validatePasswordHandler = () => {
    setPasswordIsValid(
      enteredPassword.trim().length > 6 && re.test(enteredPassword)
    );
  };
  const submitHandler = (event) => {
    event.preventDefault();
    setIsLoggedIn(true);
  };
  return (
    <center>
      <Card className={classes.login}>
        <form className="needs-validation" novalidate onSubmit={submitHandler}>
          <div className="form-row">
            <div
              className="col-md-4 mb-3"
              className={`${classes.control} ${
                firstNameIsValid === false ? classes.invalid : ""
              }`}
            >
              <label htmlFor="validationCustom01">
                <strong>First name</strong>
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom01"
                placeholder="First name"
                onChange={firstNameChangeHandler}
                onBlur={validateFirstNameHandler}
                required
              />
            </div>
            <div
              className="col-md-4 mb-3"
              className={`${classes.control} ${
                lastNameIsValid === false ? classes.invalid : ""
              }`}
            >
              <label htmlFor="validationCustom02">
                <strong>Last name</strong>
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom02"
                placeholder="Last name"
                onChange={lastNameChangeHandler}
                onBlur={validateLastNameHandler}
                required
              />
            </div>
            <div
              className="col-md-4 mb-3"
              className={`${classes.control} ${
                UsernameIsValid === false ? classes.invalid : ""
              }`}
            >
              <label htmlFor="validationCustomUsername">
                <strong>Username</strong>
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustomUsername"
                placeholder="Username"
                aria-describedby="inputGroupPrepend"
                onChange={userNameChangeHandler}
                onBlur={validateUserNameHandler}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div
              className="col-md-4 mb-3"
              className={`${classes.control} ${
                phoneNumberIsValid === false ? classes.invalid : ""
              }`}
            >
              <label htmlFor="validationCustom01">
                <strong>Phone number</strong>
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom01"
                placeholder="Phone number"
                onChange={phoneNumberChangeHandler}
                onBlur={validatePhoneNumberHandler}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div
              className="col-md-4 mb-3"
              className={`${classes.control} ${
                passwordIsValid === false ? classes.invalid : ""
              }`}
            >
              <label htmlFor="validationCustom01">
                <strong> Password</strong>
              </label>
              <br />
              <input
                type="password"
                classNameNameName="form-control"
                id="validationCustom01"
                placeholder="Password"
                onChange={passwordChangeHandler}
                onBlur={validatePasswordHandler}
                required
              />
            </div>
            <div className="form-row">
              <div
                className="col-md-4 mb-3"
                className={`${classes.control} ${
                  confPasswordIsValid === false ? classes.invalid : ""
                }`}
              >
                <label htmlFor="validationCustom01">
                  <strong>Confirm password</strong>
                </label>
                <br />
                <input
                  type="password"
                  classNameNameName="form-control"
                  id="validationCustom01"
                  placeholder="Password"
                  onChange={confPasswordChangeHandler}
                  onBlur={validateConfPasswordHandler}
                  required
                />
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3" className="classes.control">
            <label htmlFor="validationCustom04" classNameName="form-label">
              <strong>Level</strong>
            </label>
            <select
              className="form-select"
              id="validationCustom04"
              className="classes.control"
              required
            >
              <option selected disabled value="">
                Choose
              </option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4 </option>
              <option>5</option>
              <option>6</option>
            </select>
          </div>
          <br />
          <div className="form-row">
            <div
              className="col-md-4 mb-3"
              className={`${classes.control} ${
                emailIsValid === false ? classes.invalid : ""
              }`}
            >
              <label htmlFor="validationCustom01">
                <strong>Email</strong>
              </label>
              <input
                type="email"
                className="form-control"
                id="validationCustom01"
                placeholder="Email"
                onChange={emailChangeHandler}
                onBlur={validateEmailHandler}
              />
            </div>
          </div>
          <div className="form-row">
            <div
              className="col-md-4 mb-3"
              className={`${classes.control} ${
                adressIsValid === false ? classes.invalid : ""
              }`}
            >
              <label htmlFor="validationCustom01">
                <strong>Adress</strong>
              </label>
              <br />
              <input
                type="text"
                classNameName="form-control"
                id="validationCustom01"
                placeholder="Adress"
                onChange={adressChangeHandler}
                onBlur={validateAdressHandler}
                required
              />
            </div>
          </div>
          <div className={classes.actions}>
            <Button type="submit" className={classes.btn}>
              Sign up
            </Button>
          </div>
        </form>
      </Card>
    </center>
  );
};

export default SignUp;
