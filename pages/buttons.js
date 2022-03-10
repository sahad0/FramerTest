import React, { useEffect } from "react";

function BtnComponent({genrex,setGenre,movie,setMovie,mvi,setMvi}) {


    useEffect(()=>{
        total();
    },[genrex]);


    function total(){
        
        let arr = movie.filter((p)=>{

           if(p.genre_ids.includes(genrex)){
               
               return p;
           }
                
           
            

        });
        console.log(arr);
        setMvi(arr);
    }

    return (
        <>
            <button className="btn btn-warning mx-3 my-4" onClick={()=>{setGenre(0)}}      >All</button>
          <button className="btn btn-primary mx-3 my-4"   onClick={()=>{setGenre(27)}}    >Horror</button>
          <button className="btn btn-primary mx-3 my-4"   onClick={()=>{setGenre(10749)}}    >Romance</button>
          <button className="btn btn-success mx-3 my-4"   onClick={()=>{setGenre(35)}}    >Comedy</button>
          <button className="btn btn-success mx-3 my-4"   onClick={()=>{setGenre(12)}}    >Adventure</button>
          <button className="btn btn-danger mx-3 my-4"    onClick={()=>{setGenre(28)}}   >Action</button>
          <button className="btn btn-danger mx-3 my-4"    onClick={()=>{setGenre(80)}}   >Crime</button>
        </>

    );
};

export default BtnComponent;