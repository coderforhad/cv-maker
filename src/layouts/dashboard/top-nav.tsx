import React, { useState } from "react";
import PropTypes from "prop-types";
import { Typography, useMediaQuery } from "@mui/material";
import { TopBox, TopMenuBox, TopIcon } from "./LayoutStyles";
import { menuItem } from "src/demo-data/Menu";
import { useRouter } from "next/router";

export const TopNav = () => {
  const [active, setActive] = useState(1);
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const Router = useRouter();

  const handleClick = (id, path) => {
    Router.push(`${path}`);
    setActive(id);
  };
  return (
    <TopBox
      sx={{
        margin: lgUp ? "0px 2.5%" : "0 0% 2% 0",
        width: lgUp ? "30%" : "100%",
        height: lgUp ? "30%" : "100%",
      }}
    >
      {menuItem?.map((item) => (
        <TopMenuBox
          sx={{
            background:
              active === item.id ? ((theme)=> theme.palette.info.main) : "#E1E8EF",
            color: active === item.id ? "" : "Black",
            ":hover": {
              background: theme=> theme.palette.info.main,
              color: "white",
              transition: "all 0.3s"
            },
            cursor: "pointer"
          }}
          key={item?.id}
          onClick={() => handleClick(item?.id, item?.path)}
        >
          <TopIcon>
            <img 
              height={25} 
              width={28} 
              src={item?.icon} 
              alt="image" 
            />
            <Typography variant="basic">{item?.title}</Typography>
          </TopIcon>
        </TopMenuBox>
      ))}
    </TopBox>
  );
};

TopNav.propTypes = {
  onNavOpen: PropTypes.func,
};
