import React, { useState } from "react";

export default function AddForm(props) {
  return (
    <>
      <br />
      <br />
      <br />
      <h1>Add Student</h1>
      <div className="forms" id="Addform">
        <label htmlFor="sname">Name </label>
        <input type="text" id="sname" />
        <br />
        <br />
        <label htmlFor="bp">BirthPlace </label>
        <input type="text" id="bp" />
        <br />
        <br />
        <label htmlFor="cgpa">CGPA </label>
        <input type="number" id="cgpa" />
        <br />
        <br />
        <label htmlFor="div">Division </label>
        <select id="div">
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
          <option value="E">E</option>
          <option value="F">F</option>
        </select>
        <br />
        <br />
        <button type="button" id="addSubmit" onClick={props.Type}>
          Add
        </button>
        <br />
        <br />
      </div>
    </>
  );
}
