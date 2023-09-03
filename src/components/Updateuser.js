import React, { Component } from "react";
import { Formik, Field, Form } from "formik";

import { connect } from "react-redux";
import { fetchAddUser, fetchUpdatedUser, fetchUserObj } from "../redux/action";
import { Link } from "react-router-dom";

class Updateuser extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    console.log('constructor')
    // const { id, name, phone, role, email } = this.props.userObj.userobj;
    // this.state = {
      //     id: id,
      //     name: name,
      //     phone: phone,
      //     role: role,
      //     email: email,
      // };
      this.state = {
        count: 0,
      };
      const param = this.props.match.params.code;
      this.props.getUserObj(param);
    }
    componentDidMount() {
    console.log('i am comMount')
  }
  
  render() {
    
    const { id, name, phone, role, email } = this.props.userObj.userobj;
    console.log("first?", id);
    
   
    

    return (
      <div>{
       
        }
        <div>
          <Formik
            initialValues={{
              //   id: this.state.id,
              //   name: this.state.name,
              //   role: this.state.role,
              //   email: this.state.email,
              //   phone: this.state.phone,
              id: id,
              name: name,
              role: role,
              email: email,
              phone: phone,
            }}
            onSubmit={async (values) => {
              const id = values.id;
              this.props.updateUserDetail(values, id);
            }}
          >
            <Form
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "20px",
                textAlign: "left",
              }}
            >
              <label htmlFor="id">Id</label>
              <Field id="id" name="id" placeholder="id" disabled />

              <label htmlFor="name">Name</label>
              <Field id="name" name="name" placeholder="Name" />

              <label htmlFor="role">Role</label>
              <Field id="role" name="role" placeholder="Role" />

              <label htmlFor="email">Email</label>
              <Field
                id="email"
                name="email"
                placeholder="test@gmail.com"
                type="email"
              />

              <label htmlFor="phone">Phone</label>
              <Field id="phone" name="phone" placeholder="000-000-0000" />

              <button className="my-2 w-25 btn btn-success" type="submit">
                Submit
              </button>

              <Link className=" w-25 btn btn-primary" to="/user">
                Back
              </Link>
            </Form>
          </Formik>
        </div>
      </div>
    );
  
  }
}
const mapStateToProps = (state) => {
  return {
    userObj: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUserDetail: (values, id) => dispatch(fetchUpdatedUser(values, id)),
    getUserObj: (values) => dispatch(fetchUserObj(values)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Updateuser);
