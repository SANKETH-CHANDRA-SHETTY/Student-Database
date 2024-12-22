import "./App.css";
import React, { useState } from "react";
import Header from "./components/header";
import Buttons from "./components/buttons";
import AddForm from "./components/AddForm";

let using_list = [
  {
    name: "sanketh",
    id: 1,
    birth_place: "kundapur",
    cgpa: 8.22,
    div: "A",
  },
  {
    name: "jeevan",
    id: 2,
    birth_place: "kustagi",
    cgpa: 8.55,
    div: "A",
  },
  {
    name: "Nandan",
    id: 3,
    birth_place: "Hubli",
    cgpa: 8.1,
    div: "D",
  },
];

function App() {
  const [formType, setFormType] = useState(null);

  function handleAdd() {
    setFormType("add");
  }

  function handleRemove() {
    setFormType("remove");
  }

  function handleUpdate() {
    setFormType("update");
  }

  function closeform() {
    let sname = document.getElementById("sname").value;
    let bp = document.getElementById("bp").value;
    let cgpa = document.getElementById("cgpa").value;
    let div = document.getElementById("div").value;
    let id = using_list.length + 1;

    using_list.push({
      name: sname,
      id: id,
      birth_place: bp,
      cgpa: cgpa,
      div: div,
    });
    console.log("Updated Student List:", using_list);
    setFormType(null);
  }

  return (
    <>
      <Header />
      {formType === null && (
        <Buttons
          onAdd={handleAdd}
          onRemove={handleRemove}
          onUpdate={handleUpdate}
        />
      )}
      {formType === "add" && <AddForm Type={closeform} />}
      {formType === "remove" && <RemoveForm />}
      {formType === "update" && <UpdateForm />}
    </>
  );
}

export default App;
