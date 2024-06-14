import React from "react";
import { BackgroundBeams } from "./ui/background-beams";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="hero text-white relative">
      <BackgroundBeams />

      <div className="flex min-h-screen items-center justify-center bg-transparent font-mono">
        <div className="mx-auto w-full max-w-lg px-4 sm:px-0">
          <h1 className="text-4xl font-medium mb-6">Contact me</h1>
          <p className="text-lg text-gray-300 mb-8">Email me at asakashsahu20@gmail.com or message us here:</p>

          <form action="https://api.web3forms.com/submit" className="space-y-6">

            <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-lg text-white focus:border-blue-600 focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label className="absolute top-3 left-0 text-sm text-gray-500 transform peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:translate-y-[-1.5rem] peer-focus:scale-75 peer-focus:text-blue-600 transition-all duration-300">
                  Your name
                </label>
              </div>
              <div className="relative">
                <input
                  type="text"
                  name="email"
                  className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-lg text-white focus:border-blue-600 focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label className="absolute top-3 left-0 text-sm text-gray-500 transform peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:translate-y-[-1.5rem] peer-focus:scale-75 peer-focus:text-blue-600 transition-all duration-300">
                  Your email
                </label>
              </div>
              <div className="relative col-span-2">
                <textarea
                  name="message"
                  className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-lg text-white focus:border-blue-600 focus:outline-none focus:ring-0"
                  placeholder=" "
                ></textarea>
                <label className="absolute top-3 left-0 text-sm text-gray-500 transform peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:translate-y-[-1.5rem] peer-focus:scale-75 peer-focus:text-blue-600 transition-all duration-300">
                  Your message
                </label>
              </div>
            </div>
            <button type="submit" className="w-full sm:w-auto rounded-md bg-black text-lg text-white px-10 py-3 cursor-pointer hover:bg-gray-800 transition duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;



// import React, { useState } from "react";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { BackgroundBeams } from "../components/ui/background-beams";

// const ContactMe = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.email || !formData.subject || !formData.message) {
//       toast.error("Please fill in all fields.");
//       return;
//     }

//     try {
//       await axios.post("/api/send-email", formData);
//       toast.success("Email sent successfully!");
//     } catch (error) {
//       console.error("Error sending email:", error);
//       toast.error("Failed to send email. Please try again later.");
//     }
//   };

//   return (
//     <section className="bg-transparent">
//       <BackgroundBeams/>
//       <ToastContainer position="top-center" autoClose={3000} />
//       <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
//         <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">
//           Contact Me
//         </h2>
//         <p className="mb-8 lg:mb-16 font-light text-center text-gray-500">
//           I'd love if you reached out to me. Even if it's just to say "Hey!".
//           Don't hesitate! Drop me a line and I'll get back to you ASAP!
//         </p>
//         <form onSubmit={handleSubmit} className="space-y-8">
//           <div>
//             <label
//               htmlFor="email"
//               className="block mb-2 text-sm font-medium text-gray-600"
//             >
//               Your email
//             </label>
//             <input
//               type="email"
//               id="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
//               placeholder="example@gmail.com"
//               required
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="subject"
//               className="block mb-2 text-sm font-medium text-gray-600"
//             >
//               Subject
//             </label>
//             <input
//               type="text"
//               id="subject"
//               value={formData.subject}
//               onChange={handleChange}
//               className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
//               placeholder="Let me know how I can help you"
//               required
//             />
//           </div>
//           <div className="sm:col-span-2">
//             <label
//               htmlFor="message"
//               className="block mb-2 text-sm font-medium text-gray-600"
//             >
//               Your message
//             </label>
//             <textarea
//               id="message"
//               rows="6"
//               value={formData.message}
//               onChange={handleChange}
//               className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
//               placeholder="Leave a comment..."
//               required
//             ></textarea>
//           </div>
//           <button
//             type="submit"
//             className="bg-white text-center w-48 rounded-2xl h-14 relative font-sans text-black text-xl font-semibold group"
//           >
//             <div className="bg-green-400 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[140px] z-10 duration-500">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth="1.5"
//                 stroke="currentColor"
//                 className="size-6"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
//                 />
//               </svg>
//             </div>
//             <p className="translate-x-2">Send</p>
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default ContactMe;
