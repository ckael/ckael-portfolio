import { Button, Grid, TextField, Typography, Container } from "@mui/material";

const Contact = () => {
    return (<div id="contact" >
        <div className="TitleContainer"><Typography className="Title" variant="h6" color="primary">Contact</Typography></div>
        <Grid container  justifyContent="center" >
            <Grid item lg={6} md={6} sm={9} xs={9}>
                <form align="center" className="myCard">
                    <Grid rowSpacing={3} container paddingRight={3} paddingLeft={3} columnSpacing={2} marginTop={3} marginBottom={3} >
                        <Grid item lg={12} sm={12} xs={12} md={12}>
                            <TextField inputProps={{style:{color:'#FFFFFF'}}} InputLabelProps={{style:{color:'#FFFF33'}}} className="myTextField" fullWidth color="primary" variant="standard" label="Name" required />
                        </Grid>
                        <Grid item lg={12} sm={12} xs={12} md={12}>
                            <TextField inputProps={{style:{color:'#FFFFFF'}}} InputLabelProps={{style:{color:'#FFFF33'}}} className="myTextField" fullWidth color="primary" variant="standard" label="Phone" required />
                        </Grid>
                        <Grid item lg={12} sm={12} xs={12} md={12}>
                            <TextField inputProps={{style:{color:'#FFFFFF'}}} InputLabelProps={{style:{color:'#FFFF33'}}} className="myTextField" fullWidth color="primary" variant="standard" label="Email" required />
                        </Grid>
                        <Grid item lg={12} sm={12} xs={12} md={12}>
                            <TextField inputProps={{style:{color:'#FFFFFF'}}} InputLabelProps={{style:{color:'#FFFF33'}}} className="myTextField" fullWidth color="primary" variant="standard" label="Message" required />
                        </Grid>
                        <Grid item lg={12} sm={12} xs={12} md={12} paddingBottom={3}>
                            <Button  type="submit"variant="outlined" size="large" color="primary" className="Link" >Send</Button>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    </div >);
}

export default Contact;