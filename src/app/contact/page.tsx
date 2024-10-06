"use client";
import { useState, ChangeEvent, FormEvent } from "react";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const ContactForm = () => {
  const [formData, setFormData] = useState<FormState>(initialState);
  const [status, setStatus] = useState<string>("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatus("loading");

    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        setStatus("success");
        setFormData(initialState); // Resetuj formularz po udanym wysłaniu
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="form-control w-full max-w-md mx-auto p-6 border-2 border-white bg-black shadow-lg rounded-lg"
    >
      <h2 className="text-2xl font-bold text-center mb-6">Contact Us</h2>
      <div className="mb-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="input input-bordered w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="input input-bordered w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          required
          className="input text-black input-bordered w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
          className="textarea text-black  textarea-bordered w-full h-32 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className={`btn btn-primary w-full py-2 rounded-md text-white ${
          status === "loading" ? "loading" : ""
        }`}
      >
        {status === "loading" ? "Sending..." : "Send"}
      </button>

      {status === "error" && (
        <p className="text-red-500 mt-2 text-center">
          An error occurred while sending the message.
        </p>
      )}
      {status === "success" && (
        <p className="text-green-500 mt-2 text-center">
          Message sent successfully!
        </p>
      )}
    </form>
  );
};

export default ContactForm;
