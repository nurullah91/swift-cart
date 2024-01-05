/* eslint-disable react/prop-types */

import { Navigate,  } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    // getting login token from local storage;
    const loginToken = localStorage.getItem("loginToken");
    if (loginToken) {
        return children;
    }
    
    // navigate to the login page if login token is not available
    return <Navigate to={'/login'}/>
        


};

export default PrivateRoute;