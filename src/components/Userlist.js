import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import { fetchUserData, removeUser } from "../redux/action";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

class Userlist extends Component {
  componentDidMount() {
    this.props.loadUser();
  }

  handleDelete = (id) => {
    this.props.removeUser(id);
    toast.success("Selected detail has been deleted successfully!");
    setTimeout(() => {
      
      this.props.loadUser();
    }, 20);
  };

  render() {
    if (!this.props.user) {
      return (
        <>
          <h1>Select user...</h1>
        </>
      );
    } else {
      return (
        <div className="p-4">
          <div
            style={{ width: "100%", textAlign: "left", paddingLeft: "40px" }}
          ><div>

            <Link to="/user/add" className="m-3 w-25 btn btn-primary">
              Add User[+]
            </Link>
            <Link to="/login" className="m-3 w-25 btn btn-success">
              Login
            </Link>
          </div>
          </div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Role</th>
                <th>Email</th>
                <th>phone</th>
                <td>password---</td>
                
                <td>Actions</td>
              </tr>
            </thead>
            <tbody>
              {this.props.user.userlist.map((item,index) => {
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.role}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.password}</td>
                   
                    <td>
                      <Link
                        to={"/user/edit/" + item.id}
                        className="btn btn-primary"
                      >
                        Edit
                      </Link>{" "}
                      || {" "}
                      <button
                        type="button"
                        onClick={() => this.handleDelete(item.id)}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadUser: () => dispatch(fetchUserData()),
    removeUser: (id) => dispatch(removeUser(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Userlist);
