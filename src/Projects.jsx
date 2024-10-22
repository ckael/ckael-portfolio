import { IconButton,Container,Typography,Grid ,Card,CardActions,CardMedia,CardContent} from "@mui/material";
import { useState,useEffect } from "react";
import { GitHub} from "@mui/icons-material";
import db from '../firebase';
import { onSnapshot,collection } from "firebase/firestore";

const Projects = () => {
    const [Projet,setProjet] = useState([]);
    useEffect(()=>{
        onSnapshot(collection(db, "Project"),(snapshot)=>
            {
                    setProjet(snapshot.docs.map((projets)=>projets.data()))
            })
    },[])


    return ( 
        <div id="Projects">
            <Container>
            <div className="TitleContainer">
                <Typography variant = "h6" color="primary" className="Title">
                    Projects  
                </Typography>
            </div><br />
                <Grid container columnSpacing={2} rowGap={2} >
                        {
                            Projet.map((Projet)=>(
                                <Grid item key={Projet.id} sm = {12} lg = {4}>
                                    <Card className="myCard"  >
                                        <CardMedia image={Projet.Img} component="img" width={200} height={200}/>
                                        <CardContent>
                                            <Typography variant="h6" color="primary">{Projet.Titre}</Typography><br />
                                            <Typography variant = "body2" color="secondary">{Projet.Description}</Typography><br />
                                            <Typography variant = "body2" color="secondary">{Projet.Tech}</Typography>
                                        </CardContent>
                                        <CardActions>
                                            <IconButton size="large" color="secondary" href={Projet.Lien}>
                                                <GitHub/>
                                            </IconButton>
                                            
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))
                        }
                </Grid>
            </Container>
        </div>
     );
}
 
export default Projects;