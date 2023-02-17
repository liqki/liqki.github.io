import React, { useRef, useState } from "react";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import OpenNavMenu from "../components/OpenNavMenu";
import emailjs from "@emailjs/browser";

function Contact({ setIsOpened }) {
  // states to reset inputs after submit
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [isSent, setIsSent] = useState(false);

  // state to display error/success message
  const [error, setError] = useState(false);
  const [warning, setWarning] = useState(false);
  const [success, setSuccess] = useState(false);

  // ref to access form
  const form = useRef();

  const sendEmail = (e) => {
    if (isSent) return;
    // prevent page from reloading
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      setWarning(true);
      return;
    }

    // send email using emailjs
    emailjs
      .sendForm(import.meta.env.EMAIL_SERVICE_ID, import.meta.env.EMAIL_TEMPLATE_ID, form.current, import.meta.env.EMAIL_PUBLIC_KEY)
      .then(setName(""), setEmail(""), setMessage(""), setSuccess(true), setError(false), setWarning(false), setIsSent(true)),
      (error) => {
        setError(true);
        console.log(error);
      };
  };

  return (
    <>
      <OpenNavMenu setIsOpened={setIsOpened} />
      <div className="h-footer w-screen bg-dark text-light flex justify-center items-center noselect">
        <motion.div className="-mb-10 medheight:h-4/5 lg:h-2/3 lg:w-2/5 h-2/3 w-3/4 bg-[#151c25] rounded-3xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="h-[100%] flex flex-col justify-evenly items-center">
            <h2 className="md:text-4xl lowheight:text-3xl lg:mb-10 text-2xl">CONTACT ME</h2>
            <form ref={form} className="lg:gap-16 lg:w-96 md:w-80 gap-10 w-52 flex flex-col">
              <input value={name} onChange={(e) => setName(e.target.value)} name="user_name" className="contact-input" type="text" placeholder="Name" />
              <input value={email} onChange={(e) => setEmail(e.target.value)} name="user_email" className="contact-input" type="email" placeholder="Email" />
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} name="message" className="contact-input resize-none hidescrollbar" placeholder="Message" />
              <div className="flex flex-col justify-center">
                <button
                  disabled={isSent}
                  onClick={sendEmail}
                  className="md:mx-14 lg:mx-28 mx-5 text-lg py-3 rounded-full outline outline-2 outline-green-600 hover:bg-green-600 hover:scale-[1.1] transition-transform duration-300 hover:outline-none"
                >
                  Send
                </button>
                {warning && <label className="text-center text-red-600 lg:mt-5 lg:mb-0 -mb-10 mt-2">Please fill in all fields!</label>}
                {success && <label className="text-center text-green-500 lg:mt-5 lg:mb-0 -mb-10 mt-2">Succes! Thanks for leaving a message!</label>}
                {error && <label className="text-center text-red-600 lg:mt-5 lg:mb-0 -mb-10 mt-2">An error occured!</label>}
              </div>
            </form>
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
