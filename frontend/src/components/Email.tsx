import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { useDispatch } from "react-redux";
import { setOpenEmail } from "../state/email/emailSlice";
import { motion } from "framer-motion";
import { IFormData } from "../interface";
import axios from "axios";

const Email = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState<IFormData>({
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { placeholder, value } = e.target;
    setFormData({
      ...formData,
      [placeholder.toLowerCase()]: value,
    });
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    e: React.ChangeEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/send-email", formData);
      setFormData({
        email: "",
        subject: "",
        message: "",
      });
      alert("The form was submitted, Samuele will reply as soon he can!");
    } catch (error) {
      alert("Something is went wrong, try again or do it later!");
    }
  };

  return (
    <React.StrictMode>
      <div className="fixed bg-[#2A2521] rounded-lg translate-x-[-50%] translate-y-[-50%] top-[45%] left-[50%] w-[300px] md:top-[50%]">
        <div className="flex items-center p-2">
          <IoIosCloseCircle
            className="text-red-500 mr-auto cursor-pointer"
            onClick={() => dispatch(setOpenEmail())}
          />
          <h1 className="text-white font-[600] mr-auto">Contact Me</h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="h-[300px] w-[100%] bg-custom-gradient rounded-lg flex flex-col justify-center items-center"
        >
          <motion.input
            className="p-3 rounded-sm m-3 w-[80%] bg-gray-50"
            type="email"
            placeholder="Email"
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.2 }}
            value={formData.email}
            onChange={handleInputChange}
          />
          <motion.input
            className="p-3 rounded-sm m-3 w-[80%] bg-gray-50"
            type="text"
            placeholder="Subject"
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.2 }}
            onChange={handleInputChange}
            value={formData.subject}
          />
          <motion.textarea
            name="message"
            id="message"
            className="p-3 rounded-sm m-3 h-[80%] w-[80%] align-top box-border overflow-scroll bg-gray-50"
            placeholder="Message"
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.2 }}
            onChange={handleInputChange}
            value={formData.message}
          ></motion.textarea>
          <button
            type="submit"
            className="p-3 rounded-sm m-3 w-[80%] bg-green-700 flex justify-center items-center font-[600] text-white hover:bg-green-600 hover:opacity-50"
          >
            Submit
          </button>
        </form>
      </div>
    </React.StrictMode>
  );
};

export default Email;
