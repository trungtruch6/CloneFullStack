import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./ModalUser.scss";
class ModalUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  componentDidMount() {}

  toggle = () => {
    this.props.toggleUserModal();
  };

  handleOnChangeInput = (event, id) => {
    let copyState = { ...this.state };
    copyState[id] = event.target.value;
    this.setState({
      ...copyState,
    });
  };

  checkValideInput = () => {
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

  handleAddNewUser = () => {
    let isValid = this.checkValideInput();
    if (isValid === true) {
      this.props.createNewUser(this.state);
      console.log(this.state);
    }
  };

  render() {
    // console.log("Check Child Props", this.props);
    // console.log("Check Child Open Modal", this.props.isOpen);
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
          Create a new users
        </ModalHeader>
        <ModalBody>
          <div className="container">
            <form action="/post-crud" method="POST">
              <div className="form-row">
                <div className="form-group col-6">
                  <label htmlFor="inputEmail4">Email</label>
                  <input
                    onChange={(event) => {
                      this.handleOnChangeInput(event, "email");
                    }}
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    placeholder="Email"
                    name="email"
                    value={this.state.email}
                  />
                </div>
                <div className="form-group col-6">
                  <label htmlFor="inputPassword4">Password</label>
                  <input
                    onChange={(event) => {
                      this.handleOnChangeInput(event, "password");
                    }}
                    type="password"
                    className="form-control"
                    id="inputPassword4"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
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
              this.handleAddNewUser();
            }}
          >
            Add new
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
