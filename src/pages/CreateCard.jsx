import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardInputForm from "../components/CardInputForm";

const CreateCard = () => {
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

  const DB_URL = "http://localhost:8000/cards";

  const postData = async () => {
    try {
      const response = await axios.post(DB_URL, formValues);

      if (response.status >= 200 && response.status < 300) {
        navigate("/");
      } else {
        console.error("Error posting data:", error);
      }
    } catch (error) {
      console.error("Error posting data:", error);
    }
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
      postData();
    }
  }, [formValues]);

  return (
    <div className="w-full h-[100vh] bg-slate-800 flex items-center justify-center">
      <CardInputForm
        handleSubmit={handleSubmit}
        title={"Create new card"}
        formValues={formValues}
        SetFormValues={SetFormValues}
      />
    </div>
  );
};

export default CreateCard;
