import React, { Component } from 'react';
import ApiService from '../../ApiService';
class AddUserComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            username: ``,
            password: ``,
            firstName: ``,
            lastName: ``,
            age: ``,
            salary: ``,
            message: null
        }
    }

    onChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    saveUser = (e) => {
        e.preventDefault();

        let user = {
            username: this.state.username,
            password: this.state.password,
            firstName: this.state.firstName,
            age: this.state.age,
            salary: this.state.salary
        }

        ApiService.addUser(user)
        .then( res =>{
            this.setState({
                message: user.username +'님이 성공적으로 등록되었습니다.'
            })
            console.log(this.state.message);
            this.props.history.push('/user');
        })
        .catch(err =>{
            console.log('saveUser() 에러',err);
        })
    }
    
    render() {
        return (
            <div>
                <h2>ADD USER</h2>
                <form>
                    <div>
                        <label>User Name:</label>
                        <input type="text" placeholder='please input your username' name='username' value={this.state.username} onChange={this.onChange} />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="password" placeholder='please input your password' name='password' value={this.state.password} onChange={this.onChange}/>
                    </div>
                    <div>
                        <label>First Name:</label>
                        <input type="text" placeholder='please input your password' name='password' value={this.state.password} onChange={this.onChange}/>
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="password" placeholder='please input your password' name='password' value={this.state.password} onChange={this.onChange}/>
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="password" placeholder='please input your password' name='password' value={this.state.password} onChange={this.onChange}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddUserComponent;