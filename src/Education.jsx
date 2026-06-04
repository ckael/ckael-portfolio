import { Container,Grid,Typography,Card,CardContent } from "@mui/material";
import db from '../firebase';
import { onSnapshot,collection} from "firebase/firestore";
import { useState,useEffect } from "react";
import { motion } from "framer-motion";
import { cardReveal, hoverLift, sectionReveal, staggerContainer } from "./motion";
const Education = () => {
    const [Educations,setEducations] = useState([]);
    const [Experiences,setExperiences] = useState([]);
    useEffect(()=>{
        onSnapshot(collection(db , "Education"),(snapshot)=>
            {
                    setEducations(snapshot.docs.map((edu)=>edu.data()))
            })
    },[])
    useEffect(()=>{
        onSnapshot(collection(db, "Experience"),(snapshot)=>
            {
                setExperiences(snapshot.docs.map((Exp)=>Exp.data()))
            })
    })

    return ( <motion.div id="Educations" variants={sectionReveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }}>
        <Container>
                <Grid component={motion.div} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} container columnSpacing={4} rowSpacing={4} marginTop={2} >
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Typography color="primary" variant="body1" className="Title"><strong>Educations</strong></Typography>
                        { Educations.sort((a,b)=>b.DateF - a.DateF).map((edu)=>(

                        <Card component={motion.div} variants={cardReveal} whileHover={hoverLift} className="myCard" key={edu.id} >
                            <CardContent>
                                <Typography variant="body1" color="primary"><strong>{edu.DateD}-{edu.DateF}</strong></Typography>
                                <Typography variant="body1" color="secondary"><strong>{edu.Institut}</strong></Typography><br />
                                <Typography variant="body2" color="secondary">{edu.Diplome}</Typography>
                            </CardContent>
                        </Card>
                 
                        ))
                        }   
                        </Grid>
                   
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Typography color="primary" variant="body1" className="Title"><strong>Experiences</strong></Typography>
                        { Experiences.sort((a,b)=>b.Annee - a.Annee).map((Exp)=>(
                        <Card component={motion.div} variants={cardReveal} whileHover={hoverLift} className="myCard" key={Exp.id} >
                            <CardContent>
                                <Typography variant="body1" color="primary"><strong>{Exp.Annee}</strong></Typography>
                                <Typography variant="body1" color="secondary"><strong>{Exp.Entreprise}</strong></Typography><br />
                                <Typography variant="body2" color="secondary">{Exp.Duree}</Typography>
                            </CardContent>
                        </Card>
                       ))  }
                    </Grid>
                </Grid>
            
               
        </Container>
    </motion.div> );
}
 
export default Education;
