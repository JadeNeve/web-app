import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import ListItemButton from '@mui/material/ListItemButton';
import Divider from '@mui/material/Divider';
import { makeStyles } from '@mui/styles';
import { useAuth } from '../utils/Auth';

const navItems = [
  { name: 'Home', path: '/home' },
  { name: 'Account', path: '/account' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const drawerWidth = 240;
  const auth = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <>
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        WEB APP
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item}>
            <ListItemButton sx={{ textAlign: 'center' }} to={item.path}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {!auth.email ?
      <Typography
            variant="h7"
            component={Link}
            to={'/login'}
            sx={{ 
              my: 2, 
              textDecoration: 'none', 
              color: '#000000', 
              backgroundColor: 'lightGrey', 
              paddingX: 10.5, 
              paddingY: 1, 
              borderRadius: 1
          }}>
            Login
          </Typography> : null}
    </Box>
    </>
  );

  const desktopNavLinks = (
    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
      {navItems.map((item) => (
        <Button 
          key={item}
          component={Link}
          to={item.path}
          sx={{ color: '#fff' }}
        >
          {item.name}
        </Button>
))}
    </Box>
  );

  const mobileNavLinks = (
    <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
        <Typography
            variant="h6"
            component={Link}
            to={'/'}
            sx={{ flexGrow: 1, display: {
               xs: 'none', 
               sm: 'block', 
               color: '#fff', 
               textDecoration: 'none', 
               fontWeight: 'bold' 
            } }}
          >
            WEB APP
          </Typography>
          {isMobile ? mobileNavLinks : desktopNavLinks}
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {!auth.email ? <Button variant="contained" color="primary" style={{backgroundColor: 'white', color: '#1976d2', fontWeight: 'bold'}} component={Link} to={'/login'}>LOGIN</Button> : null}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
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
      </Box>
    </Box>
  );
}