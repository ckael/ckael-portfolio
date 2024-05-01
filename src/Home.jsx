import { Grid, Typography, Container, Button } from "@mui/material";
import Photo from '/img/Img.png'
const Home = () => {

    return (
        <>
            <Container>
                <Grid container>
                    <Grid item lg={7} marginTop={10}>
                        <Typography color="primary" variant="body1"><strong>HELLO!</strong></Typography><br />
                        <Typography color="secondary" variant="h4"><strong>I Am Riantsoa Ckaël</strong></Typography><br />
                        <Typography color="secondary" className="text" variant="body1">
                            <strong>I am a</strong>
                        </Typography>
                        <span> </span>
                        <Typography className="text" color="primary" variant="body1">
                            <strong>web developper</strong>
                        </Typography> <br />
                        <Typography variant="body2" color="secondary">Lorem ipsum dolor riantsoa ckael sit, amet consectetur adipisicing elit. Eligendi dicta deleniti, necessitatibus nulla sapiente </Typography>  <br />
                        <Button className="Link" variant="outlined" color="primary"> <strong>Download CV</strong></Button>
                    </Grid>
                    <Grid item lg={5} marginTop={3}>
                            <img src={Photo} alt="My Pic" className="img"/>
                    </Grid>
                </Grid>
            </Container>
        </>);
}

export default Home;