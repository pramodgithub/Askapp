import { Box, CssBaseline, Stack } from '@mui/material';
import { theme } from './theme';
import { ThemeProvider } from '@mui/material';

import { Navbar, LandingPage, Sidebar } from './components';

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <LandingPage />
      </Stack>
    </Box>
  </ThemeProvider>
);

export default App;
