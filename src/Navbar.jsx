
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Grid } from '@mui/material';
import { useState } from "react";
import img from "/img/LOGO.png"

const Navbar = () => {
    const pages = ['Home', 'About', 'Skills','Educations','Contact'];
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
    return ( 
    <>
            <AppBar className="bar" position="sticky">
                <Container>
                    <Toolbar disableGutters>
                                <Typography
                                    variant="h6"
                                    noWrap
                                    color="primary"
                                    sx={{
                                    mr: 2,
                                    display: { xs: 'none', md: 'flex' },
                                    fontWeight: 700,
                                    textDecoration: 'none',
                                    }}
                                >
                                    <strong>Ckaël</strong>
                                </Typography>

                                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                                    <IconButton  
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    color="inherit"
                                    >
                                    <MenuIcon color="primary" />
                                    </IconButton>
                                    <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={{
                                        display: { xs: 'block', md: 'none' },
                                    }}
                                    >
                                    {pages.map((page) => (
                                        <MenuItem className="bar" key={page} onClick={handleCloseNavMenu}>
                                        <Button className="Link" color="secondary"   href={"#"+page} variant="text"><strong>{page}</strong></Button> 
                                        </MenuItem>
                                    ))}
                                    </Menu>
                                </Box>
                                
                                <Typography
                                    variant="h5"
                                    noWrap
                                color="primary"
                                    sx={{
                                    mr: 2,
                                    display: { xs: 'flex', md: 'none' },
                                    flexGrow: 1,      
                                    fontWeight: 700,

                                    }}
                                >
                                    Ckaël
                                </Typography>
                                <Grid  justifyContent="center"  sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                    {pages.map((page) => (
                                    <Grid item key={page}>
                                    <Button
                                        href={"#"+page}
                                        onClick={handleCloseNavMenu}
                                        color="secondary"
                                        sx={{ my: 2, display: 'block' }}
                                        className="Link"
                                    >
                                    <strong>{page}</strong>
                                    </Button>
                                    </Grid>
                                    ))}
                                </Grid>

                                <Box sx={{ flexGrow: 0}}>
                                    <Tooltip title="Logo">
                                    <IconButton  sx={{ p: 0 }}>
                                        <Avatar alt="Remy Sharp" src={img} />
                                    </IconButton>
                                    </Tooltip>
                                    
                                </Box>
                        </Toolbar>
                </Container>
            </AppBar>
        
    </> );
}
 
export default Navbar;
