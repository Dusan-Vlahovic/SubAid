import React, {memo} from "react";
import {createTheme, ThemeProvider} from "@mui/material";
import {useAccountState} from "./hooks/redux";
import {AuthRoutes} from "./routes/AuthRoutes";
import {PrivateRoutes} from "./routes/PrivateRoutes";
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
