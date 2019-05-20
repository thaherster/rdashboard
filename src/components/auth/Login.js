import React, { Fragment, useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    uname: "",
    psw: ""
  });

  const { uname, psw } = formData;
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (uname.length === 0 || psw.length === 0) {
      console.log("Please type uname and pass");
    }
    console.log("Call login API");
  };

  return (
    <Fragment>
      <form onSubmit={e => onSubmit(e)}>
        <label>
          <b>Username</b>
        </label>
        <input
          type="text"
          placeholder="Enter Username"
          name="uname"
          class="input"
          value={uname}
          onChange={e => onChange(e)}
          required
        />

        <label>
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          class="input"
          onChange={e => onChange(e)}
          value={psw}
          required
        />

        <div class="control">
          <button type="submit" class="button is-primary">
            Login
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default Login;
