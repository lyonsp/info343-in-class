import React from "react";

const APIKEY = "989339dadc1b007d8e7c936c22e328d7";
const IMG_BASE_URL = "http://image.tmdb.org/t/p/"
const IMG_SIZE = IMG_BASE_URL + "w92";

//const DISCOVER_API = BASE_URL + "/discover/movie?api_key=" + APIKEY;
//const GENRES_API = BASE_URL + "/genre/movie/list?api_key=" + APIKEY;

export default class extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var IMG_API = IMG_SIZE + this.props.movie.poster_path;
        return (
            <div>
                <img src={IMG_API} alt="movie poster"/>
                <h2>{this.props.movie.title}</h2>
                <h2>{this.props.movie.overview}</h2>
            </div>
        );
    }
}