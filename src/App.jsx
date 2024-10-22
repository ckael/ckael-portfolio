
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Education from "./Education";
import Contact from "./Contact";
import Projects from "./Projects";
import "./style.css";
import { createTheme,ThemeProvider } from "@mui/material";
import { motion } from "framer-motion";
function App() {
  const theme = createTheme({
    palette:{
      primary:{
        main:'#FFFF33',
        light:'#FFFF99'
      },
      secondary:{
        main:'#FFFFFF'
      }
    }
  })
  return (
    < >
    <motion.div initial={{scaleY:0, scaleX:0}} transition={{duration:1}} animate={{scaleY:1, scaleX:1}}> 
    <ThemeProvider theme={theme}>
    <Navbar/> 
      <Home />
        <About/>
        <Skills/>
        <Education/>
        <Projects/>
        <Contact/>
    </ThemeProvider>
    </motion.div> 
    </>
  )
}


export default App
