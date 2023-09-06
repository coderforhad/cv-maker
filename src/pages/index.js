import Head from "next/head";
import { Box, Unstable_Grid2 as Grid } from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import TabBar from "../components/TabBar";

const Page = () => (
  <>
    <Head>
      <title>Home | Portfolio</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 5,
        display:"flex", 
        alignItems:"center", 
        justifyContent: "center", 
        gap:"50px"
      }}
    >
      <Grid sx={{height: "700px"}}>
        <TabBar />
      </Grid>
      <Grid>
        <img height={700}  
          src="/images/Resume.jpg" 
          alt="resume" 
        />
      </Grid>
    </Box>
  </>
);

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
