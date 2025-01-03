import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: 'Inter, sans-serif',
        fontSize: 16,
    },
    palette: {
        primary: {
            main: '#FFCC00',
            light: '#232F3E',
            dark: '#131A22',
            contrastText: '#000000',
        },
        // secondary: {
        //     main: '#ffffff',
        // light: '#ffffff',
        // dark: '#000000',
        // contrastText: '#ffffff',
        // },
    }
});

export default theme;