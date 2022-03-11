import {motion} from "framer-motion";

function Mov({p}) {
    return (
        <motion.div layout>
            
            <p style={{marginTop:"30px"}}>{p.title}</p>
            <img className="img-fluid" src={"https://image.tmdb.org/t/p/w500"+p.backdrop_path} alt="" style={{objectFit:"cover",width:"85%",height:"100%",borderRadius:"8px",}}></img>
        </motion.div>
    )
};

export default Mov;