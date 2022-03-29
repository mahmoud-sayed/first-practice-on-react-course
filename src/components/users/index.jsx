import React from "react";
import './style.scss';
import Card from "../UI/card";
import User from "./user";

// for rendering the data
const Users = (props) => {
  const users = props.users;

  return (
    <Card>
      <div className="users-wrapper">
        {users && users.map((user) => (<User name={user.name} age={user.age} key={user.id} />))}
      </div>
    </Card>
  );
};
export default Users;