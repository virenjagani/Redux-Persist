import { ADD_USER, DELETE_USER, FAIL_REQUEST, GET_USER_LIST, GET_USER_OBJ, MAKE_REQUEST, SET_LOGIN, UPDATE_USER } from "./actionType"
import axios from 'axios'
export const makeRequest =()=>{
    return {
        type:MAKE_REQUEST
    }
}

export const failRequest =(error)=>{
    return {
        type:FAIL_REQUEST,
        payload:error
    }
}

export const getUserList =(data)=>{
    return {
        type:GET_USER_LIST,
        payload:data
    }
}
export const addUser = () =>{
    return {
        type:ADD_USER
    }
}
export const deleteUser=()=>{
    return {
        type:DELETE_USER
    }
}



export const updateUser=(data)=>{
    return {
        type:UPDATE_USER,
        payload:data
    }
}
export const getUserObj=(data)=>{
return {
    type:GET_USER_OBJ,
    payload:data
}
}

export const setLogin =(value)=>{
    
    return {
        type:SET_LOGIN,
        payload:value
    }
}



export const fetchUserData = () =>{
    return (dispatch)=>{
        dispatch(makeRequest())

        axios.get('http://localhost:3000/user')
        .then(res=>{
            const userdata = res.data
            dispatch(getUserList(userdata))
        }).catch(err=>{
            dispatch(failRequest(err.message))
        })
    }
}


export const fetchAddUser = (data) =>{
    return (dispatch)=>{
        dispatch(makeRequest())

        axios.post('http://localhost:3000/user',data)
        .then(res=>{
            const userdata = res.data
            dispatch(addUser())
        }).catch(err=>{
            dispatch(failRequest(err.message))
        })
    }
}


export const removeUser = (id) =>{
    return (dispatch)=>{
        dispatch(makeRequest())
        
        axios.delete('http://localhost:3000/user/'+id)
        .then(res=>{
            
            dispatch(deleteUser())
        }).catch(err=>{
            dispatch(failRequest(err.message))
        })
    }
}

export const fetchUpdatedUser = (data,id) =>{
   
    return (dispatch)=>{
        dispatch(makeRequest())

        axios.put('http://localhost:3000/user/'+id,data)
        .then(res=>{
          
            dispatch(updateUser())
        }).catch(err=>{
            dispatch(failRequest(err.message))
        })
    }

}
export const fetchUserObj = (id) =>{
    return (dispatch)=>{
        dispatch(makeRequest())
        
        axios.get('http://localhost:3000/user/'+id)
        .then(res=>{
            
            dispatch(getUserObj(res.data))
        }).catch(err=>{
            dispatch(failRequest(err.message))
        })
    }
}


