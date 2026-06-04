
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
import { pageTransition } from "./motion";
function App() {
  const theme = createTheme({
    palette:{
      mode: 'dark',
      primary:{
        main:'#F2C94C',
        light:'#FFE08A',
        dark:'#B98912',
        contrastText:'#111827'
      },
      secondary:{
        main:'#E5E7EB',
        light:'#F9FAFB'
      },
      background:{
        default:'#111827',
        paper:'#1F2937'
      },
      text:{
        primary:'#F9FAFB',
        secondary:'#CBD5E1'
      }
    },
    components:{
      MuiButton:{
        styleOverrides:{
          outlinedPrimary:{
            borderColor:'#F2C94C',
            '&:hover':{
              borderColor:'#FFE08A',
              backgroundColor:'rgba(242, 201, 76, 0.08)'
            }
          }
        }
      },
      MuiTextField:{
        defaultProps:{
          color:'primary',
          variant:'standard'
        }
      }
    }
  })
  return (
    < >
    <motion.div {...pageTransition}> 
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
