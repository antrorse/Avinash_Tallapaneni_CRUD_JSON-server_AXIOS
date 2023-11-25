import React from "react";
import { useNavigate } from "react-router-dom";

const CardInputForm = ({ handleSubmit, title, formValues, SetFormValues }) => {
  const { image, bgBlue, borderGreen, login, skill, textarea, id } = formValues;

  // Ensure initial values are not undefined or null
  const initialImage = image || "";
  const initialBorderGreen = borderGreen || false;
  const initialBgBlue = bgBlue || false;
  const initialLogin = login || "auth";
  const initialTextarea = textarea || "";
  const initialSkill = skill || "";
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <form
      className="w-[600px]  p-4 bg-slate-700 shadow-md rounded-md text-slate-200 flex flex-col gap-3"
      onSubmit={handleSubmit}
    >
      <label htmlFor="" className="block text-xl font-bold mb-2">
        {title}
      </label>

      <div className="mb-4">
        <label htmlFor="text-input" className="block text-sm font-bold mb-2">
          Image link
        </label>
        <input
          type="text"
          id="text-input"
          name="image"
          value={initialImage}
          onChange={(e) =>
            SetFormValues((prev) => ({
              ...prev,
              image: e.target.value,
            }))
          }
          placeholder="image link"
          className="w-full p-2 border rounded-md  text-sm ring-1  bg-slate-700"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">
          background styling for Card
        </label>
        <div className="flex gap-6">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="border_green"
              name="border_green"
              value="green"
              checked={initialBorderGreen}
              onChange={(e) =>
                SetFormValues((prev) => ({
                  ...prev,
                  borderGreen: e.target.checked,
                }))
              }
              className="mr-2 leading-tight"
            />
            <label
              name="checkbox"
              htmlFor="border_green"
              className="text-sm text-slate-200"
            >
              Green Border
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="bg_blue"
              name="bg_blue"
              value="blue"
              checked={initialBgBlue}
              onChange={(e) =>
                SetFormValues((prev) => ({
                  ...prev,
                  bgBlue: e.target.checked,
                }))
              }
              className="mr-2 leading-tight"
            />
            <label
              name="checkbox"
              htmlFor="bg_blue"
              className="text-sm text-slate-200"
            >
              Blue Background
            </label>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Logged using:</label>
        <div className="flex">
          <input
            type="radio"
            id="radio1"
            name="login"
            value="auth"
            checked={initialLogin === "auth"}
            onChange={() =>
              SetFormValues((prev) => ({
                ...prev,
                login: "auth",
              }))
            }
            className="mr-2 leading-tight"
          />
          <label htmlFor="radio1" className="mr-4">
            Auth Login
          </label>
          <input
            type="radio"
            id="radio2"
            name="login"
            value="msal"
            checked={initialLogin === "msal"}
            onChange={() =>
              SetFormValues((prev) => ({
                ...prev,
                login: "msal",
              }))
            }
            className="mr-2 leading-tight"
          />
          <label htmlFor="radio2">Msal Login</label>
        </div>
      </div>

      <div className="mb-4 ">
        <label htmlFor="textarea" className="block text-sm font-bold mb-2">
          share your experience with implementing Micorsoft Authentication
          Library (Msal)
        </label>
        <textarea
          id="textarea"
          name="textarea"
          rows="3"
          placeholder="Enter text"
          value={initialTextarea}
          onChange={(e) =>
            SetFormValues((prev) => ({
              ...prev,
              textarea: e.target.value,
            }))
          }
          className="w-full p-2 border rounded-md bg-slate-700 text-sm ring-1 placeholder:text-slate-400"
        ></textarea>
      </div>

      <div className="mb-4">
        <label htmlFor="select" className="block text-sm font-bold mb-2">
          programming lang fluent with:
        </label>
        <select
          id="select"
          name="skill"
          value={initialSkill}
          onChange={(e) =>
            SetFormValues((prev) => ({
              ...prev,
              skill: e.target.value,
            }))
          }
          className="w-full p-2 border rounded-md  text-sm ring-1 bg-slate-700 placeholder:text-slate-400"
        >
          <option value="react">ReactJS</option>
          <option value="javascript">Javascript</option>
          <option value="nodejs">Nodejs</option>
        </select>
      </div>

      <div className="flex gap-5">
        <button
          onClick={handleCancel}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default CardInputForm;
