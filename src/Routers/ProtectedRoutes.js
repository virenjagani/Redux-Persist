import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import DashBoard from "../pages/DashBoard";
import { connect } from "react-redux";

class ProtectedRoutes extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      isLogin: this.props.isLogin.setLogin,
      // isLogin: sessionStorage.getItem("isLogin"),
    };
    console.log(this.props.isLogin.setLogin)

    
  }

  render() {
    return <div>
        {
            // this.state.isLogin === "true"
            this.state.isLogin === true
                  ? <DashBoard/>
                  : <Redirect to='/login'/>
        }
    </div>;
  }
}


const mapStateToProps =(state)=>{
    return {
        isLogin:state.user
    }
}

export default connect(mapStateToProps,null) (ProtectedRoutes);
