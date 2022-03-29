import React, { useState } from "react";
import './style.scss';
import NegativeNumber from './../../errors/negativeNumber';

const NewUserForm = (props) => {

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [nameError, setNameError] = useState(false); // to hold name error
  const [ageError, setAgeError] = useState(false); // to hold age error

  //to handle add name value
  const nameChangeHandler = (e) => {
    setName(e.target.value);
    //to check if there is value in the name filed or not
    name.length >= 0 ? setNameError(false) : setNameError(true);
  };

  //to handle age name value
  const ageChangeHandler = (e) => {
    setAge(e.target.value);
    //to check if there is value in the age filed or not
    age.length >= 0 ? setAgeError(false) : setAgeError(true);

    //check if the age have negative number or not
    // if (age.trim() <= 0) {
    //still didn't get how to make it maybe will try to follow something like that https://www.c-sharpcorner.com/article/how-to-create-a-modal-pop-up-in-reactjs-appliaction/
    // }
  };

  //handel submit of the form and send it to the parent components 
  const submitHandler = (e) => {
    e.preventDefault();

    // to check if bot of name and age have value or not and check each of them individually
    if (name.trim().length === 0 && age.trim().length === 0) {
      setNameError(true);
      setAgeError(true);
    } else if (name.trim().length === 0) {
      setNameError(true);
    } else if (age.trim().length === 0) {
      setAgeError(true);
    } else {

      // to add the data in one place to send it to the parent component
      const userData = {
        name: name,
        age: age
      };
      // sending the data ot the parent component
      props.onSaveUserData(userData);

      //set name and age fields to empty after submit
      setName('');
      setAge('');
    }
  };


  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="name" className={nameError === true ? 'error-label' : ''}>User Name</label>
      <input id="name" type="text" onChange={nameChangeHandler} value={name} className={nameError === true ? 'error-input' : ''} />
      <label htmlFor="age" className={ageError === true ? 'error-label' : ''}>Age</label>
      <input type="number" name="age" id="age" min='1' onChange={ageChangeHandler} value={age} className={ageError === true ? 'error-input' : ''} />
      <button type="submit">Add User</button>
    </form>
  );
};

export default NewUserForm;