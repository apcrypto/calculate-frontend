import React from "react";
import API from "../API";

class SignInForm extends React.Component {
  state = {
    username: "",
    password: "",
  };

  handleSubmit = () => {
    const { signin, history } = this.props;
    const user = this.state;
    API.signin(user).then(data => {
      if (data.error) {
        alert("something is wrong!");
      } else {
        signin(data);
        history.push("/inventory");
      }
    });
  };

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  render() {
    const { username, password } = this.state;
    const { handleChange, handleSubmit } = this;

    return (
      <div>
        <input
          id="usernameInput"
          label="Username"
          value={username}
          onChange={handleChange}
          margin="normal"
          name="username"
        />
        <br />
        <input
          id="passwordInput"
          label="Password"
          value={password}
          onChange={handleChange}
          margin="normal"
          name="password"
          type="password"
        />
        <br />
        <button onClick={handleSubmit} variant="contained" color="primary">
          SUBMIT
        </button>
      </div>
    );
  }
}

export default SignInForm;
