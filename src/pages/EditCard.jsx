import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CardInputForm from "../components/CardInputForm";

const EditCard = () => {
  const [formValues, SetFormValues] = useState({
    image: "",
    bgBlue: false,
    borderGreen: false,
    login: "",
    textarea: "",
    skill: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const DB_URL = `http://localhost:8000/cards/${id}`;

  const editData = async () => {
    try {
      const response = await axios.get(DB_URL);

      if (response.status >= 200 && response.status < 300) {
        const { image, bgBlue, borderGreen, login, skill, textarea, id } =
          response.data;
        SetFormValues((prev) => ({
          ...prev,
          image: image,
          bgBlue: bgBlue,
          borderGreen: borderGreen,
          login: login,
          textarea: textarea,
          skill: skill,
        }));
      } else {
        console.error("Error posting data:", error);
      }
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  const updateData = async () => {
    try {
      const response = await axios.put(DB_URL, formValues);

      if (response.status >= 200 && response.status < 300) {
        navigate("/");
      } else {
        console.error("Error posting data:", error);
      }
    } catch (error) {
      console.error("Error posting data:", error);
    }
    console.log("dbupdate");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const image = e.target.image.value;
    const borderGreen = e.target.border_green.checked;
    const bgBlue = e.target.bg_blue.checked;
    const login = e.target.login.value;
    const textarea = e.target.textarea.value;
    const skill = e.target.skill.value;

    SetFormValues((prev) => ({
      ...prev,
      image: image,
      bgBlue: bgBlue,
      borderGreen: borderGreen,
      login: login,
      textarea: textarea,
      skill: skill,
    }));

    setIsSubmitted(() => true);
  };

  useEffect(() => {
    if (isSubmitted) {
      updateData();
    }
  }, [formValues]);

  useEffect(() => {
    editData();
  }, []);

  return (
    <div className="w-full h-[100vh] bg-slate-800 flex items-center justify-center">
      <CardInputForm
        handleSubmit={handleSubmit}
        title={"Edit card"}
        formValues={formValues}
        SetFormValues={SetFormValues}
      />
    </div>
  );
};

export default EditCard;
