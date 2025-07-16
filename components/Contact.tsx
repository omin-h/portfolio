"use client";

import React, { useRef, useState, ChangeEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MagicButton from './ui/magicButton'

interface FormState {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_c1lq97f',
        'template_we2v0hn',
        {
          from_name: form.name,
          to_name: "Omin Hemapriya",
          from_email: form.email,
          to_email: "ominhemapriya14@gmail.com",
          message: form.message,
        },
        '14B2TErxGPpAviJLx'
      )
      .then(
        () => {
          setLoading(false);
          toast.success("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          toast.error("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="flex flex-col items-right lg:w-[600px] bg-black-900 p-8 min-h-screen pb-16">
      <h2 className="heading pb-16 pt-10">
        Contact{" "}
        <span className="text-purple">Me</span>
      </h2>
  
      <div className="bg-black-200 border border-gray-700 rounded-lg shadow-lg">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 p-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              required
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-gray-800 py-4 px-6 placeholder:text-gray-400 text-white rounded-lg outline-none border border-gray-600 font-medium focus:border-purple focus:ring-2 focus:ring-purple transition"
              autoComplete="name"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              required
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your Email?"
              className="bg-gray-800 py-4 px-6 placeholder:text-gray-400 text-white rounded-lg outline-none border border-gray-600 font-medium focus:border-purple focus:ring-2 focus:ring-purple transition"
              autoComplete="email"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              required
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-gray-800 py-4 px-6 placeholder:text-gray-400 text-white rounded-lg outline-none border border-gray-600 font-medium focus:border-purple focus:ring-2 focus:ring-purple transition"
              autoComplete="message"
            />
          </label>

          <MagicButton
            type="submit"
            position="right"
            icon={null}
            handleClick={undefined}
            className="w-full self-center"
            disabled={loading}
          >
            <span className="w-full block px-8 py-2 text-white font-semibold text-lg text-center">
              {loading ? "Sending..." : "Send"}
            </span>
          </MagicButton>
  
        </form>
      </div>
      <ToastContainer />
    </div>
  );

};

export default Contact;
