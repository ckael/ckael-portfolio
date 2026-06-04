import { Grid, Typography ,Card,CardContent} from "@mui/material";
import { Code, Stars, DataObject } from "@mui/icons-material";
import { motion } from "framer-motion";
import { cardReveal, hoverLift, sectionReveal, staggerContainer } from "./motion";

const Skills = () => {
    return ( <motion.div id="Compétences" variants={sectionReveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <div className="TitleContainer"><Typography variant="h6" color="primary" textAlign="center" width="auto" className="Title">Compétences</Typography></div>
        <Grid component={motion.div} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} container marginTop={2} rowSpacing={2} columnSpacing={2} padding={1}>
            <Grid component={motion.div} variants={cardReveal} item lg={4} md={4} sm={12} xs={12} textAlign={'center'}>
                <Card component={motion.div} whileHover={hoverLift} className="myCard" >
                    <CardContent>
                        <Code color="primary"/>
                        <Typography variant="body1" color="primary">Front-end</Typography>
                        <Typography color="secondary" variant="body2"><strong>ReactJs/Next</strong></Typography>
                        <Typography color="secondary" variant="body2"><strong>Flutter/Android(Kootlin)</strong></Typography>
                        <Typography color="secondary" variant="body2"><strong>JQuery/Bootstrap/MaterialUI</strong></Typography>        
                    </CardContent>
                </Card>
            </Grid>
            <Grid component={motion.div} variants={cardReveal} item lg={4} md={4} sm={12} xs={12} textAlign={'center'}>
                <Card component={motion.div} whileHover={hoverLift} className="myCard" >
                    <CardContent>
                        <DataObject color="primary"/>
                        <Typography variant="body1" color="primary">Back-end</Typography>
                        <Typography color="secondary" variant="body2"><strong>Spring/NodeJs </strong></Typography>
                        <Typography color="secondary" variant="body2"><strong>Hibernate/JPA/Supabase</strong></Typography>
                        <Typography color="secondary" variant="body2"><strong>MySQL/MongoDb/SQLite</strong></Typography>
                         
                    </CardContent>
                </Card>
            </Grid>
            <Grid component={motion.div} variants={cardReveal} item lg={4} md={4} sm={12} xs={12} textAlign={'center'}>
                <Card component={motion.div} whileHover={hoverLift} className="myCard" >
                    <CardContent >
                        <Stars color="primary"/>
                        <Typography variant="body1" color="primary">Autres</Typography>
                        <Typography color="secondary" variant="body2"><strong>OVH/Cpanel/Vercel</strong></Typography>
                        <Typography color="secondary" variant="body2"><strong>Git/Github/Postman/Insomnia</strong></Typography>
                        <Typography color="secondary" variant="body2"><strong>Adobe Illustrator/Photoshop/Canva</strong></Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </motion.div> );
}
 
export default Skills;
