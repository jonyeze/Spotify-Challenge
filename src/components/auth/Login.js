import React from 'react';
import './Login.css';
import { accessUrl } from '../../components/spotify/Spotify';

const Login = () => {
    return ( 
        <div className="login">
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/559px-Spotify_logo_with_text.svg.png"
            alt=""
        />
        <a href={accessUrl}>LOGIN TO SPOTIFY</a>
    </div>
     );
}
 
export default Login;
