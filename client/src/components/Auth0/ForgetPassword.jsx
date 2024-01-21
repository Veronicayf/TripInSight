import { Link } from "react-router-dom";

const ForgetPassword = () => {
  const resetpassword =
    "https://dev-cfckqel4dke5aogl.us.auth0.com/u/reset-password/request/Username-Password-Authentication?state=hKFo2SBEYjUwQ2dRYVNSX21lR1NaNnkxYUo3Z0I3ODdNMGQ3MaFurnJlc2V0LXBhc3N3b3Jko3RpZNkgbjl3SHZmeTJrbElfRnFjTnBJc1pBMVk2OVQzM0YwanKjY2lk2SBpNWxGQXNPWXh0aW5xWUZDcUhXRFVmYXBHTlo3NmVkTA";

  return (
    <Link to={resetpassword} target="_blank" rel="noopener noreferrer">
      <a className="hover:underline">Forgot Password?</a>
    </Link>
  );
};

export default ForgetPassword;
