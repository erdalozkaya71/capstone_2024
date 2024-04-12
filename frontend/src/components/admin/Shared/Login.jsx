import { Link, useNavigate } from "react-router-dom";
import Logo from "./myDentLogo.png";
import { useState } from "react";


const AdminLogin = () => {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [authError, setAuthError] = useState(false);
const navigate = useNavigate();

const handleLogin = async (e) => {
  e.preventDefault();
  try{
    const response = await fetch("http://localhost:3000/api/v1/users/login",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    });
    
    if(response.ok){
      const data = await response.json();
      localStorage.setItem('token', data.token);
      navigate("/admin/home");
    }else{
      setAuthError(true);
    }

  }catch(err){
    console.log(err);
  }
}



  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src={Logo}
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in
        </h2>
      </div>

      <div className="mt-4 text-center">
          <Link to="/" className="text-indigo-600 hover:text-indigo-500">
            Back to Client Page
          </Link>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleLogin}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email Address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="">
              <button
                  type="submit"
                  className="flex justify-center items-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            {authError && (
                <div className="text-center text-sm font-medium text-red-600">
                  Incorrect username or password.
                </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
