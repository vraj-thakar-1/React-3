import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [userslist, setUsersList] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUsersList((preveUserList) => {
      return [
        ...preveUserList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <>
      <div>
        <AddUser onAddUser={addUserHandler} />
        <UserList users={userslist} />
      </div>
    </>
  );
}

export default App;
