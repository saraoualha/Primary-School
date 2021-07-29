import React from 'react';
import Button from '../../UI/Button';
import Card from '../../UI/Card';
import './SignUp.css';
const SignUp = () => {
    return (
        <center>
      <Card>
        <form className="needs-validation" novalidate>
          <div className="form-row">
            <div className="col-md-4 mb-3">
              <label htmlFor="validationCustom01">
                <strong>First name</strong>
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom01"
                placeholder="First name"
                required
              />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="validationCustom02">
                <strong>Last name</strong>
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom02"
                placeholder="Last name"
                required
              />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="validationCustomUsername">
                <strong>Username</strong>
              </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustomUsername"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  required
                />
              </div>
            </div>
          <div className="form-row">
            <div className="col-md-4 mb-3">
              <label htmlFor="validationCustom01">
                <strong>Phone number</strong>
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom01"
                placeholder="Phone number"
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-4 mb-3">
              <label htmlFor="validationCustom01">
                <strong> Password</strong>
              </label>
              <br/>
              <input
                type="password"
                classNameNameName="form-control"
                id="validationCustom01"
                placeholder="Password"
                required
              />
            </div>
          </div>
          <div classNameName="col-md-3">
            <label htmlFor="validationCustom04" classNameName="form-label">
              <strong>Level</strong>
            </label>
            <select className="form-select" id="validationCustom04" required>
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
            <div className="col-md-4 mb-3">
              <label htmlFor="validationCustom01">
                <strong>Email</strong>
              </label>
              <input
                type="email"
                className="form-control"
                id="validationCustom01"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-4 mb-3">
              <label htmlFor="validationCustom01">
                <strong>Adress</strong>
              </label>
              <br/>
              <input
                type="text"
                classNameName="form-control"
                id="validationCustom01"
                placeholder="Adress"
                required
              />
            </div>
          </div>
          <Button type="submit">Sign up</Button>
        </form>
      </Card>
      </center>
    );
};

export default SignUp;