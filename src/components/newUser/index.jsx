import React, { useState } from "react";
import Card from "../UI/card";
import './style.scss';
import NewUserForm from './newUserForm/index';
import NegativeNumber from "../errors/negativeNumber";

const NewUser = (props) => {

  const [errorStatus, setErrorStatus] = useState(false);
  //  to get the data from son component and send it to the father component
  const savedUserData = (newUserData) => {
    const userData = {
      id: Math.random().toString(),
      ...newUserData
    };
    if (userData.age.trim() <= 0) {
      setErrorStatus(true);
      return;
    } else {
      props.onUserDataAdded(userData);
    }
  };

  const errorStat = (val) => {
    setErrorStatus(val);
  };

  return (
    <React.Fragment>
      {errorStatus === true ? <NegativeNumber errorStatValue={errorStat} /> : ''}
      <Card>
        <div className="new-user-wrapper">
          <NewUserForm onSaveUserData={savedUserData} />
        </div>
      </Card>
    </React.Fragment>
  );
};

export default NewUser;