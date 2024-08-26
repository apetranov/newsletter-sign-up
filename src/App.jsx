import { useState } from "react";
import "./fonts.css";

function App() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);

  const validateEmail = (email) => {
    // Simple email validation regex
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    // Validate the email and set error message
    if (validateEmail(value)) {
      setError("");
    } else {
      setError("Valid email required");
    }
  };

  const isButtonDisabled = !validateEmail(email);

  return (
    <div className="bg-gray-700 w-screen h-screen flex justify-center items-center">
      {showForm && (
        <div className="bg-white space-y-5 md:space-y-0 md:p-10 rounded-lg flex md:flex-row flex-col justify-center items-center">
          <img
            className="md:hidden block w-full"
            src="/images/illustration-sign-up-mobile.svg"
            alt=""
          />
          <div className="flex p-10 md:p-0 flex-col md:mr-10 justify-center w-full md:w-2/4 space-y-10">
            <h1 className="text-5xl md:text-6xl font-bold">Stay updated!</h1>
            <p className="text-lg md:text-xl">
              Join 60,000+ product managers receiving monthly updates on:
            </p>
            <div className="space-y-5">
              <div className="flex flex-row space-x-5 items-center">
                <img className="" src="/images/icon-list.svg" alt="" />
                <p className="text-lg md:text-xl">
                  Product discovery and building what matters
                </p>
              </div>
              <div className="flex flex-row space-x-5 items-center">
                <img className="" src="/images/icon-list.svg" alt="" />
                <p className="text-lg md:text-xl">
                  Measuring to ensure updates are a success
                </p>
              </div>
              <div className="flex flex-row space-x-5 items-center">
                <img className="" src="/images/icon-list.svg" alt="" />
                <p className="text-lg md:text-xl">And much more!</p>
              </div>
            </div>
            <div className="space-y-10">
              <div className="space-y-3">
                <div className="flex flex-row justify-between">
                  <h1>Email address</h1>
                  {error && <p className="text-red-500 font-bold">{error}</p>}
                </div>

                <input
                  type="text"
                  value={email}
                  onChange={handleEmailChange}
                  className={`w-full rounded-lg p-5 outline ${
                    error
                      ? "outline-red-500 border-red-500"
                      : "outline-gray-300"
                  }`}
                  placeholder="email@company.com"
                />
              </div>

              <button
                className={`w-full bg-gray-700 ${
                  isButtonDisabled
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-white hover:text-gray-700 outline outline-4 outline-gray-700"
                } transition-all duration-300 text-white font-bold p-5 rounded-xl`}
                disabled={isButtonDisabled}
                onClick={() => {
                  setShowForm(false);
                  setShowSuccess(true);
                }}
              >
                Subscribe to monthly newsletter
              </button>
            </div>
          </div>

          <img
            className="hidden md:block"
            src="/images/illustration-sign-up-desktop.svg"
            alt=""
          />
        </div>
      )}
      {showSuccess && (
        <div className="bg-white space-y-5 p-10 rounded-lg flex flex-col justify-center items-center">
          <div className="flex flex-col space-y-10 justify-center items-center">
            <img src="/images/icon-success.svg" className="w-1/4" alt="" />
            <div className="md:w-2/4  space-y-10 flex flex-col justify-center items-center">
              <h1 className="text-4xl md:text-6xl">Thanks for subscribing!</h1>
              <p>
                A confirmation email has been sent to <strong>{email}</strong>.{" "}
                Please open it and click the button inside to confirm your
                subscription.
              </p>
            </div>
            <button
              onClick={() => window.location.reload()}
              className="w-full md:w-2/4 bg-gray-700 transition-all duration-300 text-white font-bold p-5 rounded-xl hover:bg-white hover:text-gray-700 outline outline-4 outline-gray-700"
            >
              Dismiss message
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
