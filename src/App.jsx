import { Fragment } from 'react';

// ** Router Provider
import { RouterProvider } from 'react-router';

// ** Mui Theme Provider
import { ThemeProvider } from '@mui/material/styles';

// ** Mui Base Styles
import { CssBaseline } from '@mui/material';

// ** Routes
import { router } from './routes';

// ** Custom Theme
import theme from './styles/_theme';

function App() {

  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />  
      </ThemeProvider>
    </Fragment>
  )
}

export default App;
