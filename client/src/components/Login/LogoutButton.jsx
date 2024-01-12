import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    
      <button
      className="w-full text-center py-3 rounded-3xl bg-red-400 text-white font-bold hover:bg-red-600 focus:outline-none my-1"
      onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}> Sign Out </button>
    
  );
};

export default LogoutButton;