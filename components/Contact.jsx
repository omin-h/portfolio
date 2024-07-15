"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
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
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className={`xl:mt-12 xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >

      <h1 className="heading">
        Contact{" "}
        <span className="text-purple">Me</span>
      </h1>
      <div
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl border border-gray-500 mt-2 w-[200px]'
      >
       
       
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8' 
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              required
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              autoComplete="name"//new line auto complete issue
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              required
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your Email?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              autoComplete="email"//new line auto complete issue
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              required
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What do you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              autoComplete="message" //new line auto complete issue         
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>

     
    </div>
  );
};

export default Contact;