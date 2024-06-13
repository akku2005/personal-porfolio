import React from "react";
import { BackgroundBeams } from "../components/ui/background-beams";

const Contact: React.FC = () => {
  return (
    <section className="hero text-white relative">
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
