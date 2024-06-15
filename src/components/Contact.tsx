"use client"
import React from 'react';
import { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BackgroundBeams } from "./ui/background-beams";

interface FormData {
  email: string;
  subject: string;
  message: string;
}

const ContactMe: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.subject || !formData.message) {
      toast.error('Please fill in all fields.');
      return;
    }

    try {
      await axios.post('/api/send-email', formData);
      toast.success('Email sent successfully!');
      setFormData({ email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Failed to send email. Please try again later.');
    }
  };

  return (
    <section id='contact' className="bg-transparent">
      <BackgroundBeams />
      <ToastContainer position="top-center" autoClose={3000} />
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-300">
          Contact Me
        </h2>
        <form onSubmit={handleSubmit} className="space-y-8 ">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-600"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow-sm bg-transparent border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="example@gmail.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-600"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              className="block p-3 w-full text-sm text-white bg-transparent rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
              placeholder="Let me know how I can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-600"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="block p-2.5 w-full text-sm text-white bg-transparent rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Leave a comment..."
              required
            ></textarea>
          </div>
          <div className="w-full flex items-center justify-center">
            <button
              type="submit"
              className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold shadow text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 dark:bg-gray-700 dark:text-white dark:hover:text-gray-200 dark:shadow-none group"
            >
              <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
              <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  className="w-5 h-5 text-green-400"
                >
                  <path
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </span>
              <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  className="w-5 h-5 text-green-400"
                >
                  <path
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </span>
              <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white dark:group-hover:text-gray-200">
                Send
              </span>
            </button>
          </div>
          <div className="w-full flex items-center justify-center mt-8 ">
            <a
              href="https://x.com/AkashSa07314397"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md drop-shadow-xl  text-white hover:text-sky-500 transition duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M24 4.557a9.848 9.848 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.868 9.868 0 01-3.127 1.196 4.918 4.918 0 00-8.38 4.482 13.945 13.945 0 01-10.129-5.142 4.818 4.818 0 00-.666 2.475 4.917 4.917 0 002.188 4.1 4.902 4.902 0 01-2.228-.616c-.054 1.993 1.4 3.862 3.438 4.282a4.944 4.944 0 01-2.212.085c.623 1.947 2.432 3.364 4.576 3.404a9.869 9.869 0 01-6.102 2.102c-.397 0-.79-.023-1.175-.069a13.955 13.955 0 007.548 2.209c9.054 0 14.002-7.504 14.002-14.002 0-.213-.005-.425-.015-.636A10.003 10.003 0 0024 4.557z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/akashkumar-sahu-5b7897238"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md drop-shadow-xl  text-white hover:text-sky-700 transition duration-200 mx-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M22.225 0H1.771C.792 0 .001.779.001 1.73v20.537C0 23.221.792 24 1.771 24h20.453C23.2 24 24 23.221 24 22.267V1.73C24 .779 23.2 0 22.225 0zM7.121 20.452H3.665V9.114h3.456v11.338zm-1.72-12.93h-.024c-1.157 0-1.906-.796-1.906-1.792 0-1.022.774-1.793 1.953-1.793 1.179 0 1.907.77 1.93 1.793 0 .996-.75 1.792-1.953 1.792zm15.332 12.93h-3.456v-5.909c0-1.454-.52-2.448-1.823-2.448-.997 0-1.59.682-1.852 1.342-.096.235-.12.563-.12.893v6.122H10.9s.046-9.937 0-10.938h3.455v1.549c.457-.707 1.273-1.717 3.093-1.717 2.259 0 3.957 1.471 3.957 4.634v6.472z" />
              </svg>
            </a>
            <a
              href="https://github.com/akku2005"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md drop-shadow-xl  text-white hover:text-rose-500 transition duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.086-.744.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.304.76-1.604-2.665-.305-5.466-1.333-5.466-5.93 0-1.31.47-2.381 1.236-3.22-.124-.305-.536-1.527.116-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.984-.398 3.006-.403 1.022.005 2.05.137 3.006.403 2.29-1.553 3.295-1.23 3.295-1.23.655 1.649.243 2.871.12 3.176.77.839 1.234 1.91 1.234 3.22 0 4.61-2.807 5.623-5.48 5.92.43.37.823 1.103.823 2.222 0 1.604-.014 2.898-.014 3.293 0 .322.218.694.824.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
