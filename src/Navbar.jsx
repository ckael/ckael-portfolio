import { AppBar,Toolbar,Grid,Typography,Button,Container} from "@mui/material";


const Navbar = () => {
    return ( 
    <>
            <AppBar color="transparent" position="sticky">
                <Container>
                    <Toolbar variant="regular">
                                <Grid container> 
                                    <Grid item  lg={3} sm={3} xs={3}>
                                        <Typography variant="h6" color="primary"> <strong>Ckaël</strong></Typography>
                                    </Grid>
                                    <Grid item lg={9} sm={9} xs={9} align="right">
                                            <Button className="Link"  color="primary" href="/" variant="text"><strong>Home</strong></Button> 
                                            <Button className="Link"  color="secondary" href="/manage" variant="text"><strong>About</strong></Button>
                                            <Button className="Link" color="secondary" href="/list" variant="text"><strong>Skills</strong></Button>
                                            <Button className="Link" color="secondary" href="/list" variant="text"><strong>Contact</strong></Button>
                                    </Grid>
                                </Grid>
                                
                    </Toolbar>
                </Container>
            </AppBar>
        
    </> );
}
 
export default Navbar;
