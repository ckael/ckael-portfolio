import { Grid, Typography, Container, Button, Box } from "@mui/material";
import Photo from '/img/me.png'
import Cv from '/pdf/MyCV.pdf'
const Home = () => {

    return (
        <div id="Accueil">
            <Container >
                <Grid  container alignItems="center">
                    <Grid item lg={7} sm={12} md={7} marginTop={5}>
                        <Typography  color="primary" variant="body1"><strong>👋Bonjour!👋</strong></Typography><br />
                        <Typography color="secondary" variant="h4"><strong>Je suis Riantsoa Ckaël</strong></Typography><br />
                        <Typography color="secondary"  variant="h6">
                           <Typography   color="secondary" variant="body1">
                            Un développeur Full Stack spécialisé en applications Web, Mobile et Desktop, avec une expertise en intégration de nouvelles technologies telles que la reconnaissance faciale et les solutions intelligentes.
                            </Typography>
                        </Typography>
                      
                         <br />
                        <Typography variant="body1" color="secondary">Merci de visiter mon portfolio. Vous pouvez télécharger mon CV en cliquant<br />👇Ici👇</Typography>  <br />
                        <Button className="Link" href={Cv} variant="outlined" color="primary"> <strong>Télécharger</strong></Button>
                    </Grid>
                    <Grid item lg={5} sm={12} md={5} textAlign={'center'} marginTop={3}>
                        <Box
                            sx={{
                                width: 220,
                                height: 220,
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                bgcolor: 'background.paper',
                                border: 2,
                                borderColor: 'primary.main',
                                borderRadius: '50%',
                                boxShadow: '0 18px 40px rgba(0, 0, 0, 0.3)',
                                overflow: 'hidden',
                            }}
                        >
                            <img src={Photo} alt="My Pic" className="img"/>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>);
}

export default Home;
