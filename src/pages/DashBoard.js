import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { setLogin } from '../redux/action';
import { connect } from 'react-redux';

class DashBoard extends Component {
    handleLogout = (e)=>{
        this.props.setLogin(false)
        // sessionStorage.setItem('isLogin','false')
        console.log('Logout')
    }
    render() {
        return (
            <div>
                DashBoard
                <Link to='/login' className='btn btn-danger' onClick={()=>this.handleLogout()} >Logout</Link>
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
      setLogin: (value) => dispatch(setLogin(value)),
    
    };
  };

export default connect(null,mapDispatchToProps) (DashBoard);