import React, { useEffect } from 'react';
import Login from './components/auth/Login';
import { getTokenFromResponse } from './components/spotify/Spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './components/player/Player';

import { useDataLayerValue } from './context/DataLayer';
import ListState from './context/List/ListState';
import SongState from './context/Songs/songState';

const spotify = new SpotifyWebApi();


function App() {
  const [{ token }, dispatch] = useDataLayerValue();



  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    let _token = hash.access_token;


    if (_token) {

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        });
      });

      spotify.getPlaylist("37i9dQZEVXcJZyENOWUFo7").then(response =>
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response,
        })
      )

   

    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);





  return (
    <ListState>
      <SongState>
      <div>
        {!token ? <Login /> :
          <Player />}

      </div>
      </SongState>
    </ListState>

  );
}

export default App;
