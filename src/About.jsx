import { Container,Typography,Grid } from "@mui/material";
import Image from '/img/Calque1.png'
const About = () => {
    return (<>
        <Container>
          <div className="TitleContainer"><Typography variant="h6" color="primary"textAlign="center" width="auto" className="Title"><strong>About</strong></Typography></div>  
            <Grid container marginTop={4}>
                <Grid item lg={4}>
                        <img src={Image} alt="Pic2" className="img" />
                </Grid>
                <Grid item lg={8} >

                </Grid>
            </Grid>
        </Container>
    </> );
}
 
export default About;