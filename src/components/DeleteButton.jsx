import React from "react";

function DeleteButton({ id, onDeleteData }) {
  return (
    <button className="delete-button" onClick={() => onDeleteData(id)}>
      Hapus
    </button>
  );
}
export default DeleteButton;
