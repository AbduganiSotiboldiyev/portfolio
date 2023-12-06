
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { navItems } from '@/config/constants';
import React, { useState } from 'react'
import QrCode2TwoToneIcon from '@mui/icons-material/QrCode2TwoTone';
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from 'next/router';


interface Props {
  window?: () => Window;
}


const Navbar = ({window} : Props) => {
  
 
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  }

  const router = useRouter()

   const drawer = (
    <Box  sx={{ textAlign: 'center' }}>
      <Box sx={{display: "flex", justifyContent:"space-between", alignItems: "center",paddingX:"15px"}}>
        <Box sx={{display: "flex", justifyContent:"start", alignItems: "center"}}>
          <QrCode2TwoToneIcon/>
          <Typography variant="h6" sx={{ my: 2 }}>
            AbduPorfolio
          </Typography>
        </Box>
        <CloseIcon  onClick={handleDrawerToggle}/>
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.route} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.label} onClick={() =>  router.push(`${item.route}`)}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

   const drawerWidth = "100%"

   const route = useRouter()

  const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <Box minHeight={"6.5vh"}>
      <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box onClick={() => route.push("/")} sx={{display:{ xs: 'none', sm: 'flex' }, flexGrow: 1,cursor: "pointer", alignItems: "center"}}>
            <QrCode2TwoToneIcon/>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              AbduPorfolio
            </Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item.route} sx={{ color: '#fff' }} onClick={() => router.push(`${item.route}`)}>
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
    </Box>
  )
}

export default Navbar