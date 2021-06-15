import React from 'react';
import {projectFirestore} from '../firebase/config'
// import DeleteIcon from '@material-ui/icons/Delete';
// import { useAuth } from '../context/AuthContext';
import { IconButton } from '@material-ui/core';
import { Delete } from '@material-ui/icons';

const DeleteBtn = ({id}) => {

// const {currentUser} = useAuth();
const databaseRef = projectFirestore.collection('images');
const deleteHandleEvent = ()=>{
    let userConfirmation = window.confirm("Do you want to delete this image from your gallery?");
    if(userConfirmation){   
    databaseRef.doc(id).delete()
        .then(()=>{
            alert("Deleted Successfully");
        })
    }
}


    return ( 

        <IconButton className="del-btn"
            onClick={deleteHandleEvent}>
             <Delete/>
            </IconButton>

     );
}
 
export default DeleteBtn;

