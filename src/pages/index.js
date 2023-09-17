import { Box, Unstable_Grid2 as Grid, useMediaQuery } from "@mui/material";
import TabBar from "../components/TabBar";
import TampleteOne from "../layouts/dashboard/TempleteOne";
import { useForm, FormProvider } from "react-hook-form";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { useTheme } from "@mui/material";

const Page = () => {
  const methods = useForm();
  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.up("xl"));
  return (
    <FormProvider {...methods}>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 5,
          display: lg ? "flex" : "block",
          justifyContent: "center",
          gap: "50px",
        }}
      >
        <TabBar />
        <TampleteOne />
      </Box>
    </FormProvider>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
