import { Box, Grid, Typography, styled } from "@mui/material";

export const HeaderMainBox = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "10px 10% 20px 10%",
});

export const HeaderSubBox = styled(Box)(({ theme }) => ({
  padding: "20px",
  borderRadius: "50%",
  background: theme.palette.background.paper,
  boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const LayoutMainBox = styled(Box)({
  height: "100%",
});
export const LayoutSubBox = styled(Box)({
  alignItems: "flex-start",
  justifyContent: "center",
  height: "100%",
});
export const TitleName = styled(Typography)({
  fontFamily: "Raleway",
  fontSize: "28.42px",
  fontWeight: 700,
  padding: "80px 0px 0px 0px",
  textAlign: "center",
});
export const TitleRole = styled(Typography)({
  fontFamily: "Raleway",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 500,
  textAlign: "center",
  // color: "rgba(11, 9, 9, 0.50)",
  padding: "8px 0px 0px 0px",
});
export const SocialGrid = styled(Grid)(({ theme }) => ({
  background: theme.palette.background.default,
  ":hover": {
    background:
      theme.palette.mode === "dark" ? theme.palette.info.contrastText : theme.palette.grey[400],
  },
  borderRadius: "8.269px",
  padding: "10px",
  cursor: "pointer",
}));

export const InfoGrid = styled(Grid)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
});
export const InfoTitle = styled(Typography)({
  // color: "rgba(26, 16, 3, 0.50)",
  fontFamily: "Raleway",
  fontSize: "14px",
  fontWeight: 600,
});
export const Info = styled(Typography)({
  // color: "#000",
  fontFamily: "Raleway",
  fontSize: "14px",
  fontWeight: 600,
});

export const TopBox = styled(Box)(({ theme }) => ({
  float: "right",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "10px",
  padding: "10px",
  background: theme.palette.background.paper,
  boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
  borderRadius: "20px",
}));

export const TopMenuBox = styled(Box)({
  textAlign: "center",
  width: "80px",
  height: "80px",
  borderRadius: "20px",
  // color: "#FFF",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const TopIcon = styled(Grid)({
  width: "100%",
  height: "100%",
  padding: "10px",
});
