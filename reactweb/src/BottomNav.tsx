import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import AboutIcon from '@material-ui/icons/Info';
import ProjectsIcon from '@material-ui/icons/Folder'
import MoreIcon from '@material-ui/icons/MoreHoriz'
import Paper from '@mui/material/Paper';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const HomePage = () => {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const theme = React.useMemo(
      () =>
        createTheme({
          palette: {
            mode: prefersDarkMode ? 'dark' : 'light',
          },
        }),
      [prefersDarkMode],
    );

    const [value, setValue] = React.useState<number>(0);

    return (
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={2}>
        <ThemeProvider theme={theme}>
        
        <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction icon={<HomeIcon/>} label="Home"/>
        <BottomNavigationAction icon={<AboutIcon/>} label="About"/>
        <BottomNavigationAction icon={<ProjectsIcon/>} label="Projects"/>
        <BottomNavigationAction icon={<MoreIcon/>} label="More"/>
      </BottomNavigation>
      </ThemeProvider>
      </Paper>
    );
}

export default HomePage