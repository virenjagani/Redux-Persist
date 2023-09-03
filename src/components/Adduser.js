import React, { Component } from "react";
import { Formik, Field, Form } from "formik";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchAddUser } from "../redux/action";
import { Link } from "react-router-dom";

class Adduser extends Component {
  componentDidMount() {
    console.log(this.props.user);
  }
  render() {
    return (
      <div>
        <Formik
          initialValues={{
            name: "",
            role: "",
            email: "",
            phone: "",
            password:'',
           
          }}
          onSubmit={async (values) => {
            this.props.addUser(values);
          }}
        >
          <Form
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "20px",
              textAlign: "left",
              width:'50%'
            }}
          >
            <label className="mt-2 ms-2" htmlFor="name">Name</label>
            <Field className='rounded border border-info border border-3 p-1' id="name" name="name" placeholder="Name" />

            <label className="mt-2 ms-2" htmlFor="role">Role</label>
            <Field className='rounded border border-info border border-3 p-1' id="role" name="role" placeholder="Role" />

            <label className="mt-2 ms-2" htmlFor="email">Email</label>
            <Field className='rounded border border-info border border-3 p-1'
              id="email"
              name="email"
              placeholder="test@gmail.com"
              type="email"
            />

            <label className="mt-2 ms-2" htmlFor="phone">Phone</label>
            <Field className='rounded border border-info border border-3 p-1' id="phone" name="phone" placeholder="000-000-0000" />
            
            <label className="mt-2 ms-2" htmlFor="password">Password</label>
            <Field className='rounded border border-info border border-3 p-1' id="password" name="password" type='password' placeholder="Password" />
           
            <button className="my-2 w-25 btn btn-success" type="submit">
              Submit
            </button>

            <Link className=" w-25 btn btn-primary" to="/user">
              Back
            </Link>
          </Form>
        </Formik>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (values) => dispatch(fetchAddUser(values)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Adduser);
