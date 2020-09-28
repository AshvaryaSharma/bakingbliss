import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import {auth, firebase, provider} from "../firebase";
import {useStateValue} from "../Store/StateProvider";
import SignIn from"../Icons/btn_google_signin_light_normal_web@2x.png";


function Login() {
    //const[user,setUser] = useState(null);
    const history = useHistory();
    const [{basket,user}, dispatch] = useStateValue();
    const [progressing, setProgressing] = useState(false);
    useEffect(() => {
        auth.getRedirectResult().then(function(result) {
            if (result.credential) {
                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = result.credential.accessToken;
                // ...
            }
            // The signed-in user info.
             dispatch({
                 type: "SET_USER",
                 user: result.user
             })
           
            console.log("Authenticated user" + JSON.stringify(user));
            if(result.user.uid !== null) {
                setProgressing(false)
                history.replace("/");
            }
            }).catch(function(error) {
                console.log("Got error while gettting user");
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
            });

           
    }, [])

    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        setProgressing(true);
        console.log("Starting authentication")
        await auth.signInWithRedirect(provider)
        .then(()=> {
            console.log("Getting credentials");
        })
        console.log("Getting credentials");
        
    }
    return (
        <div className="login">
            <h2 className="section-heading">
                Sign in with Google
            </h2>
            <div className="login__google">
                {!progressing ? 
                <button onClick={(e)=> handleGoogleSignIn(e)}>
                    {/* <i className="fab fa-google"></i> Sign in with Google */}
                    <img src={require("../Icons/btn_google_signin_light_normal_web@2x.png")} alt="signin" />
                </button> :
                <p>Progressing</p>
                }
                
            </div>
        </div>
    )
}

export default Login;
