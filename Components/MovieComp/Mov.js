import {motion} from "framer-motion";

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


function Mov({p}) {
    return (
        <motion.div layout variants={frameEff} initial="starter" exit="ender" whileHover="hover">
            
            <p style={{marginTop:"30px"}}>{p.title}</p>
            <img className="img-fluid" src={"https://image.tmdb.org/t/p/w500"+p.backdrop_path} alt="" style={{objectFit:"cover",width:"85%",height:"100%",borderRadius:"8px",}}></img>
        </motion.div>
    )
};

export default Mov;