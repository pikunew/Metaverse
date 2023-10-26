import React, { useState } from "react";
import { isEmail } from "validator"; // Import the isEmail function from validator.js

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isEmail(email)) {
      setError("Invalid email address");
      return;
    }

    const res = await fetch("/app/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });

    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);

    if (success) {
      setEmail("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative">
        <input
          className="items-start w-full py-3 lg:px-40 px-16 bg-[#FFCDB2] border-t-1 border-gray-800 rounded-xl placeholder:font-semibold placeholder:text-gray-900"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          className="absolute right-8 top-1/2 transform -translate-y-[50%] bg-transparent cursor-pointer transition-all ease-in-out hover:text-white"
          type="submit"
        >
          &#8594;
        </button>
      </div>
      {error && <div className="text-red-500">{error}</div>}
      {success && (
        <div className="text-green-500">You&apos;ve successfully subscribed!</div>
      )}
    </form>
  );
}
