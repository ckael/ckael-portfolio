import { IconButton,Container,Typography,Grid ,Card,CardActions,CardMedia,CardContent} from "@mui/material";
import { useState,useEffect } from "react";
import { Visibility} from "@mui/icons-material";
import db from '../firebase';
import { onSnapshot,collection } from "firebase/firestore";
import { motion } from "framer-motion";
import { cardReveal, hoverLift, sectionReveal, staggerContainer } from "./motion";

const Projects = () => {
    const [Projet,setProjet] = useState([]);
    useEffect(()=>{
        onSnapshot(collection(db, "Project"),(snapshot)=>
            {
                    setProjet(snapshot.docs.map((projets)=>projets.data()))
            })
    },[])


    return ( 
        <motion.div id="Projets" variants={sectionReveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }}>
            <Container>
            <div className="TitleContainer">
                <Typography variant = "h6" color="primary" className="Title">
                  Projets  
                </Typography>
            </div><br />
                <Grid component={motion.div} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} container columnSpacing={2} rowGap={2} >
                        {
                            Projet.map((Projet)=>(
                                <Grid component={motion.div} variants={cardReveal} item key={Projet.id} sm = {12} md={4} lg = {4}>
                                    <Card component={motion.div} whileHover={hoverLift} className="myCard"  >
                                        <CardMedia image={Projet.Img} component="img" width={200} height={200}/>
                                        <CardContent>
                                            <Typography variant="h6" color="primary">{Projet.Titre}</Typography><br />
                                            <Typography variant = "body2" color="secondary">{Projet.Description}</Typography><br />
                                            <Typography variant = "body2" color="secondary">({Projet.Tech})</Typography>
                                        </CardContent>
                                        <CardActions>
                                            <IconButton component={motion.a} whileHover={{ scale: 1.12, rotate: -4 }} whileTap={{ scale: 0.9 }} size="large" color="secondary" href={Projet.Lien} target="_blank" rel="noopener noreferrer">
                                                <Visibility/>
                                            </IconButton>
                                            
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))
                        }
                </Grid>
            </Container>
        </motion.div>
     );
}
 
export default Projects;
