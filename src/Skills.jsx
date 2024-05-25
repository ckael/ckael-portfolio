import { Grid, Typography ,Card,CardContent} from "@mui/material";
import { Code, Stars, DataObject } from "@mui/icons-material";

const Skills = () => {
    return ( <div id="Skills">
        <div className="TitleContainer"><Typography variant="h6" color="primary" textAlign="center" width="auto" className="Title"><strong>Skills</strong></Typography></div>
        <Grid container marginTop={2} rowSpacing={2} columnSpacing={2} padding={1}>
            <Grid item lg={4} md={4} sm={12} xs={12} textAlign={'center'}>
                <Card className="myCard" >
                    <CardContent>
                        <Code color="primary"/>
                        <Typography variant="body1" color="primary">Front-end</Typography>
                        <Typography color="secondary" variant="body2"><strong>ReactJs</strong></Typography>
                        <Typography color="secondary" variant="body2"><strong>JQuery/Bootstrap/MaterialUI</strong></Typography>
                        <Typography color="secondary" variant="body2"><strong>HTML/CSS/JS</strong></Typography>
                        
                    </CardContent>
                </Card>
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12} textAlign={'center'}>
                <Card className="myCard" >
                    <CardContent>
                        <DataObject color="primary"/>
                        <Typography variant="body1" color="primary">Back-end</Typography>
                        <Typography color="secondary" variant="body2"><strong>Spring </strong></Typography>
                        <Typography color="secondary" variant="body2"><strong>Hibernate/JPA</strong></Typography>
                        <Typography color="secondary" variant="body2"><strong>MySQL/MongoDb/SQLite</strong></Typography>
                         
                    </CardContent>
                </Card>
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12} textAlign={'center'}>
                <Card className="myCard" >
                    <CardContent >
                        <Stars color="primary"/>
                        <Typography variant="body1" color="primary">Other skills</Typography>
                        <Typography color="secondary" variant="body2"><strong>Git</strong></Typography>
                        <Typography color="secondary" variant="body2"><strong>Adobe Illustrator/Photoshop</strong></Typography>
                        <Typography color="secondary" variant="body2"><strong>Postman/Insomnia</strong></Typography>
                        
                        
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </div> );
}
 
export default Skills;