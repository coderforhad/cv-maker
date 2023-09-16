import React from "react";
import { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { styled } from "@mui/material/styles";
// import { withAuthGuard } from "src/hocs/with-auth-guard";
import { useMediaQuery } from "@mui/material";
import Header from "./Header";
import { LayoutMainBox, LayoutSubBox } from "./LayoutStyles";

const LayoutRoot = styled("div")(({ }) => ({
  flex: "1 1 auto",
  maxWidth: "100%",
}));

const LayoutContainer = styled("div")({
  display: "flex",
  flex: "1 1 auto",
  flexDirection: "column",
  width: "100%",
});

export const Layout = (props) => {
  const { children } = props;
  const pathname = usePathname();
  const [openNav, setOpenNav] = useState(false);
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("sm"));

  const handlePathnameChange = useCallback(() => {
    if (openNav) {
      setOpenNav(false);
    }
  }, [openNav]);

  useEffect(
    () => {
      handlePathnameChange();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pathname]
  );
  return (
    <LayoutMainBox>
      <Header />
      <LayoutSubBox sx={{ display: lgUp ? "flex" : "block" }}>
        <LayoutRoot>
          <LayoutContainer>{children}</LayoutContainer>
        </LayoutRoot>
      </LayoutSubBox>
    </LayoutMainBox>
  );
};
