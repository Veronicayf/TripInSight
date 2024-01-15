import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    
      <button
      className="gap-3 p-1.5 h-16 w-20 text-center py-3 rounded-full bg-red-400 text-white font-bold hover:bg-red-600 focus:outline-none"
      onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}> Sign Out </button>
    
  );
};

export default LogoutButton;