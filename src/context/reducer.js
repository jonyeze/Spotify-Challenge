export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  //QUITAR EL VALOR DEL TOKEN CUANDO TERMINES CON EL DESAROLLO Y PONERLO EN NULL
  /* token: "BQCYsGuvj2DvTFQhPbpotqcDOlUb9W_AkkkJXomTXsq3e_cIY-qg22CxzEQEXhVBsL_Ruqe7uh28v94sVbMBcFC0pnQ0xuGvj0oE25Ld-Tkziq9STSTC03NJXxh8eakkN4EXkJjefMp8gTLhWdVE5cFx", */
  token:null,
  tracks:[],
};

const reducer = (state, action) => {
  
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
      case "SEARCH_ARTIST":
        return {
          ...state,
          artist: action.artist,
        };
    default:
      return state;
  }
};

export default reducer;
