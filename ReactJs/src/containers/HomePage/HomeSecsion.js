import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import "./HomeSecsion.scss";
import goolgle from "../../assets/google-play-badge.svg";
import appstore from "../../assets/app-store-badge-black.svg";
import specialist from "../../assets/PNG/khamchuyenkhoa.png";
import remote from "../../assets/PNG/khamtuxa.png";
import general from "../../assets/PNG/khamtongquat.png";
import medical from "../../assets/PNG/dichvuxetnghiem.png";
import mental from "../../assets/PNG/suckhoetinhthan.png";
import dentistry from "../../assets/PNG/khamnhakhoa.png";
import surgery from "../../assets/PNG/phau-thuat.jpg";
import medicalproducts from "../../assets/PNG/khamtainha.png";
import business from "../../assets/PNG/icon-lich-su.jpg";
class HomeSecsion extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-bg">
          <div>
            <div className="content-bg">
              <div className="content-bg_header">
                <h1>
                  <FormattedMessage id="homesecsion.platform" />
                  <br />
                  <b>
                    <FormattedMessage id="homesecsion.healthcare" />
                  </b>
                </h1>
                <div className="wrapper-bg-header_sreach">
                  <div className="bg-header_sreach">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input
                      type="text"
                      className="bg-header_inputsreach"
                      placeholder="Tìm chuyên khoa"
                    />
                  </div>
                </div>
                <div className="bg-header_download">
                  <div className="link google">
                    <a href="#">
                      <img src={goolgle} alt="" />
                    </a>
                  </div>
                  <div className="link appstore">
                    <a href="#">
                      <img src={appstore} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-bg_footer">
              <ul className="bg-footer-selection">
                <li className="bg-footer-s_list">
                  <a href="#">
                    <div
                      className="img-list-footer"
                      style={{ backgroundImage: `url(${specialist})` }}
                    ></div>
                    <FormattedMessage id="homesecsion.examination" />
                    <br />
                    <FormattedMessage id="homesecsion.specialty" />
                  </a>
                </li>
                <li className="bg-footer-s_list">
                  <a href="#">
                    <div
                      className="img-list-footer"
                      style={{ backgroundImage: `url(${remote})` }}
                    ></div>
                    <FormattedMessage id="homesecsion.examination" />
                    <br />
                    <FormattedMessage id="homesecsion.remote" />
                  </a>
                </li>
                <li className="bg-footer-s_list">
                  <a href="#">
                    <div
                      className="img-list-footer"
                      style={{ backgroundImage: `url(${general})` }}
                    ></div>
                    <FormattedMessage id="homesecsion.examination" />
                    <br />
                    <FormattedMessage id="homesecsion.general" />
                  </a>
                </li>
                <li className="bg-footer-s_list">
                  <a href="#">
                    <div
                      className="img-list-footer"
                      style={{ backgroundImage: `url(${medical})` }}
                    ></div>
                    <FormattedMessage id="homesecsion.test" />
                    <br />
                    <FormattedMessage id="homesecsion.medical.1" />
                  </a>
                </li>
                <li className="bg-footer-s_list">
                  <a href="#">
                    <div
                      className="img-list-footer"
                      style={{ backgroundImage: `url(${mental})` }}
                    ></div>
                    <FormattedMessage id="homesecsion.health" />
                    <br />
                    <FormattedMessage id="homesecsion.mental" />
                  </a>
                </li>
                <li className="bg-footer-s_list">
                  <a href="#">
                    <div
                      className="img-list-footer"
                      style={{ backgroundImage: `url(${dentistry})` }}
                    ></div>
                    <FormattedMessage id="homesecsion.examination" />
                    <br />
                    <FormattedMessage id="homesecsion.dentistry" />
                  </a>
                </li>
                <li className="bg-footer-s_list">
                  <a href="#">
                    <div
                      className="img-list-footer"
                      style={{ backgroundImage: `url(${surgery})` }}
                    ></div>
                    <FormattedMessage id="homesecsion.package" />
                    <br />
                    <FormattedMessage id="homesecsion.surgery" />
                  </a>
                </li>
                <li className="bg-footer-s_list">
                  <a href="#">
                    <div
                      className="img-list-footer"
                      style={{ backgroundImage: `url(${medicalproducts})` }}
                    ></div>
                    <FormattedMessage id="homesecsion.products" />
                    <br />
                    <FormattedMessage id="homesecsion.medical.2" />
                  </a>
                </li>
                <li className="bg-footer-s_list">
                  <a href="#">
                    <div
                      className="img-list-footer"
                      style={{ backgroundImage: `url(${business})` }}
                    ></div>
                    <FormattedMessage id="homesecsion.health" />
                    <br />
                    <FormattedMessage id="homesecsion.business" />
                  </a>
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeSecsion);
