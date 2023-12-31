import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "../components/Card";
import axios from "axios";
import Modal from "../components/Modal";

const MainPage = () => {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [deleteCardID, setDeleteCardID] = useState(null);

  const DB_URL = "http://localhost:8000/cards";

  const fetchData = async () => {
    try {
      const response = await axios.get(DB_URL);
      setCards(() => response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/");
    setDeleteCardID(() => null);
  };
  useEffect(() => {
    fetchData();
    if (isLoading) {
      fetchData();
    }
  }, []);
  useEffect(() => {
    if (isLoading) {
      fetchData();
    }
  }, [isLoading]);

  return (
    <div className=" w-full h-[100vh] flex flex-col justify-start items-stretch bg-slate-800 text-slate-100 relative  overflow-scroll">
      <nav className="bg-slate-900 z-10  w-full flex items-center justify-between p-2 fixed ">
        <div className=" flex flex-col items-center ">
          <span className="text-xl">Fetching data using axios.</span>
          <span className="italic text-sm">
            Install json-server and watch the db.json file on port 8000
          </span>
        </div>
        <h1 className="text-3xl font-semibold">CRUD Application</h1>
        <div className="flex items-center justify-end pr-10 gap-3">
          <span className="text-lg italic flex-nowrap">Create new Card</span>
          <button className="bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600">
            <Link to="/create">Create</Link>
          </button>
        </div>
      </nav>
      <div className=" flex flex-col gap-10 justify-start p-10 pt-20">
        <div className="flex flex-wrap gap-5 items-end">
          {cards &&
            cards.map((card, idx) => {
              return (
                <Card key={idx} card={card} setDeleteCardID={setDeleteCardID} />
              );
            })}
        </div>
      </div>

      <Modal
        handleCancel={handleCancel}
        deleteCardID={deleteCardID}
        setDeleteCardID={setDeleteCardID}
        setIsLoading={setIsLoading}
      />
      
    </div>
  );
};

export default MainPage;
