
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Education from "./Education";
import Contact from "./Contact";
import "./style.css";
import { createTheme,ThemeProvider } from "@mui/material";
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
    <ThemeProvider theme={theme}>
        <Navbar/>
        <Home />
        <About/>
        <Skills/>
        <Education/>
        <Contact/>
    </ThemeProvider>
    </>
  )
}


export default App
