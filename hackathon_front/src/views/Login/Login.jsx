import { Link } from "react-router-dom";
import AlgeriePostSvg from "./../../assets/AlgeriePoste.png";
import { IoArrowBack } from "react-icons/io5";
import axiosClient from "./../../axios-client";
import { useRef } from "react";
import { useStateContext } from "../../context/contextProvider";

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { handleToken } = useStateContext();

  const sendLoginRequest = async (e) => {
    e.preventDefault();
    try {
      const credentials = {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      };
      const response = await axiosClient.post("/login", credentials);
      if (response.status == 200) {
        handleToken(response.data.access_token);
      }
    } catch (error) {
      console.error("Erreur de connexion:", error.response || error.message); // Gère l'erreur
    }
  };

  return (
    <div className="md:w-screen md:h-screen">
      <Link
        to="/Home"
        className="mt-10 ml-10 text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full  p-3.5 text-center inline-flex items-center me-2 "
      >
        <IoArrowBack className="w-full h-full " />
      </Link>
      <div className="flex flex-col items-center justify-center mx-auto bg-[#ffffff] w-[60%] py-[2%] rounded-2xl">
        <img className="w-[10%]  mr-2" src={AlgeriePostSvg} alt="logo" />
        <div className="m-[4%]  w-[50%]">
          <h1 className="text-xl font-bold text-center leading-tight tracking-tight  md:text-2xl ">
            Sign in to account
          </h1>
          <form className="space-y-4 md:space-y-6  " method="POST" onSubmit={sendLoginRequest} >
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium  "
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                ref={emailRef}
                className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 focus:outline-none focus:ring-1"
                placeholder="exp: xxxxxx@gmail.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium "
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                ref={passwordRef}
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 focus:outline-none focus:ring-1 "
                required
              />
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              LOG IN
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              <a
                href="/api/auth/forget-password"
                className="font-medium text-yellow-500 hover:underline dark:text-primary-500"
              >
                Forget Password ?
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
