"use client"

import Image from "next/image";
import { useState } from "react";

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Submit logic goes here
    console.log(formState);

    // Simulate form submission success
    setIsSubmitted(true);

    // Clear form fields after submission
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="pt-10 pb-10 dark:bg-black">
      <div className="container mx-auto">
      <div className="flex justify-center mt-10 mb-10">
        <h2 className="text-lg md:text-4xl mb-4 pb-3 pl-3 text-white dark:text-white max-w-4xl rounded-lg border-4 md:border-8 border-indigo-500/100 text-center bg-indigo-500 font-bold">
          Contact Me
        </h2>
      </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left side image */}
          <div className="flex justify-center animate__animated animate__slideInRight">
            <Image
              src="/images/working.gif" 
              alt="Coder GIF"
              width={500}
              height={500}
              className="max-w-full h-auto border-2 border-gray-400"
            />
          </div>

          {/* Right side form */}
          <div className="animate__animated animate__slideInLeft">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formState.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full p-4 border-2 border-gray-300 rounded-lg text-black"
              />
              <input
                type="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full p-4 border-2 border-gray-300 rounded-lg text-black"
              />
              <input
                type="text"
                name="subject"
                value={formState.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="w-full p-4 border-2 border-gray-300 rounded-lg text-black"
              />
              <textarea
                name="message"
                value={formState.message}
                onChange={handleChange}
                placeholder="Enter your message here..."
                rows={6}
                required
                className="w-full p-4 border-2 border-gray-300 rounded-lg text-black"
              />
              <button
                type="submit"
                className="w-full p-4 bg-indigo-500 text-white font-bold rounded-lg hover:bg-blue-600"
              >
                Send Message
              </button>
            </form>

            {/* Success message */}
            {isSubmitted && (
              <div className="mt-4 bg-green-500 text-white p-4 rounded-lg">
                <strong>Success!</strong> Your message has been sent successfully.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
