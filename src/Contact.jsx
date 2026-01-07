import { Button, Grid, CircularProgress,TextField, Typography, Alert, Box } from "@mui/material";
import { useState } from "react";
import emailjs from 'emailjs-com';
import { motion } from "framer-motion";

const Contact = () => {
    const [name,setName] = useState('');
    const[phone,setPhone] = useState('');
    const [mail,setMail] = useState('');
    const[message,setMessage] = useState('');
    const[pending,isPending] = useState(false);
    const[success,isSuccess] = useState(false);
    const[faild, isFaild] = useState(false);

    const sendEmail = (e) => {
    e.preventDefault();
   isPending(true);
    const email = {
        from_name : name,
        from_mail : mail,
        message : "Message :"+message+"\n Numero:"+phone
    }
   
      emailjs.send('service_lacycls', 'template_pqnfe3c',email, 'GuycxByIEzM8HGhrH')
        .then((result) => {
            console.log('Email envoyé avec succès !', result.text);
            isSuccess(true)
            isPending(false)
            
        }, (error) => {
            console.error('Erreur lors de l\'envoi de l\'email :', error.text);
            isPending(false)
            isFaild(true)
        });
    }
    return (<div id="Contact" >
        <div className="TitleContainer"><Typography className="Title" variant="h6" color="primary">Contact</Typography></div>
        <Grid container  justifyContent="center" >
            <Grid item lg={6} md={6} sm={9} xs={9}>
                <form align="center" onSubmit={sendEmail} className="myCard">
                    <Grid rowSpacing={3} container paddingRight={3} paddingLeft={3} columnSpacing={2} marginTop={3} marginBottom={3} >
                        <Grid item lg={12} sm={12} xs={12} md={12}>
                            <TextField inputProps={{style:{color:'#FFFFFF'}}} InputLabelProps={{style:{color:'#FFFF33'}}} onChange={(e)=>{setName(e.target.value)}} name="name"className="myTextField" fullWidth color="primary" variant="standard" label="Nom" required />
                        </Grid>
                        <Grid item lg={12} sm={12} xs={12} md={12}>
                            <TextField inputProps={{style:{color:'#FFFFFF'}}} InputLabelProps={{style:{color:'#FFFF33'}}} onChange={(e)=>{setPhone(e.target.value)}} name="phone" className="myTextField" fullWidth color="primary" variant="standard" label="Téléphone" required />
                        </Grid>
                        <Grid item lg={12} sm={12} xs={12} md={12}>
                            <TextField inputProps={{style:{color:'#FFFFFF'}}} InputLabelProps={{style:{color:'#FFFF33'}}} name="email" onChange={(e)=>{setMail(e.target.value)}} className="myTextField" fullWidth color="primary" variant="standard" label="Email" required />
                        </Grid>
                        <Grid item lg={12} sm={12} xs={12} md={12}>
                            <TextField inputProps={{style:{color:'#FFFFFF'}}} InputLabelProps={{style:{color:'#FFFF33'}}} name="message" onChange={(e)=>{setMessage(e.target.value)}} className="myTextField" fullWidth color="primary" variant="standard" label="Message" required />
                        </Grid>
                        <Grid item lg={12} sm={12} xs={12} md={12} paddingBottom={3}>
                            <Button  type="submit"variant="outlined" size="large" color="primary" className="Link" >{ !pending ? "Envoyer" : <CircularProgress size={25} color="primary" />}</Button>
                        </Grid>
                        
                    </Grid>
                </form>
            </Grid>
        </Grid>
        <Typography variant="body2" color="secondary" align="center"> Copyright © 2026 All rights reserved by<Button  variant="text" size="large" color="primary" className="Link" href="https://www.linkedin.com/in/riantsoa-ckael-ranaivomanana-7706892a8/" >Riantsoa Ckael</Button></Typography>
<Box position={"fixed"} alignContent={"center"} bottom={16}>
{ success &&<motion.div initial={{opacity:0}} transition={{duration:5}} animate={{opacity:[1,0]}}> <Alert  sx={{width:"300px"}}  severity="success">Message envoyé avec succès !</Alert> </motion.div> }
{ faild && <motion.div initial={{opacity:0}} transition={{duration:5}} animate={{opacity:[1,0]}}> <Alert sx={{bgcolor:"primary",width:"400px"}} severity="warning">Une erreur est survenu lors de l'envoi de l'email </Alert> </motion.div>} 
</Box>
    </div >);
}

export default Contact;