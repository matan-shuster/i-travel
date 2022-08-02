import {useEffect, useState} from "react";
import jwtDecode from "jwt-decode";
import apiService from "../../services/apiService";
import {useNavigate} from "react-router-dom";

function LoginComponent({setUserID}) {
    const [user, setUser] = useState({});
    let navigate = useNavigate();
    function handleCallbackResponse(response) {
        const decodedToken = jwtDecode(response.credential);
        setUser(decodedToken);
        console.log(decodedToken);
        checkIfUserExists(decodedToken);
    }
    async function checkIfUserExists(user) {
        const allUsers = await apiService.getAllUsers();
        const userExists = allUsers.filter(dbUser => dbUser.sub === user.sub);
        if(userExists.length !== 0) {
            setUserID(userExists.id);
        }
        else {
            createUser(user);

        }
        navigate("/trips/list");
    }
    function createUser(user) {
        const newUser= apiService.createUser(user);
        setUserID(newUser.id);
    }
    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: "570192573492-run0on81mimoi73ecd64483knliduo3o.apps.googleusercontent.com",
            callback: handleCallbackResponse
        })

        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            { theme: "outline", size: "large"}
        )
    },[]);

    return (
        <div>
            <div id="signInDiv"/>
        </div>

    );
}
export default LoginComponent;