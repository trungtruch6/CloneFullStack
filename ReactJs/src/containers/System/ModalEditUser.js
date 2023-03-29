import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./ModalUser.scss";
import _ from "lodash";
class ModalEditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      address: "",
      gender: "",
      roleId: "",
    };
  }

  componentDidMount() {
    let user = this.props.currentUser;
    if (user && !_.isEmpty(user)) {
      this.setState({
        id: user.id,
        email: user.email,
        password: "hashcode",
        firstName: user.firstName,
        lastName: user.lastName,
        phoneNumber: user.phoneNumber,
        address: user.address,
        gender: user.gender,
        roleId: user.roleId,
      });
    }
  }

  toggle = () => {
    this.props.toggleEditUserModal();
  };

  handleOnChangeInput = (event, id) => {
    let copyState = { ...this.state };
    copyState[id] = event.target.value;
    this.setState({
      ...copyState,
    });
  };

  checkValidateInput = () => {
    let isValid = true;
    let arrInput = [
      "email",
      "password",
      "firstName",
      "lastName",
      "address",
      "phoneNumber",
      "gender",
      "roleId",
    ];
    for (let index = 0; index < arrInput.length; index++) {
      if (!this.state[arrInput[index]]) {
        isValid = false;
        alert("Missing Paremater: " + arrInput[index]);
        break;
      }
    }
    return isValid;
  };

  handleSaveUser = () => {
    let isValid = this.checkValidateInput();
    if (isValid === true) {
      this.props.editUser(this.state);
    }
  };

  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={() => {
          this.toggle();
        }}
        className={"modal-container"}
      >
        <ModalHeader
          toggle={() => {
            this.toggle();
          }}
        >
          Edit a users
        </ModalHeader>
        <ModalBody>
          <div className="container">
            <form action="/post-crud" method="POST">
              <div className="form-row">
                <div className="form-group col-12">
                  <label htmlFor="inputEmail4">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    placeholder="Email"
                    name="email"
                    value={this.state.email}
                    disabled
                    style={{ cursor: "not-allowed" }}
                  />
                </div>

                <div className="form-group col-6">
                  <label htmlFor="inputEmail4">First Name</label>
                  <input
                    onChange={(event) => {
                      this.handleOnChangeInput(event, "firstName");
                    }}
                    type="text"
                    className="form-control"
                    id="inputEmail4"
                    placeholder="First Name"
                    name="firstName"
                    value={this.state.firstName}
                  />
                </div>
                <div className="form-group col-6">
                  <label htmlFor="inputPassword4">Last Name</label>
                  <input
                    onChange={(event) => {
                      this.handleOnChangeInput(event, "lastName");
                    }}
                    type="text"
                    className="form-control"
                    id="inputPassword4"
                    placeholder="Last Name"
                    name="lastName"
                    value={this.state.lastName}
                  />
                </div>
                <div className="form-group col-6">
                  <label htmlFor="inputAddress">Phone Number</label>
                  <input
                    onChange={(event) => {
                      this.handleOnChangeInput(event, "phoneNumber");
                    }}
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    placeholder="1234 Main St"
                    name="phoneNumber"
                    value={this.state.phoneNumber}
                  />
                </div>
                <div className="form-group col-6">
                  <label htmlFor="inputAddress2">Address</label>
                  <input
                    onChange={(event) => {
                      this.handleOnChangeInput(event, "address");
                    }}
                    type="text"
                    className="form-control"
                    id="inputAddress2"
                    placeholder="Apartment, studio, or floor"
                    name="address"
                    value={this.state.address}
                  />
                </div>
                <div className="form-row col-12">
                  <div className="form-group col-6">
                    <label htmlFor="inputState">Gender</label>
                    <select
                      onChange={(event) => {
                        this.handleOnChangeInput(event, "gender");
                      }}
                      id="inputState"
                      className="form-control"
                      name="gender"
                      value={this.state.gender}
                    >
                      <option>---Selection---</option>
                      <option value="1">Male</option>
                      <option value="0">Female</option>
                    </select>
                  </div>
                  <div className="form-group col-6">
                    <label htmlFor="inputState">Role ID</label>
                    <select
                      onChange={(event) => {
                        this.handleOnChangeInput(event, "roleId");
                      }}
                      id="inputState"
                      className="form-control"
                      name="roleId"
                      value={this.state.roleId}
                    >
                      <option>---Selection---</option>
                      <option value="1">Admin</option>
                      <option value="2">Doctor</option>
                      <option value="3">Patient</option>
                    </select>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            style={{ minWidth: "150px" }}
            color="primary"
            onClick={() => {
              this.handleSaveUser();
            }}
          >
            Save
          </Button>{" "}
          <Button
            color="secondary"
            onClick={() => {
              this.toggle();
            }}
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);
