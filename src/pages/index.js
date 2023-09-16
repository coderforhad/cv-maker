import Head from "next/head";
import { Box, Unstable_Grid2 as Grid } from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import TabBar from "../components/TabBar";
import TampleteOne from "../layouts/dashboard/TempleteOne";
import { useForm, FormProvider } from "react-hook-form";

const Page = () => {
  const methods = useForm()
  return (
    <FormProvider {...methods}>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 5,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "50px",
        }}
      >
        <Grid sx={{ height: "700px" }}>
          <TabBar />
        </Grid>
        <Grid>
          {/* <img height={700}  
          src="/images/Resume.jpg" 
          alt="resume" 
        /> */}
          <TampleteOne />
        </Grid>
      </Box>
    </FormProvider>
  );
};
export default Page;
