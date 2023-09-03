import React from "react";
import { HeaderMainBox, HeaderSubBox } from "./LayoutStyles";
//@ts-ignore
//@ts-ignore
import NightsStayIcon from "@mui/icons-material/NightsStay";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { Grid, Typography } from "@mui/material";
import {useThemeModeContext} from "../../pages/_app"

const Header = () => {
  const { themeMode, setThemeMode } = useThemeModeContext();
  const handleClick = () => {
    const newThemeMode = themeMode === "light" ? "dark" : "light";
    setThemeMode(newThemeMode);
    localStorage.setItem('themeMode', newThemeMode);
  };
  return (
    <HeaderMainBox>
      <Grid>
        <Typography
          sx={{
            fontFamily: "Pacifico",
            fontSize: "30px",
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          CV{" "}
          <Typography
            sx={{
              fontFamily: "Pacifico",
              fontSize: "30px",
              display: "flex",
              alignItems: "center",
              gap: "5px",
              color: (theme) => theme.palette.info.main,
            }}
          >
            Maker
          </Typography>
        </Typography>
      </Grid>
      <HeaderSubBox
        sx={{
          ":hover": {
            background: (theme) => theme.palette.background.default,
            transition: "all 0.3s",
          },
          cursor: "pointer",
        }}
        onClick={handleClick}
      >
        {themeMode==="light" ? <Brightness4Icon /> : <NightsStayIcon />}
      </HeaderSubBox>
    </HeaderMainBox>
  );
};
export default Header;
