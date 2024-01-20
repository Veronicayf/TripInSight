// import { useAuth0 } from "@auth0/auth0-react";

//  export const handleUser = async () => {
//    const { user, isAuthenticated, isLoading} = useAuth0(); 


  
//   }

//   // token con info del user(auth0)
//   const token = jwt.sign({
//     forename: user.given_name,
//     surname: user.family_name,
//     email: user.email,
//   }, import.meta.env.VITE_JWT_SECRET , { expiresIn: '1h' }); // ver tiempo con los chicos

//   console.log('Tokeeen:', token);

//   try {
//     const response = await axios.get("http://localhost:4000/", {
//       headers: {
//         authorization: `Bearer ${token}`
//       }
//     });

//     console.log(response.data);
    
//   } catch (error) {
//     console.log(error.message);
//   }
// };