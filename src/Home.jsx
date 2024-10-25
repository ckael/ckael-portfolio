import { Grid, Typography, Container, Button } from "@mui/material";
import Photo from '/img/MyPic.png'
import Cv from '/pdf/MyCV.pdf'
const Home = () => {

    return (
        <div id="Home">
            <Container >
                <Grid  container alignItems="center">
                    <Grid item lg={7} sm={12} md={7} marginTop={5}>
                        <Typography  color="primary" variant="body1"><strong>👋HELLO!👋</strong></Typography><br />
                        <Typography color="secondary" variant="h4"><strong>I Am Riantsoa Ckaël</strong></Typography><br />
                        <Typography color="secondary"  variant="h6">
                            <strong>I am a</strong> <Typography className="text"  color="primary" variant="inherit">
                                <strong>web developper</strong>
                            </Typography>
                        </Typography>
                      
                         <br />
                        <Typography variant="body1" color="secondary">Thank's for visiting my portfolio you can download my CV by clicking  <br />👇Here👇</Typography>  <br />
                        <Button className="Link" href={Cv} variant="outlined" color="primary"> <strong>Download CV</strong></Button>
                    </Grid>
                    <Grid item lg={5} sm={12} md={5} textAlign={'center'} marginTop={3}>
                            <img src={Photo} alt="My Pic" className="img"/>
                    </Grid>
                </Grid>
            </Container>
        </div>);
}

export default Home;