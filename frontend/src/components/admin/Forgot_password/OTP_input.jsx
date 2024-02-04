import { useState } from "react";
import { Link } from "react-router-dom";

const OtpInput = ({onOTPVerify,emailSentTo}) => {
  const [OTP, setOTP] = useState("");

  const handleOTP = (e) => {
    e.preventDefault();
    onOTPVerify(OTP);
  };

  return (
    <>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Forgot Password
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        {emailSentTo && (
          <div className="mb-4 text-center">
            <p className="text-gray-700">OTP sent to: {emailSentTo}</p>
          </div>
        )}

        <form className="space-y-6" action="#" onSubmit={handleOTP}>
          <div>
            <label
              htmlFor="otp"
              className="block text-2xl font-medium leading-6 text-gray-900"
            >
              Verification
            </label>
            <br />
            <label
              htmlFor="otp"
              className="block text-md font-medium leading-6 text-gray-900"
            >
              Enter the Verification Code sent to your email
            </label>
            <div className="mt-2">
              <input
                id="otp"
                name="otp"
                type="text"
                autoComplete="off"
                placeholder="Enter OTP"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => setOTP(e.target.value)}
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
                Verify OTP
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default OtpInput;
