"use client";
import { Send } from "lucide-react";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

type FormDataProps = {
  name: string;
  email: string;
  message: string;
};

const Connect = () => {
const [formData, setFormData] = useState<FormDataProps>({
  name: "",
  email: "",
  message: "",
});

 const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
    emailjs
      .send(
        "EmailJS",
        "template_zko4cec",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "surJQeZfOB9k_Riok"
      )
      .then(() => {
        alert("Message sent successfully ✅");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        alert("Failed to send message ❌");
      });
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-950 flex items-center justify-center px-4">
      <div className="w-full max-w-3xl text-white">

        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-pink-500 text-transparent bg-clip-text">
            Let’s Connect
          </h1>
          <p className="mt-3 text-gray-400 max-w-xl mx-auto">
            Have a project in mind or just want to say hi?  
            Drop a message and I’ll get back to you.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-gray-900/90 backdrop-blur border border-gray-700 rounded-2xl shadow-xl">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 p-8"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full rounded-lg bg-gray-800 border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
              required
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full rounded-lg bg-gray-800 border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
              required
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
              className="w-full rounded-lg bg-gray-800 border border-gray-700 px-4 py-3 text-white resize-none focus:outline-none focus:border-cyan-400"
              required
            />

            <button
              type="submit"
              className="mt-2 cursor-pointer w-full flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-400 to-pink-500 py-3 font-semibold text-black hover:opacity-90 transition"
            >
              <Send size={18} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Connect;
