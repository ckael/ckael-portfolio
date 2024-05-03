import { AppBar,Toolbar,Grid,Typography,Button,Container} from "@mui/material";


const Navbar = () => {
    return ( 
    <>
            <AppBar className="bar" position="sticky">
                <Container>
                    <Toolbar variant="regular">
                                <Grid container> 
                                    <Grid item  lg={3} sm={1} xs={1}>
                                        <Typography variant="h6" color="primary"> <strong>Ckaël</strong></Typography>
                                    </Grid>
                                    <Grid item lg={9} sm={11} xs={11} align="right">
                                            <Button className="Link"  color="primary" href="#home" variant="text"><strong>Home</strong></Button> 
                                            <Button className="Link"  color="secondary" href="#about" variant="text"><strong>About</strong></Button>
                                            <Button className="Link" color="secondary" href="#skills" variant="text"><strong>Skills</strong></Button>
                                            <Button className="Link" color="secondary" href="#education" variant="text"><strong>Education</strong></Button>
                                            <Button className="Link" color="secondary" href="#contact" variant="text"><strong>Contact</strong></Button>
                                    </Grid>
                                </Grid>
                                
                    </Toolbar>
                </Container>
            </AppBar>
        
    </> );
}
 
export default Navbar;
