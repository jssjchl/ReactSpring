import React, { Component } from "react";
import ApiService from "../../ApiService";

class UserListComponent extends Component {
  constructor(props) {
    //component의 생성자 선언할 때 사용함
    //props는 상위 컴포넌트에서 전달해주는 속성값, props를 이용해 초기 상태값을 만들 때 constructor가 유용
    //생성자 내에서는 구독작업이나 외부API를 호출하면 안됌,
    super(props); // 권고하는 방식의 생성자 구현, this.props는 생성자 내에서 정의되지 않아 버그 발생 가능성 생김

    this.state = {
      //생성자 내에서는 setState의 호출이 아닌 this.state를 통해 초기값을 할당해줘야함
      //생성자는 this.state를 직접 할당할 수 있지만 다른 곳에선 this.setState()를 사용
      users: [],
      message: null,
    };
  }
  componentDidMount() {
    //외부 API호출이 필요하면 사용함, 비동기통신, DOM 요소에 접근할 때
    this.reloadUserList();
  }
  reloadUserList = () => {
    //유저리스트 불러오기
    ApiService.fetchUsers() //axios == api 통신 사용 프로토콜?
      .then((res) => {
        this.setState({
          users: res.data,
        });
      })
      .catch((err) => {
        console.log("reloadUserList() Errors!", err);
      });
  };

  deleteUser = (userID) => {
    //유저 삭제
    ApiService.deleteUser(userID) //api통신을 통해 DB에 있는 유저 삭제
      .then((res) => {
        this.setState({
          message: "User Deleted Successfully.",
        });
        this.setState({
          users: this.state.users.filter((user) => user.id !== userID),
          //filter 기능을 통해 state에 있는 user배열에서 삭제된 해당 유저 id를 제외하고 다시 배열에 노출
        });
      })
      .catch((err) => {
        console.log("deleteUser() Error!".err);
      });
  };
  editUser = (ID) => {
    window.localStorage.setItem("userID", ID);
    //browser의 localstorage를 사용해 해당 유저 id를 일시적으로 저장, route를 통해 EditUserComponent.jsx로 이동
    this.props.history.push("/edit-user");
    //route에서 /edit-user url로 이동하면 EditUserComponent.jsx 노출하도로 설정
  };
  addUser = () => {
    window.localStorage.removeItem("userID");
    this.props.history.push("/add-user");
  };

  render() {
    //컴포넌트를 정의할 때 무조건 사용해야한다.
    //render함수 내부에서 setState를 호출하면 안됌 ==무한루프에 빠지게 함
    //render함수 반환값은 속성값과 상태값만으로 결정되야함
    //부수효과를 발생시키면 안됌 , 순수하게 렌더링만== 비동기 통신이안 쿠키사용 등
    return (
      <div>
        <h2>User List</h2>
        <button onClick={this.addUser}>Add User</button>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Email</th>
              <th>Age</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map(user => 
              <tr key={user.id}>
                <td>{user.firstName}</td>
                <td>{user.lasgtName}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>{user.salary}</td>
                <td>
                  <button onClick={() => this.editUser(user.id)}>Edit</button>
                  <button onClick={() => this.deleteUser(user.id)}>Delete</button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default UserListComponent;
