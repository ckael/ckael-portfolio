import { Grid, Typography ,Card,CardContent} from "@mui/material";
import { Code, Stars, DataObject } from "@mui/icons-material";

const Skills = () => {
    return ( <div id="Compétences">
        <div className="TitleContainer"><Typography variant="h6" color="primary" textAlign="center" width="auto" className="Title">Compétences</Typography></div>
        <Grid container marginTop={2} rowSpacing={2} columnSpacing={2} padding={1}>
            <Grid item lg={4} md={4} sm={12} xs={12} textAlign={'center'}>
                <Card className="myCard" >
                    <CardContent>
                        <Code color="primary"/>
                        <Typography variant="body1" color="primary">Front-end</Typography>
                        <Typography color="secondary" variant="body2"><strong>ReactJs/Next</strong></Typography>
                        <Typography color="secondary" variant="body2"><strong>Flutter/Android(Kootlin)</strong></Typography>
                        <Typography color="secondary" variant="body2"><strong>JQuery/Bootstrap/MaterialUI</strong></Typography>        
                    </CardContent>
                </Card>
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12} textAlign={'center'}>
                <Card className="myCard" >
                    <CardContent>
                        <DataObject color="primary"/>
                        <Typography variant="body1" color="primary">Back-end</Typography>
                        <Typography color="secondary" variant="body2"><strong>Spring/NodeJs </strong></Typography>
                        <Typography color="secondary" variant="body2"><strong>Hibernate/JPA/Supabase</strong></Typography>
                        <Typography color="secondary" variant="body2"><strong>MySQL/MongoDb/SQLite</strong></Typography>
                         
                    </CardContent>
                </Card>
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12} textAlign={'center'}>
                <Card className="myCard" >
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
    </div> );
}
 
export default Skills;