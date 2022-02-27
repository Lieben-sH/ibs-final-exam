import React, { useState } from "react";
import { LoginWrapper } from "./style";

function LoginForm({ Login, error }) {
  const [details, setdetails] = useState({ name: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();

    Login(details);
  };

  return (
    <>
    
      <LoginWrapper>
        <form onSubmit={submitHandler}>
          <div className="form-inner">
            <h2 className="helloworld">Login end Password</h2>
            {error != "" ? <div className="error">{error}</div> : ""}
            <div className="form-group">
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                name="password"
                type="password"
                id="password"
                onChange={(e) =>
                  setdetails({ ...details, password: e.target.value })
                }
                value={details.password}
              />
            </div>
            <br />
            <input type="submit" value="LOGIN" className="btn" />
          </div>
        </form>
      </LoginWrapper>
    </>
  );
}

export default LoginForm;
