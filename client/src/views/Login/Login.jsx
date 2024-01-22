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

      <div className="md:p-52 sm:20 p-8 flex flex-col justify-center w-full lg:w-1/2">
      <img
          src={logo}
          alt="Placeholder Image"
        />
        <h1 className="text-2xl font-semibold mb-4">¡Welcome again!</h1>
        <LoginButton />

      </div>
    </div>
  );
};

export default Login;
