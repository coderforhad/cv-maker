import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import BasicInfo from "./BasicInfo";
import Educations from "./Educations";
import TopSkills from "./TopSkills";
import Experience from "./Experience";
import Achievements from "./Achievements";
import Contact from "./Contact";

const tabs = [
  {
    key: "basicInfo",
    label: "Basic Info",
  },
  {
    key: "educations",
    label: "Educations",
  },
  {
    key: "proExperience",
    label: "Professional Experience",
  },
  {
    key: "contact",
    label: "Contact",
  },
  {
    key: "achievements",
    label: "Achievements",
  },
  {
    key: "topSkills",
    label: "Top Skills",
  },
];

export default function TabBar() {
  const [value, setValue] = React.useState("basicInfo");
  const [forms, setForms] = React.useState([])
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider", display: "flex", gap: "30px" }}>
            {tabs?.map((tab) => (
              <TabList key={tab?.key} 
                onChange={handleChange} 
                aria-label="lab API tabs example"
              >
                <Tab 
                  label = {tab?.label} 
                  value = {tab?.key} 
                />
              </TabList>
            ))}
          </Box>
          <TabPanel value="basicInfo">
            <BasicInfo />
          </TabPanel>
          <TabPanel value="educations">
            <Educations />
          </TabPanel>
          <TabPanel value="topSkills">
            <TopSkills />
          </TabPanel>
          <TabPanel value="proExperience">
            <Experience />
          </TabPanel>
          <TabPanel value="achievements">
            <Achievements />
          </TabPanel>
          <TabPanel value="contact">
            <Contact />
          </TabPanel>
        </TabContext>
      </Box>
  );
}
