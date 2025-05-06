import React, { useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import {
  Box, CssBaseline, AppBar as MuiAppBar, Toolbar, IconButton, Typography, Button,
  Drawer as MuiDrawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssessmentIcon from '@mui/icons-material/Assessment';
import PeopleIcon from '@mui/icons-material/People';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
 
const drawerWidth = 240;
 
const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  });
 
  const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
});
 
// Styled components
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
 
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme }) => ({
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      variants: [
        {
          props: ({ open }) => open,
          style: {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
          },
        },
        {
          props: ({ open }) => !open,
          style: {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
          },
        },
      ],
    }),
);
 
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));
 
// Title helper
const getPageTitle = (pathname) => {
  switch (pathname) {
      case '/dashboard':
          return 'Dashboard';
      case '/dashboard/users':
          return 'Users';
      case '/dashboard/reports':
          return 'Reports';
      default:
          return 'Welcome';
  }
};
 
const DashLayout = () => {
  const theme = useTheme(); // MUI theme
  const [open, setOpen] = useState(false); // Drawer open state
  const location = useLocation(); // Get current route
  const navigate = useNavigate(); // For logout redirection
 
  const handleDrawerOpen = () => {
    setOpen(true);
  };
 
  const handleDrawerClose = () => {
    setOpen(false);
  };
 
  const handleLogout = () => {
    navigate('/login');
  };
 
  const pageTitle = getPageTitle(location.pathname);
 
  return (
    <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{ marginRight: 5, ...(open && { display: 'none' }) }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                    {pageTitle}
                </Typography>
                <Button variant="outlined" color='inherit' onClick={handleLogout}>Logout</Button>
            </Toolbar>
        </AppBar>
 
        <Drawer variant="permanent" open={open}>
        <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
        </DrawerHeader>
        <Divider />
            <List sx={{ display: 'flex', flexDirection: 'column' }}>
                <ListItem  disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                        component={Link}
                        to="/dashboard"
                        selected={location.pathname === '/dashboard'}
                        sx={[
                        {
                            minHeight: 48,
                            px: 2.5,
                        },
                        open
                            ? {
                                justifyContent: 'initial',
                            }
                            : {
                                justifyContent: 'center',
                            },
                        ]}
                    >
                    <ListItemIcon
                        sx={[
                        {
                            minWidth: 0,
                            justifyContent: 'center',
                        },
                        open
                            ? {
                                mr: 3,
                            }
                            : {
                                mr: 'auto',
                            },
                        ]}
                    >
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary='Home'
                        sx={[
                        open
                            ? {
                                opacity: 1,
                            }
                            : {
                                opacity: 0,
                            },
                        ]}
                    />
                    </ListItemButton>
                </ListItem>
 
                <ListItem  disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                        component={Link}
                        to="/dashboard/reports"
                        selected={location.pathname === '/dashboard/reports'}
                        sx={[
                        {
                            minHeight: 48,
                            px: 2.5,
                        },
                        open
                            ? {
                                justifyContent: 'initial',
                            }
                            : {
                                justifyContent: 'center',
                            },
                        ]}
                    >
                    <ListItemIcon
                        sx={[
                        {
                            minWidth: 0,
                            justifyContent: 'center',
                        },
                        open
                            ? {
                                mr: 3,
                            }
                            : {
                                mr: 'auto',
                            },
                        ]}
                    >
                        <AssessmentIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary='Reports'
                        sx={[
                        open
                            ? {
                                opacity: 1,
                            }
                            : {
                                opacity: 0,
                            },
                        ]}
                    />
                    </ListItemButton>
                </ListItem>
 
                <ListItem  disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                        component={Link}
                        to="/dashboard/users"
                        selected={location.pathname === '/dashboard/users'}
                        sx={[
                        {
                            minHeight: 48,
                            px: 2.5,
                        },
                        open
                            ? {
                                justifyContent: 'initial',
                            }
                            : {
                                justifyContent: 'center',
                            },
                        ]}
                    >
                    <ListItemIcon
                        sx={[
                        {
                            minWidth: 0,
                            justifyContent: 'center',
                        },
                        open
                            ? {
                                mr: 3,
                            }
                            : {
                                mr: 'auto',
                            },
                        ]}
                    >
                        <PeopleIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary='Users'
                        sx={[
                        open
                            ? {
                                opacity: 1,
                            }
                            : {
                                opacity: 0,
                            },
                        ]}
                    />
                    </ListItemButton>
                </ListItem>
            </List>
        </Drawer>
 
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader />
            <Outlet />
        </Box>
    </Box>
  );
};
 
export default DashLayout;