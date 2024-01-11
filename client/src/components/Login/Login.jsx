import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import paisaje1 from './../../assets/img/paisaje1.jpg'

const Login = () => {
  

  return (
<div class="bg-gray-100 flex justify-center items-center h-screen">

<div class="w-1/2 h-screen hidden lg:block">
  <img src={paisaje1} alt="Placeholder Image" class="object-cover w-full h-full" />
</div>

<div class="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
  <h1 class="text-2xl font-semibold mb-4">¡Welcome again!</h1>
  <LoginButton />
    
    
    <div class="mb-6 text-blue-500">
      <a href="#" class="hover:underline">Forgot Password?</a>
    </div>
   
  <div class="mt-6 text-blue-500 text-center">
    <a href="#" class="hover:underline">Sign up Here</a>
  </div>
</div>
</div>
  );
};

export default Login;