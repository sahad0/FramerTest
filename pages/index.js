import{useEffect, useState} from "react";




import { motion,AnimatePresence } from "framer-motion";
import React from "react";
import BtnComponent from "./buttons";
import Mov from "../Components/MovieComp/Mov";






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
        setMvi(movies.results);
      } catch (err) {
        console.log(err);
      }
    }

    return (
       <div className="Ap">
         <div className="bn40div my-5">
                <a className="bn40 mx-1" onClick={()=>{window.location.reload()}} style={{fontSize:"24px",marginLeft:"30vw",}}  >Movie List</a>
          </div>
       <BtnComponent genrex={genrex} setGenre={setGenre} movie={movie} setMovie={setMovie} mvi={mvi} setMvi={setMvi}/>
        <motion.div layout className="movbody" id="hr" style={{display:"grid",gridTemplateColumns:"auto auto auto auto",gridRowGap:"50px",gridColumnGap:"15px",}}>
            <AnimatePresence>
          {
            mvi && mvi.map((p)=>{
              return <Mov key={p.id} p={p}/>
              

            })}
          </AnimatePresence>
          </motion.div>
        
       </div>
    )
   
};

export default Home;