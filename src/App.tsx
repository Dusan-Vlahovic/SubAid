import React, {memo} from "react";
import {createTheme, ThemeProvider} from "@mui/material";
const theme = createTheme({
});

const App = memo(() => {
  const account = useAccountState();

  return (
    <ThemeProvider theme={theme}>
      {!account ? <AuthRoutes /> : <PrivateRoutes />}
    </ThemeProvider>
  );
});

export default App;
