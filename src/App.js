import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UsersList";

function App() {
  const [usersList, setUserList] = useState([]);

  function addUserHandler(username, age, id) {
    setUserList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: username, age: age, id: Math.random().toString() },
      ];
    });
  }
  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </>
  );
}

export default App;
