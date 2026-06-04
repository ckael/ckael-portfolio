import { Container, Typography, Grid, IconButton, ButtonGroup } from "@mui/material";
import Image from '/img/avatar.png'
import { GitHub, LinkedIn, FacebookRounded } from "@mui/icons-material";
import { motion } from "framer-motion";
import { cardReveal, hoverLift, sectionReveal, staggerContainer } from "./motion";
const About = () => {
    return (<motion.div id="A propos" variants={sectionReveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
        <Container >
            <div className="TitleContainer"><Typography variant="h6" color="primary" textAlign="center" width="auto" className="Title">A propos</Typography></div>
            <Grid component={motion.div} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} container marginTop={4} alignItems="center" >
                <Grid component={motion.div} variants={cardReveal} item lg={4} md={4} sm={12} xs={12} alignContent="center" alignItems="center" >
                    <Grid item textAlign="center" sm={12}><motion.img whileHover={{ scale: 1.04, rotate: 1 }} transition={{ duration: 0.25 }} src={Image} alt="Pic2" className="avatar" /> </Grid>
                </Grid>
                <Grid component={motion.div} variants={cardReveal} whileHover={hoverLift} className="About" item lg={8} padding={3} letterSpacing={3} xs={12} md={8} sm={12}  >
                    <Typography  variant="subtitle2" color="secondary">Nom: <Typography className="text" color="primary" variant="body2">RANAIVOMANANA Riantsoa Ckaël</Typography></Typography><br />
                    <Typography  variant="subtitle2" color="secondary">Age: <Typography className="text" color="primary" variant="body2">23</Typography></Typography><br />
                    <Typography  variant="subtitle2" color="secondary">Téléphone: <Typography className="text" color="primary" variant="body2">+261 34 06 176 33</Typography></Typography><br />
                    <Typography  variant="subtitle2" color="secondary">Addresse: <Typography className="text" color="primary" variant="body2">Lot AZ 88T Anosizato West ,Antananarivo,Madagascar</Typography></Typography><br />
                    <Typography variant="subtitle2" color="secondary">E-Mail: <Typography className="text" color="primary" variant="body2">Ranckael6@gmail.com</Typography></Typography><br />
                    <Grid container alignItems="center">
                        <Grid item lg={9} md={9} sm={12} xs={12}>                            
                            <Typography  variant="subtitle2" color="secondary">Langages: <Typography className="text" color="primary" variant="body2">Malagasy,Français,Anglais</Typography></Typography>
                        </Grid>
                        <Grid item lg={3} md={3} sm={12} xs={12}>
                            <ButtonGroup >
                                <IconButton component={motion.a} whileHover={{ y: -3, scale: 1.12 }} whileTap={{ scale: 0.9 }} color="primary" href="https://github.com/ckael" target="_blank" rel="noopener noreferrer"><GitHub /></IconButton>
                                <IconButton component={motion.a} whileHover={{ y: -3, scale: 1.12 }} whileTap={{ scale: 0.9 }} color="primary" href="https://www.facebook.com/mockael.ranaivomanana?eav=AfYTuiInrHkqs9mylCNkwCOoC3kKmxhI5QMA5j79XX0lj0rOQG-zoGVDeE3P-GKkngg&paipv=0&_rdc=1&_rdr" target="_blank" rel="noopener noreferrer"><FacebookRounded /></IconButton>
                                <IconButton component={motion.a} whileHover={{ y: -3, scale: 1.12 }} whileTap={{ scale: 0.9 }} color="primary" href="https://www.linkedin.com/in/riantsoa-ckael-ranaivomanana-7706892a8/" target="_blank" rel="noopener noreferrer"><LinkedIn /></IconButton>
                            </ButtonGroup>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    </motion.div>);
}

export default About;
