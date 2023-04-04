import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import logo from "../../assets/bookingcare-2020.svg";
import "./HomeHeader.scss";
import HomeNav from "./HomeNav";
import { LANGUAGES } from "../../utils";
import { changeLanguageApp } from "../../store/actions";
class HomeHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
    };
  }

  handleHomeClick = () => {
    this.setState({ isNavOpen: !this.state.isNavOpen });
  };

  handleChangeLanguage = (languages) => {
    //Fire redux event : Actions
    this.props.changeLanguageApp(languages);
  };

  render() {
    console.log(this.state.isNavOpen);
    let language = this.props.language;
    return (
      <React.Fragment>
        <div className="home-header-container">
          <HomeNav
            isNavOpen={this.state.isNavOpen}
            handleHomeClick={this.handleHomeClick}
          />
          <div className="home-header-content">
            <div className="left-content">
              <i
                className="fa-solid fa-bars"
                onClick={this.handleHomeClick}
              ></i>
              <img src={logo} alt="Logo Bookingcare" className="main-logo" />
            </div>
            <ul className="center-content">
              <li className="center-content-list">
                <span>
                  <FormattedMessage id="homeheader.specialty" />
                </span>
                <span>
                  <FormattedMessage id="homeheader.finđoctor" />
                </span>
              </li>
              <li className="center-content-list">
                <span>
                  <FormattedMessage id="homeheader.healthfacilities" />
                </span>
                <span>
                  <FormattedMessage id="homeheader.choosehospitalclinic" />
                </span>
              </li>
              <li className="center-content-list">
                <span>
                  <FormattedMessage id="homeheader.doctor" />
                </span>
                <span>
                  <FormattedMessage id="homeheader.gooddoctor" />
                </span>
              </li>
              <li className="center-content-list">
                <span>
                  <FormattedMessage id="homeheader.package" />
                </span>
                <span>
                  <FormattedMessage id="homeheader.general" />
                </span>
              </li>
            </ul>
            <div className="right-content">
              <div className="right-content-support">
                <i className="fa-regular fa-circle-question"></i>
                <span>Hỗ trợ</span>
              </div>
              <ul className="right-content-language">
                <i className="fa-solid fa-globe"></i>
                <li className="right-content-language__list">
                  <ul className="right-content-language__child">
                    <li
                      className={
                        language === LANGUAGES.VI
                          ? "content-language-child__list language-vi action"
                          : "content-language-child__list language-vi"
                      }
                    >
                      <span
                        onClick={() => {
                          this.handleChangeLanguage(LANGUAGES.VI);
                        }}
                      >
                        <FormattedMessage id="homeheader.vi" />
                      </span>
                    </li>
                    <li
                      className={
                        language === LANGUAGES.EN
                          ? "content-language-child__list language-en action"
                          : "content-language-child__list language-en"
                      }
                    >
                      <span
                        onClick={() => {
                          this.handleChangeLanguage(LANGUAGES.EN);
                        }}
                      >
                        <FormattedMessage id="homeheader.en" />
                      </span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeLanguageApp: (language) => dispatch(changeLanguageApp(language)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
