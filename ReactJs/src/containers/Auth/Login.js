import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { FormattedMessage } from "react-intl";
import { handleLoginAPI } from "../../services/userService";
import * as actions from "../../store/actions";
import "./Login.scss";
import { userService } from "../../services";
import { userLoginSuccess } from "../../store/actions";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isShowPassword: false,
      errMessage: "",
    };
  }
  handleOnChangeInputUser = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  handleOnChangeInputPassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };
  handleLogin = async () => {
    this.setState({
      errMessage: "",
    });
    try {
      let data = await handleLoginAPI(this.state.username, this.state.password);
      if (data && data.errCode !== 0) {
        this.setState({
          errMessage: data.message,
        });
      }
      if (data && data.errCode === 0) {
        this.props.userLoginSuccess(data.user);
      }
    } catch (error) {
      if (error.response) {
        if (error.response.data) {
          this.setState({
            errMessage: error.response.data.message,
          });
        }
      }
    }
  };
  handleShowHidePassword = () => {
    this.setState({
      isShowPassword: !this.state.isShowPassword,
    });
  };
  render() {
    return (
      <>
        <div className="content-wrapper">
          <div className="content-login row p-3">
            <div className="content-login__header col-12">Login</div>
            <div className="content-login__username content-login__input col-12 form-group">
              <label className="col-12">Usename</label>
              <input
                className="form-control "
                type="text"
                name="username"
                placeholder="Enter your username"
                value={this.state.username}
                onChange={(event) => this.handleOnChangeInputUser(event)}
              />
            </div>
            <div className="content-login__password content-login__input col-12 form-group">
              <label className="col-12">Password</label>
              <div className="wrapper-password">
                <input
                  className="form-control "
                  type={this.state.isShowPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  value={this.state.password}
                  onChange={(event) => this.handleOnChangeInputPassword(event)}
                />
                <span onClick={() => this.handleShowHidePassword()}>
                  <i
                    className={
                      this.state.isShowPassword
                        ? "fa-solid fa-eye-slash"
                        : "fa-solid fa-eye"
                    }
                  ></i>
                </span>
              </div>
            </div>
            <div className="col-12" style={{ color: "red" }}>
              {this.state.errMessage}
            </div>
            <button
              type="submit"
              className="col-6"
              onClick={(event) => {
                this.handleLogin(event);
              }}
            >
              Login
            </button>
            <div className="forgot-password col-12">
              Forgot your password? <a href="#">Click here!</a>
            </div>
            <div className="col-12 signin-other">Or Signin With:</div>
            <div className="col-12 signin-logo">
              <i class="fa-brands fa-google"></i>
              <i class="fa-brands fa-facebook-f"></i>
              <i class="fa-brands fa-twitter"></i>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
    userLoginFail: () => dispatch(actions.userLoginFail()),
    userLoginSuccess: (userInfo) =>
      dispatch(actions.userLoginSuccess(userInfo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
