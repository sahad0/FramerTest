import{useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap//


import React from "react";
import BtnComponent from "./buttons";

function Home() {

    const[movie,setMovie] = useState([]);
    const[mvi,setMvi] = useState([]);
    const[genrex,setGenre] = useState(0);

    useEffect(()=>{
      fetchMovie();
    },[]);

    async function fetchMovie(){
      

      try {
        const data = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=9fd694266526cc40fc293654cc7e18a6&language=en-US&page=1");
        const movies = await data.json();

        setMovie(movies.results);
      } catch (err) {
        console.log(err);
      }
    }

    return (
      <>
        <div className="container-fluid">
            <BtnComponent genrex={genrex} setGenre={setGenre} movie={movie} setMovie={setMovie} mvi={mvi} setMvi={setMvi}/>
          
          <div className="row mx-5">
          {genrex !=0 ?
            mvi.map((p,i)=>{
              return(
              
                <div key={i++} className="col-md-3" >
                <div className="card my-3">
              <div className="card-body">
                  <p>{p.original_title}</p>
                  <img className="imgg img-fluid" src={"https://image.tmdb.org/t/p/w400"+p.backdrop_path} alt=""></img>
                </div>
                </div>
                </div>
              )
            })
            :

            movie.map((p,i)=>{
              return(
              
                <div key={i++} className="col-md-3" >
                <div className="card my-3">
              <div className="card-body">
                  <p>{p.original_title}</p>
                  <img className="imgg img-fluid" src={"https://image.tmdb.org/t/p/w400"+p.backdrop_path} alt=""></img>
                </div>
                </div>
                </div>
              )
            })


          }
          </div>
        </div>
      </>
    )
   
};

export default Home;