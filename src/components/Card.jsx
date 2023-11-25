import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ card, setIsLoading }) => {
  const { image, bgBlue, borderGreen, login, skill, textarea, id } = card;
  const placeholder = "https://placehold.co/300x150";

  const onImageError = (e) => {
    e.target.src = placeholder;
  };

  const DB_URL = `http://localhost:8000/cards/${id}`;

  const deleteCard = async () => {
    await axios.delete(DB_URL);
    setIsLoading(() => true);
  };

  return (
    <div className="flex relative justify-center">
      <div
        className={`w-[300px] bg-slate-800 flex flex-col rounded-md overflow-hidden text-slate-300  ${
          borderGreen ? "ring-green-600 ring-4" : " ring-slate-600 ring-2"
        }`}
      >
        <div className="card_image w-full h-[150px]">
          <img
            src={image ? image : placeholder}
            onError={onImageError}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className={`card_body flex flex-col gap-2 p-2 ${
            bgBlue ? "bg-blue-900  font-semibold " : "bg-slate-800"
          }`}
        >
          <div className="flex justify-between items-center">
            <span className="card_log text-md whitespace-nowrap">
              {" "}
              logged using :{" "}
              <span className=" bg-purple-500 p-[0.15rem] px-2 w-fit text-xs italic font-semibold rounded-md">
                {login.toUpperCase()}
              </span>
            </span>
            <span className="card_skill text-md whitespace-nowrap">
              {" "}
              Skills :{" "}
              <span className="bg-purple-500 p-[0.15rem] px-2  w-fit text-xs italic font-semibold rounded-md">
                {skill.toUpperCase()}
              </span>
            </span>
          </div>

          <div className="card_msg italic font-semibold text-sm break-words h-[120px] outline rounded-sm outline-1 p-[2px]">
            {textarea ? textarea : "Nothing to Show"}
          </div>
          <div className="flex justify-between p-2 w-full ">
            <button className="bg-green-800 w-[75px] text-white px-2 py-1 rounded-md hover:bg-blue-600">
              <Link to={`/edit/${id}`}>edit</Link>
            </button>
            <button
              className="bg-red-800 w-[75px] text-white px-2 py-1 rounded-md hover:bg-blue-600"
              onClick={deleteCard}
            >
              delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
