import React, { Component } from "react";
import { connect } from "react-redux";
import HomeHeader from "./HomeHeader";
import HomeSecsion from "./HomeSecsion";
import Specialty from "./Secsion/Specialty";
class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <HomeHeader />
        <HomeSecsion />
        <Specialty />
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
