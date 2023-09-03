"use client";

import { useState } from "react";

export default function ContactForm() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Full name: ", fullname);
    console.log("Email: ", email);
    console.log("Message: ", message);

    const res = await fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        email,
        message,
      }),
    });

    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);

    if (success) {
      setFullname("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <>
    
      <div className=" sm:mt-[180px] mt-[30px] px-10 py-20 max-w-3xl mx-auto z-30">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <p>Please fill in the form below</p>
        <form
          onSubmit={handleSubmit}
          className="py-4 mt-4 border-t flex flex-col gap-5"
        >
          <div>
            <label htmlFor="fullname">Full Name</label>
            <input
              onChange={(e) => setFullname(e.target.value)}
              value={fullname}
              type="text"
              id="fullname"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="text"
              id="email"
              placeholder="info@gmail.com"
            />
          </div>

          <div>
            <label htmlFor="message">Your Message</label>
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              className="h-32"
              id="message"
              placeholder="Type your message here..."
            ></textarea>
          </div>

          <button
            className="bg-[#c93179] p-3 text-white font-bold"
            type="submit"
          >
            Send
          </button>
        </form>

        {/* <div className="bg-slate-100 flex flex-col">
          {error &&
            error.map((e) => (
              <div className={`${
                  success ? "text-[#c93179]" : "text-white"
                } px-5 py-2`}
              >
                {e}
              </div>
            ))}
        </div> */}
      </div>
    </>
  );
}
