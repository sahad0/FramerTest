import React, { useEffect } from "react";

function BtnComponent({genrex,setGenre,movie,setMovie,mvi,setMvi}) {


    useEffect(()=>{
        total();
    },[genrex]);


    function total(){
        if(genrex==0 && movie){

            setMvi(movie);
            return;
        }
        
        let arr = movie.filter((p)=>{

           if(p.genre_ids.includes(genrex)){
               
               return p;
           }
                
           
            

        });
        
        setMvi(arr);
    }

    return (
        <>
            
            <div className="bn40div my-5">
                <a class="bn40 mx-1" onClick={()=>{setGenre(0)}} >All</a>
                <a class="bn40 mx-1" onClick={()=>{setGenre(35)}} >Comedy</a>
                <a class="bn40 mx-1" onClick={()=>{setGenre(12)}} >Adventure</a>
                <a class="bn40 mx-1" onClick={()=>{setGenre(28)}} >Action</a>
                <a class="bn40 mx-1" onClick={()=>{setGenre(80)}} >Crime</a>
            </div>

            
          
         
        </>

    );
};

export default BtnComponent;