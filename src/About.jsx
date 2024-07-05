import { Container, Typography, Grid, IconButton, ButtonGroup } from "@mui/material";
import Image from '/img/avatar.png'
import { GitHub, LinkedIn, FacebookRounded } from "@mui/icons-material";
const About = () => {
    return (< div id="About">
        <Container >
            <div className="TitleContainer"><Typography variant="h6" color="primary" textAlign="center" width="auto" className="Title"><strong>About</strong></Typography></div>
            <Grid container marginTop={4} alignItems="center" >
                <Grid item lg={4} md={4} sm={12} xs={12} alignContent="center" alignItems="center" >
                    <Grid item textAlign="center" sm={12}><img   src={Image} alt="Pic2" className="avatar" /> </Grid>
                </Grid>
                <Grid className="About" item lg={8} padding={3} letterSpacing={3} xs={12} md={8} sm={12}  >
                    <Typography  variant="subtitle2" color="secondary">Name: <Typography className="text" color="primary" variant="body2">RANAIVOMANANA Riantsoa Ckaël</Typography></Typography><br />
                    <Typography  variant="subtitle2" color="secondary">Age: <Typography className="text" color="primary" variant="body2">22</Typography></Typography><br />
                    <Typography  variant="subtitle2" color="secondary">Phone: <Typography className="text" color="primary" variant="body2">+261 32 99 072 18</Typography></Typography><br />
                    <Typography  variant="subtitle2" color="secondary">Address: <Typography className="text" color="primary" variant="body2">Lot AZ 88T Anosizato West ,Antananarivo,Madagascar</Typography></Typography><br />
                    <Typography variant="subtitle2" color="secondary">E-Mail: <Typography className="text" color="primary" variant="body2">Ranckael6@gmail.com</Typography></Typography><br />
                    <Grid container alignItems="center">
                        <Grid item lg={9} md={9} sm={12} xs={12}>                            
                            <Typography  variant="subtitle2" color="secondary">Language: <Typography className="text" color="primary" variant="body2">Malagasy,French,English</Typography></Typography>
                        </Grid>
                        <Grid item lg={3} md={3} sm={12} xs={12}>
                            <ButtonGroup >
                                <IconButton color="primary" href="https://github.com/ckael"><GitHub /></IconButton>
                                <IconButton color="primary" href="https://www.facebook.com/mockael.ranaivomanana?eav=AfYTuiInrHkqs9mylCNkwCOoC3kKmxhI5QMA5j79XX0lj0rOQG-zoGVDeE3P-GKkngg&paipv=0&_rdc=1&_rdr"><FacebookRounded /></IconButton>
                                <IconButton color="primary" href="https://www.linkedin.com/in/riantsoa-ckael-ranaivomanana-7706892a8/"><LinkedIn /></IconButton>
                            </ButtonGroup>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    </div>);
}

export default About;