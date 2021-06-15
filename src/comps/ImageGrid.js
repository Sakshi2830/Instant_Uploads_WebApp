import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';
import DeleteBtn from './deleteBtn'

const ImageGrid = ({setSelectedImg}) =>{
    const { docs } = useFirestore('images');
    console.log(docs)

return(
    <div className="img-grid">
    { docs && docs.map(doc => (
         <div className="imgCont">
        <motion.div className="img-wrap"
        key={doc.id}
        layout
        whileHover={{ opacity: 1}}
        onClick={() => setSelectedImg(doc.url)}
        >
            <img src={doc.url}
             alt="pics uploaded" 
             initial={{opacity: 0}}
             animate={{opaity: 1}}
             transition={{delay: 1}}
             />
        </motion.div>
        <DeleteBtn id={doc.id} />
      </div>
    ))}
</div>
)

}

export default ImageGrid;