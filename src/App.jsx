
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About"
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
    },
    typography:{
      fontFamily:'Arial'
    }
  })
  return (
    < >
    <ThemeProvider theme={theme}>
        <Navbar/>
        <Home/>
        <About/>
    </ThemeProvider>
    </>
  )
}


export default App
