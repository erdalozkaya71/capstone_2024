import { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = ({onEmailSend}) => {

  const [email, setEmail] = useState("");


  const handleEmail = (e) => {
    e.preventDefault();
    onEmailSend(email);
  }

  return (
    <>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Forgot Password
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" onSubmit={handleEmail}>
          <div>
            <label
              htmlFor="email"
              className="block text-2xl font-medium leading-6 text-gray-900"
            >
              Email
            </label>
            <br />
            <label
              htmlFor="email"
              className="block text-md font-medium leading-6 text-gray-900"
            >
              enter the email address to get a code to reset your password
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Please enter Email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <Link to="/admin/login">
              <button
                type="submit"
                className="flex justify-center items-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                
              >
                Back to login
              </button>
            </Link>
            <div>
              <button
                type="submit"
                className="flex justify-center items-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Send Email
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ForgotPassword;
