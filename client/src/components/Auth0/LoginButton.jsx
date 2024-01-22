import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
     
      <button
        
        className="w-full text-center py-3 rounded-3xl bg-primary text-white font-bold hover:bg-btn-hover focus:outline-none my-1"
        onClick={() => loginWithRedirect()}
      >
       Log In
      </button>
    
  );
};

export default LoginButton;
