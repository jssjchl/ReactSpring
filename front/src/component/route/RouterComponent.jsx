import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddUserComponent from '../user/AddUserComponent';
import EditUserComponent from '../user/EditUserComponent';
import UserListComponent from '../user/UserListComponent';

const RouterComponent = () => {
    return (
        <div>
            <BrowserRouter>
            <div style={style}>
                <Routes>
                    <Route path="/" element ={UserListComponent}/>
                    <Route path="/users" element={UserListComponent}/>
                    <Route path="/add-users" element={AddUserComponent}/>
                    <Route path="/edit-users" element={EditUserComponent}/>
                </Routes>
            </div>
            </BrowserRouter>
        </div>
    );
};
const style={
    color :'red',
    margin:'10px'
}

export default RouterComponent;