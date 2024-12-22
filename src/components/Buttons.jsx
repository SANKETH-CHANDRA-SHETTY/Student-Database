import React from "react";

export default function Buttons(props) {
  return (
    <>
      <div className="button_div">
        <button className="buttons" id="add" onClick={props.onAdd}>
          add
        </button>
        <button className="buttons" id="remove" onClick={props.onRemove}>
          remove
        </button>
        <button className="buttons" id="update" onClick={props.onUpdate}>
          update
        </button>
      </div>
    </>
  );
}
