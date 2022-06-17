import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

import styles from "./AddUser.module.css";

function AddUser() {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  function usernameChangeHandler(event) {
    setEnteredUsername(event.target.value);
  }

  function addUserHandler(event) {
    event.preventDefault();
    console.log(enteredUsername, enteredAge);
  }

  function addAgeHandler(event) {
    setEnteredAge(event.target.value);
  }

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={usernameChangeHandler} />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" onChange={addAgeHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}

export default AddUser;
