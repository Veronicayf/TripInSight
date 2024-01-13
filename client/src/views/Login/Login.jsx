import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import LoginButton from "../../components/Auth0/LoginButton";
import paisaje1 from "./../../assets/img/paisaje1.jpg";
import logo from "./../../assets/img/logo.png"

const Login = () => {
  return (
    <div
      className="bg-gray-100 bg-vector-leaves flex justify-center items-center h-screen" >
      <div className="w-1/2 h-screen hidden lg:block">
        <img
          src={paisaje1}
          alt="Placeholder Image"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
      <img
          src={logo}
          alt="Placeholder Image"
        />
        <h1 className="text-2xl font-semibold mb-4">¡Welcome again!</h1>
        <LoginButton />

        <div className="mb-6 text-green-600">
          <a href="passwordrecovery" className="hover:underline">
            Forgot Password?
          </a>
        </div>

        <div className="mt-6 text-green-600 text-center">
        <h2 className=" mb-4">New here?</h2>
          <Link to="/register" className="font-bold hover:underline">
           <button className="w-32 text-center py-3 rounded-3xl bg-green-400 text-white font-bold hover:bg-green-600 focus:outline-none my-1"
           >Sign up!</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
