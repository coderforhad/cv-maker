import React from "react";
import PropTypes from "prop-types";
import { Card, CardContent, useMediaQuery, Grid } from "@mui/material";
import pictureIcon from "/public/images/others/profile_picture.png";
import Image from "next/image";
import { TitleName, TitleRole } from "./LayoutStyles";
import SocialTab from "src/components/elements/SocialTab";
import BasicInfo from "src/components/elements/BasicInfo";
import DownloadButton from "src/components/elements/DownloadButton";

export const SideNav = () => {
  return (
    <div style={{ zIndex: 1, position: "relative" }}>
      <Card sx={{ margin: "30% 0% 5% 0%" }}>
        <Image
          style={{
            boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
            position: "absolute",
            transform: "translateY(-50%)",
            overflow: "hidden",
            borderRadius: "20px",
            marginLeft: "22%",
          }}
          height={200}
          width={200}
          src={pictureIcon}
          alt="image"
        />
        <CardContent>
          <TitleName>Beatrice Wambui</TitleName>
          <TitleRole>FullStack Developer</TitleRole>
          <SocialTab />
          <Card>            
            <CardContent sx={{ background: ((theme)=> theme.palette.background.default) }}> 
              <BasicInfo />
              <Grid sx={{ textAlign: "center", margin: "20px 0px 0px" }}>
                <DownloadButton />
              </Grid>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
};

SideNav.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
};
