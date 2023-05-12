import React, { Component } from "react";
import { connect } from "react-redux";
import "./Specialty.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class Specialty extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
    };
    let settingsAutoPlay = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };
    return (
      <React.Fragment>
        <div className="specialty-wrapper">
          <div className="section-specialty">
            <div className="specialty-content">
              <div className="specialty-body">
                <Slider {...settingsAutoPlay}>
                  <div className="s-body-slider s-body-slider_QC">
                    <div className="discount">Ưu Đãi</div>
                    <div className="s-body-backgroup__auto nth-child1"></div>
                    <h3>
                      Trải nghiệm trị liệu Cơ xương khớp 199k tại Phòng khám
                      Đông y Phúc Lâm An
                    </h3>
                    <span>
                      Từ nay đến 22/05/2023, Phòng khám áp dụng ưu đãi Gói trải
                      nghiệm trị liệu chỉ với 199k
                    </span>
                    <div className="button-discount">
                      <a href="#">
                        Xem Chi Tiết
                        <i class="fa-solid fa-chevron-right fa-beat"></i>
                      </a>
                    </div>
                  </div>
                  <div className="s-body-slider s-body-slider_QC">
                    <div className="discount">Ưu Đãi</div>
                    <div className="s-body-backgroup__auto nth-child2"></div>
                    <h3>
                      Tặng Voucher 2 triệu đồng khám và chăm sóc răng tại Nha
                      khoa Vân Anh
                    </h3>
                    <span>
                      Trong tháng 4/2023, Khách hàng được nhận Voucher khám và
                      lên liệu trình điều trị răng tại Nha khoa Vân Anh
                    </span>
                    <div className="button-discount">
                      <a href="#">
                        Xem Chi Tiết
                        <i class="fa-solid fa-chevron-right fa-beat"></i>
                      </a>
                    </div>
                  </div>
                  <div className="s-body-slider s-body-slider_QC">
                    <div className="discount">Ưu Đãi</div>
                    <div className="s-body-backgroup__auto nth-child3"></div>
                    <h3>
                      Khám tổng quát tháng 04 với ưu đãi đến 35% tại Bệnh viện
                      Bảo Sơn
                    </h3>
                    <span>
                      Bệnh viện Bảo Sơn có nhiều ưu đãi cho khách hàng khám, nội
                      soi, siêu âm,... trong tháng 04 này
                    </span>
                    <div className="button-discount">
                      <a href="#">
                        Xem Chi Tiết
                        <i class="fa-solid fa-chevron-right fa-beat"></i>
                      </a>
                    </div>
                  </div>
                  <div className="s-body-slider s-body-slider_QC">
                    <div className="discount">Ưu Đãi</div>
                    <div className="s-body-backgroup__auto nth-child4"></div>
                    <h3>
                      Tặng Voucher 2 triệu đồng khám và chăm sóc răng tại Nha
                      khoa Vân Anh
                    </h3>
                    <span>
                      Trong tháng 4/2023, Khách hàng được nhận Voucher khám và
                      lên liệu trình điều trị răng tại Nha khoa Vân Anh
                    </span>
                    <div className="button-discount">
                      <a href="#">
                        Xem Chi Tiết
                        <i class="fa-solid fa-chevron-right fa-beat"></i>
                      </a>
                    </div>
                  </div>
                  <div className="s-body-slider s-body-slider_QC">
                    <div className="discount">Ưu Đãi</div>
                    <div className="s-body-backgroup__auto nth-child5"></div>
                    <h3>
                      Tặng Voucher 2 triệu đồng khám và chăm sóc răng tại Nha
                      khoa Vân Anh
                    </h3>
                    <span>
                      Trong tháng 4/2023, Khách hàng được nhận Voucher khám và
                      lên liệu trình điều trị răng tại Nha khoa Vân Anh
                    </span>
                    <div className="button-discount">
                      <a href="#">
                        Xem Chi Tiết
                        <i class="fa-solid fa-chevron-right fa-beat"></i>
                      </a>
                    </div>
                  </div>
                  <div className="s-body-slider s-body-slider_QC">
                    <div className="discount">Ưu Đãi</div>
                    <div className="s-body-backgroup__auto nth-child6"></div>
                    <h3>
                      Tặng Voucher 2 triệu đồng khám và chăm sóc răng tại Nha
                      khoa Vân Anh
                    </h3>
                    <span>
                      Trong tháng 4/2023, Khách hàng được nhận Voucher khám và
                      lên liệu trình điều trị răng tại Nha khoa Vân Anh
                    </span>
                    <div className="button-discount">
                      <a href="#">
                        Xem Chi Tiết
                        <i class="fa-solid fa-chevron-right fa-beat"></i>
                      </a>
                    </div>
                  </div>
                  <div className="s-body-slider s-body-slider_QC">
                    <div className="discount">Ưu Đãi</div>
                    <div className="s-body-backgroup__auto nth-child7"></div>
                    <h3>
                      Tặng Voucher 2 triệu đồng khám và chăm sóc răng tại Nha
                      khoa Vân Anh
                    </h3>
                    <span>
                      Trong tháng 4/2023, Khách hàng được nhận Voucher khám và
                      lên liệu trình điều trị răng tại Nha khoa Vân Anh
                    </span>
                    <div className="button-discount">
                      <a href="#">
                        Xem Chi Tiết
                        <i class="fa-solid fa-chevron-right fa-beat"></i>
                      </a>
                    </div>
                  </div>
                  <div className="s-body-slider s-body-slider_QC">
                    <div className="discount">Ưu Đãi</div>
                    <div className="s-body-backgroup__auto nth-child8"></div>
                    <h3>
                      Tặng Voucher 2 triệu đồng khám và chăm sóc răng tại Nha
                      khoa Vân Anh
                    </h3>
                    <span>
                      Trong tháng 4/2023, Khách hàng được nhận Voucher khám và
                      lên liệu trình điều trị răng tại Nha khoa Vân Anh
                    </span>
                    <div className="button-discount">
                      <a href="#">
                        Xem Chi Tiết
                        <i class="fa-solid fa-chevron-right fa-beat"></i>
                      </a>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
          <div className="section-specialty">
            <div className="specialty-content">
              <div className="specialty-header">
                <span className="s-header-title">Bác sĩ từ xa qua Video</span>
                <button className="s-header-button">Xem thêm</button>
              </div>
              <div className="specialty-body">
                <Slider {...settings}>
                  <div className="s-body-slider">
                    <i className="fa-solid fa-video camera"></i>
                    <div className="s-body-backgroup nth-child_bg1"></div>
                    <h3>
                      <a href="#">Tư vấn, trị liệu Tâm lý từ xa</a>
                    </h3>
                  </div>
                  <div className="s-body-slider">
                    <i className="fa-solid fa-video camera"></i>
                    <div className="s-body-backgroup nth-child_bg2"></div>
                    <h3>
                      <a href="#">Sức khỏe tâm thần từ xa</a>
                    </h3>
                  </div>
                  <div className="s-body-slider">
                    <i className="fa-solid fa-video camera"></i>
                    <div className="s-body-backgroup nth-child_bg3"></div>
                    <h3>
                      <a href="#">Bác sĩ Da liễu từ xa</a>
                    </h3>
                  </div>
                  <div className="s-body-slider">
                    <i className="fa-solid fa-video camera"></i>
                    <div className="s-body-backgroup nth-child_bg4"></div>
                    <h3>
                      <a href="#">Bác sĩ Cơ-Xương-Khớp từ xa</a>
                    </h3>
                  </div>
                  <div className="s-body-slider">
                    <i className="fa-solid fa-video camera"></i>
                    <div className="s-body-backgroup nth-child_bg5"></div>
                    <h3>
                      <a href="#">Bác sĩ Tiêu hóa từ xa</a>
                    </h3>
                  </div>
                  <div className="s-body-slider">
                    <i className="fa-solid fa-video camera"></i>
                    <div className="s-body-backgroup nth-child_bg6"></div>
                    <h3>
                      <a href="#">Bác sĩ Nội khoa từ xa</a>
                    </h3>
                  </div>
                  <div className="s-body-slider">
                    <i className="fa-solid fa-video camera"></i>
                    <div className="s-body-backgroup nth-child_bg7"></div>
                    <h3>
                      <a href="#">Bác sĩ Nam học từ xa</a>
                    </h3>
                  </div>
                  <div className="s-body-slider">
                    <i className="fa-solid fa-video camera"></i>
                    <div className="s-body-backgroup nth-child_bg8"></div>
                    <h3>
                      <a href="#">Bác sĩ Sản phụ khoa từ xa</a>
                    </h3>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
          <div className="section-specialty">
            <div className="specialty-content">
              <div className="specialty-header">
                <span className="s-header-title">Bác sĩ từ xa qua Video</span>
                <button className="s-header-button">Xem thêm</button>
              </div>
              <div className="specialty-body">
                <Slider {...settings}>
                  <div className="s-body-slider">
                    <i className="fa-solid fa-video camera"></i>
                    <div className="s-body-backgroup"></div>
                    <h3>Tư vấn, trị liệu Tâm lý từ xa</h3>
                  </div>
                  <div className="s-body-slider">
                    <i className="fa-solid fa-video camera"></i>
                    <div className="s-body-backgroup"></div>
                    <h3>2</h3>
                  </div>
                  <div className="s-body-slider">
                    <i className="fa-solid fa-video camera"></i>
                    <div className="s-body-backgroup"></div>
                    <h3>3</h3>
                  </div>
                  <div className="s-body-slider">
                    <i className="fa-solid fa-video camera"></i>
                    <div className="s-body-backgroup"></div>
                    <h3>4</h3>
                  </div>
                  <div className="s-body-slider">
                    <i className="fa-solid fa-video camera"></i>
                    <div className="s-body-backgroup"></div>
                    <h3>5</h3>
                  </div>
                  <div className="s-body-slider">
                    <i className="fa-solid fa-video camera"></i>
                    <div className="s-body-backgroup"></div>
                    <h3>6</h3>
                  </div>
                  <div className="s-body-slider">
                    <i className="fa-solid fa-video camera"></i>
                    <div className="s-body-backgroup"></div>
                    <h3>7</h3>
                  </div>
                  <div className="s-body-slider">
                    <i className="fa-solid fa-video camera"></i>
                    <div className="s-body-backgroup"></div>
                    <h3>8</h3>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
          <div className="section-specialty">
            <div className="specialty-content">
              <div className="specialty-header">
                <span className="s-header-title">Bác sĩ từ xa qua Video</span>
                <button className="s-header-button">Xem thêm</button>
              </div>
              <div className="specialty-body">
                <Slider {...settings}>
                  <div className="s-body-slider">
                    <i className="fa-solid fa-video camera"></i>
                    <div className="s-body-backgroup"></div>
                    <h3>Tư vấn, trị liệu Tâm lý từ xa</h3>
                  </div>
                  <div className="s-body-slider">
                    <i className="fa-solid fa-video camera"></i>
                    <div className="s-body-backgroup"></div>
                    <h3>2</h3>
                  </div>
                  <div className="s-body-slider">
                    <i className="fa-solid fa-video camera"></i>
                    <div className="s-body-backgroup"></div>
                    <h3>3</h3>
                  </div>
                  <div className="s-body-slider">
                    <i className="fa-solid fa-video camera"></i>
                    <div className="s-body-backgroup"></div>
                    <h3>4</h3>
                  </div>
                  <div className="s-body-slider">
                    <i className="fa-solid fa-video camera"></i>
                    <div className="s-body-backgroup"></div>
                    <h3>5</h3>
                  </div>
                  <div className="s-body-slider">
                    <i className="fa-solid fa-video camera"></i>
                    <div className="s-body-backgroup"></div>
                    <h3>6</h3>
                  </div>
                  <div className="s-body-slider">
                    <i className="fa-solid fa-video camera"></i>
                    <div className="s-body-backgroup"></div>
                    <h3>7</h3>
                  </div>
                  <div className="s-body-slider">
                    <i className="fa-solid fa-video camera"></i>
                    <div className="s-body-backgroup"></div>
                    <h3>8</h3>
                  </div>
                </Slider>
              </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
