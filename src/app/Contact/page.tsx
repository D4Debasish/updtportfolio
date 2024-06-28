"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    descrip: "6000478573",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    descrip: "ddebu168@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    descrip: "Nagaon, Assam",
  },
];

interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });
  const resetForm = () => {
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post<{ message: string }>(
        "/api/send-email",
        formData
      );
      alert(response.data.message);
    } catch (error) {
      alert("Failed to send message. Please try again later.");
    }
    resetForm();
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px] xl:gap-[60px]">
          {/* forms */}
          <div className="xl:h-[40%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-6 bg-gray-800 rounded-xl"
              onSubmit={handleSubmit}
            >
              <h3 className=" text-3xl text-accent"> Lets Us Communicate</h3>
              <p className="text-white/60">
                Hey there, it will be nice to communicate with you. If you are a
                Hiring Manager please reach out to me, I am immediately willing
                to join 😊.
              </p>
              {/* input field */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                <Input
                  type="text"
                  name="firstname"
                  placeholder="Firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  name="lastname"
                  placeholder="Lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  name="phone"
                  placeholder="Phone No."
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              {/* textArea */}
              <Textarea
                name="message"
                placeholder="Type your Message here"
                className="h-[200px]"
                value={formData.message}
                onChange={handleChange}
              />

              {/* btns */}
              <Button
                type="submit"
                size="sm"
                className="max-w-40"
                variant="cont"
              >
                Send Message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, key) => {
                return (
                  <li key={key} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-gray-900 text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div>
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.descrip}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
