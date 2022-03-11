import React, { useEffect } from "react";
import{motion} from "framer-motion";

const frameEff = {

    anim : {
        opacity: 0,
        // scale:0,

    },
    starter : {
        opacity :1,
        // scale:1,
    },
    ender :{
        opacity:0,
        // scale:0,
    },
    hover:{
        scale:1.1,
    }
  
  }
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
                <motion.a variants={frameEff} initial="starter" exit="ender" whileHover="hover" className="bn40 mx-1" onClick={()=>{setGenre(0)}} >All</motion.a>
                <motion.a variants={frameEff} initial="starter" exit="ender" whileHover="hover" className="bn40 mx-1" onClick={()=>{setGenre(35)}} >Comedy</motion.a>
                <motion.a variants={frameEff} initial="starter" exit="ender" whileHover="hover" className="bn40 mx-1" onClick={()=>{setGenre(12)}} >Adventure</motion.a>
                <motion.a variants={frameEff} initial="starter" exit="ender" whileHover="hover" className="bn40 mx-1" onClick={()=>{setGenre(28)}} >Action</motion.a>
                <motion.a variants={frameEff} initial="starter" exit="ender" whileHover="hover" className="bn40 mx-1" onClick={()=>{setGenre(80)}} >Crime</motion.a>
            </div>

            
          
         
        </>

    );
};

export default BtnComponent;