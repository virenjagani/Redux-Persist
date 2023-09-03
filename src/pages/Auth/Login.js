import React, { Component } from "react";
import { Field, Formik } from "formik";
import axios from "axios";
import { toast } from "react-toastify";
import { Link,Navigate, Redirect } from "react-router-dom";
import { setLogin } from "../../redux/action";
import { connect } from "react-redux";
import DashBoard from "../DashBoard";

class Login extends Component {
  constructor(props) {
    super(props);
    this.props=props
    this.state = {};

  }

setLoginFunction=(e)=>{
  this.props.setLogin(true);
}
  handleSubmitFunc = ({ email, password }) => {
    axios
      .get(`http://localhost:3000/user?email=${email}`)
      .then((Response) => {
        const data = Response.data
        if(data.length){
            data.map((item,index)=>{              
                    if(item.email === email){
                        if(item.password === password){
                            toast.success('Login Success!')
                            // sessionStorage.setItem('isLogin','true')
                            this.setLoginFunction()
                            this.props.history.push('/dashboard');
                            // <Redirect to='/dashboard' />
                                    
                        }else{
                          toast.error('Enter valid Password')
                        }
                    
                }else{
                    toast.error('Enter valid Email')
                }
            })
        }else{
            toast.error('Enter valid credentials')
        }
        
        
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div>
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            let errors = {};
            if (!values.email) {
             
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            if (!values.password) {
             
              errors.password = "Required";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              setSubmitting(false);
            }, 400);

            this.handleSubmitFunc(values);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "20px",
                textAlign: "left",
                width: "50%",
              }}
            >
              <label>Email</label>
              <Field
              className='rounded  border border-4'
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && errors.email}
              <label>Password</label>
              <Field
              className='rounded border border-4'
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && errors.password}
              <button
                type="submit"
                className="my-2 w-25 btn btn-primary"
                disabled={isSubmitting}
              >
                Login
              </button>
              <Link to='/user/add' className="my-2 w-25 btn btn-success" >Registration</Link>
            </form>
          )}
        </Formik>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    setLogin:(value)=> dispatch(setLogin(value))
  }
}


export default connect(null,mapDispatchToProps) (Login);
