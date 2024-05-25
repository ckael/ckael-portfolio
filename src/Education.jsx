import { Container,Grid,Typography,Card,CardContent } from "@mui/material";

const Education = () => {
    return ( <div id="education">
        <Container>
                <Grid container columnSpacing={4} rowSpacing={4} marginTop={2} >
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Typography color="primary" variant="body1" className="Title"><strong>Educations</strong></Typography>
                        <Card className="myCard" >
                            <CardContent>
                                <Typography variant="body1" color="primary"><strong>2020-2023</strong></Typography>
                                <Typography variant="body1" color="secondary"><strong>IS-INFO Ampasamadinika</strong></Typography><br />
                                <Typography variant="body2" color="secondary">Information systems management degree</Typography>
                            </CardContent>
                        </Card>
                        <Card className="myCard" >
                            <CardContent>
                                <Typography variant="body1" color="primary"><strong>2018-2019</strong></Typography>
                                <Typography variant="body1" color="secondary"><strong>Anosizato West High school</strong></Typography><br />
                                <Typography variant="body2" color="secondary">Bachelor degree</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Typography color="primary" variant="body1" className="Title"><strong>Experiences</strong></Typography>
                        <Card className="myCard" >
                            <CardContent>
                                <Typography variant="body1" color="primary"><strong>2023</strong></Typography>
                                <Typography variant="body1" color="secondary"><strong>MESupRes Madagascar</strong></Typography><br />
                                <Typography variant="body2" color="secondary">5 month internship</Typography>
                            </CardContent>
                        </Card>
                        <Card className="myCard" >
                            <CardContent>
                                <Typography variant="body1" color="primary"><strong>2023</strong></Typography>
                                <Typography variant="body1" color="secondary"><strong>Commune Ankadikely Ilafy</strong></Typography><br />
                                <Typography variant="body2" color="secondary">2 month internship</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
        </Container>
    </div> );
}
 
export default Education;