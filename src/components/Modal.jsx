import axios from "axios";
import React from "react";

const Modal = ({
  handleCancel,
  deleteCardID,
  setDeleteCardID,
  setIsLoading,
}) => {
  const DB_URL = `http://localhost:8000/cards/${deleteCardID}`;

  const deleteCard = async () => {
    await axios.delete(DB_URL);
    setIsLoading(() => true);
    setDeleteCardID(() => null);
  };

  return (
    <div
      className={` absolute  top-0 left-0   w-full h-full items-center justify-center  bg-slate-200/80 ${
        deleteCardID !== null ? "modal flex" : "hidden "
      }`}
    >
      <div className="modal w-[400px] flex flex-col gap-4 bg-slate-800 p-4 rounded-md ">
        <div className="text-2xl">
          Are you sure you want to delete the card?
        </div>
        <div className="">
          Are you sure you want to delete the cards? once clicked on confirm
          card data cannot be retrived
        </div>

        <div className="flex gap-5">
          <button
            onClick={handleCancel}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Cancel
          </button>
          <button
            onClick={deleteCard}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
