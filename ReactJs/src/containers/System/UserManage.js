import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./UserManage.scss";
import { getAllUsers } from "../../services/userService";
class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrUsers: [],
    };
  }

  async componentDidMount() {
    let response = await getAllUsers("ALL");
    if (response && response.errCode === 0) {
      this.setState(
        {
          arrUsers: response.users,
        },
        () => {
          console.log(`Check stage:`, this.state.arrUsers);
        }
      );
    }
    console.log(`Check stage 2:`, this.state.arrUsers);
  }

  render() {
    let arrUsers = this.state.arrUsers;
    return (
      <div>
        <div
          className="container-table-manage text-center p-3"
          style={{ color: "red", fontSize: "20px" }}
        >
          Manage Table User
        </div>
        <div class="w3-container">
          <h2>Table With Different Hover Colors</h2>
          <p>
            If you different hover colors, add w3-hover-<em>color</em> classes
            to each tr element:
          </p>

          <table className="w3-table-all">
            <thead>
              <tr class="w3-light-grey w3-hover-red">
                <th>Email</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Address</th>
                <th>Phone Number</th>
                <th>Gender</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            {arrUsers &&
              arrUsers.map((item, index) => {
                console.log(`Check map:`, item, index);
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
                        <i class="fa-regular fa-pen-to-square"></i>
                      </button>
                      <button className="btn btn-danger">
                        <i class="fa-solid fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
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
