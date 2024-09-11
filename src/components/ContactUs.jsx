import React, { useEffect, useState } from 'react'
import emailjs from "emailjs-com"; // Import EmailJS

const ContactUs = () => {
    const [data, setData] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);
    const [show, setShow] = useState(false);
  
  
    const handleChange = (e) => {
      setData({ ...data, [e.target.name]: e.target.value });
    };
  
     // Hide the message after 10 seconds
     useEffect(() => {
      if (show) {
        const timer = setTimeout(() => {
          setShow(false); // Hide the message after 10 seconds
        }, 5000); // 10,000 milliseconds = 10 seconds
  
        return () => clearTimeout(timer); // Cleanup the timer when component unmounts or `show` changes
      }
    }, [show]);
  
    const handleSubmit = (e) => {
      e.preventDefault(); // Prevent page reload
  
      // Check if any field is empty
      if (!data.name || !data.email || !data.message) {
        console.log("One or more fields are empty. No API call made.");
        return; // Do nothing if fields are empty
      } else {
        // Replace with your EmailJS details
        const serviceID = "service_3vy0qa7";
        const templateID = "template_t44ldmd";
        const userID = "jsWJ_h7DsIhKUFLzc";
  
        // Send the form data using EmailJS
        emailjs.send(serviceID, templateID, data, userID).then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            setSubmitted(true); // Optionally set a success flag
            setShow(true)
            setData({ name: "", email: "", message: "" }); // Reset the form
          },
          (error) => {
            console.error("FAILED...", error);
          }
        );
      }
    };
  return (
    <div>
      <section id='contact' className="text-gray-600  bg-black  body-font relative">
  <div className="absolute inset-0">
    <iframe
      width="100%"
      height="100%"
      frameBorder="0"
      marginHeight="0"
      marginWidth="0"
      title="map"
      scrolling="no"
      src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
      style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}
    ></iframe>
  </div>
  <div className="container px-5 py-24 mx-auto  flex">
    <div className="lg:w-1/3 md:w-1/2 bg-black  rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
    <h2 className="font-bold text-lg  mb-1 title-font text-yellow-600 ">
              Write to us...
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              We'll get back to you shortly!
            </p>
            <form onSubmit={handleSubmit} className="w-full">
              <div className="relative mb-4 flex flex-col w-10/12 items-start">
                <label className="leading-7 text-sm text-gray-600 ">
                  Name <span className="text-red-600"> *</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={data.name}
                  onChange={handleChange}
                  className="bg-white rounded border border-gray-300 w-full focus:border-yellow-600 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>
              <div className="relative mb-4 flex flex-col w-10/12 items-start">
                <label className="leading-7 text-sm text-gray-600 ">
                  Email <span className="text-red-600"> *</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                  className="bg-white rounded border border-gray-300 w-full focus:border-yellow-600 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>
              <div className="relative mb-4 flex flex-col items-start w-10/12">
                <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                  Message <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={data.message}
                  onChange={handleChange}
                  className="bg-white rounded border border-gray-300 w-full focus:border-yellow-600 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="text-white bg-yellow-600 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-700 rounded text-lg"
              >
                Send
              </button>
              {show && <p className="text-green-600 mt-2" >Message Sent Successfully!</p>}
              </form>
    </div>
  </div>
</section>

    </div>
  )
}

export default ContactUs
