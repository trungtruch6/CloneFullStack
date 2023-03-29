import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./UserManage.scss";
import {
  getAllUsers,
  createNewUserService,
  deleteUserService,
} from "../../services/userService";
import ModalUser from "./ModalUser";
import { emitter } from "../../utils/Emitter";

class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrUsers: [],
      isOpenModalUser: false,
    };
  }

  async componentDidMount() {
    await this.getAllUserService();
  }

  getAllUserService = async () => {
    let response = await getAllUsers("ALL");
    if (response && response.errCode === 0) {
      this.setState({
        arrUsers: response.users,
      });
    }
  };

  handleAddNewUser = () => {
    this.setState({
      isOpenModalUser: true,
    });
  };

  toggleUserModal = () => {
    this.setState({
      isOpenModalUser: !this.state.isOpenModalUser,
    });
  };

  createNewUser = async (data) => {
    try {
      let response = await createNewUserService(data);
      if (response && response.errCode !== 0) {
        alert(response.errMessage);
      } else {
        await this.getAllUserService();
        this.setState({
          isOpenModalUser: false,
        });
        emitter.emit("EVENT_CLEAR_MODAL_DATA");
      }
      console.log("Check response: ", response);
    } catch (error) {
      console.log(error);
    }
  };

  handleDeleteItem = async (item) => {
    try {
      let res = await deleteUserService(item.id);
      if (res && res.errCode === 0) {
        await this.getAllUserService();
      } else {
        alert(res.errMessage);
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    let arrUsers = this.state.arrUsers;
    return (
      <div>
        <ModalUser
          isOpen={this.state.isOpenModalUser}
          toggleUserModal={this.toggleUserModal}
          createNewUser={this.createNewUser}
        />
        <div
          className="container-table-manage text-center p-3"
          style={{ color: "red", fontSize: "20px" }}
        >
          Manage Table User
        </div>
        <div className="w3-container">
          <div className="d-flex">
            <button
              className="btn btn-primary px-3 my-3"
              onClick={() => this.handleAddNewUser()}
              style={{ minWidth: "200px" }}
            >
              <i className="fa-solid fa-plus mx-2"></i>
              Add new user
            </button>
          </div>
          <table className="w3-table-all">
            <tbody>
              <tr className="w3-light-grey w3-hover-red">
                <th>Email</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Address</th>
                <th>Phone Number</th>
                <th>Gender</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
              {arrUsers &&
                arrUsers.map((item, index) => {
                  // console.log(`Check map:`, item, index);
                  return (
                    <tr key={index} className="w3-hover-text-green">
                      <td>{item.email}</td>
                      <td>{item.firstName}</td>
                      <td>{item.lastName}</td>
                      <td>{item.address}</td>
                      <td>{item.phoneNumber}</td>
                      <td>{item.gender}</td>
                      <td>{item.roleId}</td>
                      <td>
                        <button className="btn btn-success">
                          <i className="fa-regular fa-pen-to-square"></i>
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => this.handleDeleteItem(item)}
                        >
                          <i className="fa-solid fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
