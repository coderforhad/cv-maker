import Head from "next/head";
import React, { createContext, useContext, useState, useEffect } from "react";
import { CacheProvider } from "@emotion/react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { AuthConsumer, AuthProvider } from "src/contexts/auth-context";
import { useNProgress } from "src/hooks/use-nprogress";
import { createTheme } from "src/theme";
import { createEmotionCache } from "src/utils/create-emotion-cache";
import "simplebar-react/dist/simplebar.min.css";

const ThemeModeContext = createContext();
export const useThemeModeContext = () => useContext(ThemeModeContext);
const clientSideEmotionCache = createEmotionCache();

const SplashScreen = () => null;

const App = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const [themeMode, setThemeMode] = useState("light");

  useEffect(() => {
    const savedThemeMode = localStorage.getItem("themeMode");
    if (savedThemeMode) {
      setThemeMode(savedThemeMode);
    }
  }, []);

  useNProgress();

  const getLayout = Component.getLayout ?? ((page) => page);

  const theme = createTheme(themeMode);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Forhad Ahmed</title>
        <meta
          name="viewport"
          content="initial-scale=1, 
          width=device-width"
        />
      </Head>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <AuthProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <AuthConsumer>
              {(auth) => (
                <ThemeModeContext.Provider value={{ themeMode, setThemeMode }}>
                  {auth.isLoading ? <SplashScreen /> : getLayout(<Component {...pageProps} />)}
                </ThemeModeContext.Provider>
              )}
            </AuthConsumer>
          </ThemeProvider>
        </AuthProvider>
      </LocalizationProvider>
    </CacheProvider>
  );
};

export default App;
