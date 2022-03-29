import React from "react";
import Card from "../UI/card";
import './style.scss';
import NewUserForm from './newUserForm/index';

const NewUser = (props) => {
  //  to get the data from son component and send it to the father component
  const savedUserData = (newUserData) => {
    const userData = {
      id: Math.random().toString(),
      ...newUserData
    };
    props.onUserDataAdded(userData);
  };


  return (
    <Card>
      <div className="new-user-wrapper">
        <NewUserForm onSaveUserData={savedUserData} />
      </div>
    </Card>
  );
};

export default NewUser;