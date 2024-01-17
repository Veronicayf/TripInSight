import { useAuth0 } from "@auth0/auth0-react";

export const handleUser = async () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

    if(isAuthenticated) {
        const userAuth0 = {
        forename: user.given_name,
        surname: user.given_name,
        completeName: user.name,
        username: user.nickname,
        email: user.email,
        image: user.picture,
        locale: user.locale, // me muestra "es"
        identificador: user.sub //identificador único del usuario registrado en Auth0.
        };

        try {
            
        }
    }

}