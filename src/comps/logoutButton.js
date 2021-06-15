import React, {useState} from 'react';
import {Button,Alert} from "react-bootstrap";
import {useAuth} from '../context/AuthContext';
import {useHistory}  from 'react-router-dom';
const LogoutBtn = () => {

    const history = useHistory();
    const {currentUser,logout} = useAuth();
    const [error, seterror] = useState("");

    async function handleLogout(){
        try{
            await logout();
            history.push("/login");
        }catch{
            seterror("Failed to logout !")
        }
    }
    return ( 
        <div className="profile">
          <div className="user">
          <strong>User:</strong> {currentUser.email}
          </div>
               <div className="text-center logoutbtn">
               <Button variant="link" onClick={handleLogout}>Logout</Button>
               {error && <Alert variant="danger">{error}</Alert>}
         
           </div>
         </div>
     );
}
 export default LogoutBtn














 