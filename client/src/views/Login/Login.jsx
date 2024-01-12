import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../../components/Auth0/LoginButton";

import paisaje1 from "./../../assets/img/paisaje1.jpg";
import bghojas from "./../../assets/img/vector1.jpg";

const Login = () => {
  return (
    <div
      className="bg-gray-100 flex justify-center items-center h-screen"
      style={{
        backgroundImage: `url(${bghojas})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-1/2 h-screen hidden lg:block">
        <img
          src={paisaje1}
          alt="Placeholder Image"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
        <h1 className="text-2xl font-semibold mb-4">¡Welcome again!</h1>
        <LoginButton />

        <div className="mb-6 text-green-600">
          <a href="#" className="hover:underline">
            Forgot Password?
          </a>
        </div>

        <div className="mt-6 text-green-600 text-center">
          <a href="#" className="hover:underline">
            Sign up Here
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
