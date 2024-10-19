import { IconButton,Container,Typography,Grid ,Card,CardActions,CardMedia,CardContent} from "@mui/material";
import { useState } from "react";
import { GitHub} from "@mui/icons-material";
import img from '/img/ProjectImg.png';


const Projects = () => {
    const [Projet,setProjet] = useState(['1','2','3','4','5','6']);
    
    return ( 
        <div id="Projects">
            <Container>
            <div className="TitleContainer">
                <Typography variant = "h6" color="primary" className="Title">
                      <strong>Projects</strong>  
                </Typography>
            </div>
                <Grid container columnSpacing={2} rowGap={2} >
                        {
                            Projet.map((projet)=>(
                                <Grid item key={projet} sm = {12} lg = {4}>
                                    <Card className="myCard"  >
                                        <CardMedia image={img} component="img" height="200"/>
                                        <CardContent>
                                            <Typography variant="h6" color="primary"><strong>Project title</strong></Typography>
                                            <Typography variant = "body2" color="secondary">psam, cumque repellat recusandae dicta? Modi ducimus aperiam, sed porro repellendus laborum.</Typography>
                                        </CardContent>
                                        <CardActions>
                                            <IconButton size="large" color="secondary">
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