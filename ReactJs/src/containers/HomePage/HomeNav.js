import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomeNav.scss";
class HomeNav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log("Nav props", this.props);
    return (
      <React.Fragment>
        <div
          className={
            this.props.isNavOpen ? "nav-container active" : "nav-container "
          }
          onClick={(event) => {
            console.log(event.target);
            console.log(this.props.isNavOpen);
            event.stopPropagation();
            this.props.isNavOpen
              ? event.target.classList.remove("active")
              : event.target.classList.add("active");
          }}
        >
          <div className="nav-content">
            <i
              className="fa-solid fa-xmark close"
              onClick={this.props.handleHomeClick}
            ></i>
            <ul className="nav-content_list">
              <li className="nav-list_item">
                <a href="#">Trang chủ</a>
              </li>
              <li className="nav-list_item">
                <a href="#">Cẩm nang</a>
              </li>
              <li className="nav-list_item">
                <a href="#">Liên hệ hợp tác</a>
              </li>
              <li className="nav-list_item">
                <a href="#">Gói chuyển đổi sô doanh nghiệp</a>
              </li>
              <li className="nav-list_item">
                <a href="#">Tuyển dụng</a>
              </li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeNav);
