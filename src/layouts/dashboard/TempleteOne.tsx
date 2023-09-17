import { Box, Button, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { Margin, usePDF } from "react-to-pdf";

export default function TempleteOne() {
  const methods = useFormContext();
  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.up("xl"));
  const { toPDF, targetRef } = usePDF({
    method: "save",
    filename: "Resume.pdf",
    page: { margin: Margin.SMALL, format: "letter", orientation: "portrait" },
  });

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: " space-between",
          background: (theme) => (theme.palette.mode === "dark" ? "#636363" : "#EBEBEB"),
          width: "800px",
          height:"1030px"
        }}
        ref={targetRef}
      >
        <Grid
          sx={{
            width: lg ? "200px" : "100%",
            backgroundColor: "#162232",
            borderRadius: "100px 100px 0px 0px",
            margin: "20px 0px 0px 20px",
          }}
        >
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px",
            }}
          >
            <img
              style={{ width: "180px", height: "180px", borderRadius: "100%" }}
              src={methods?.watch("userPhoto") ? methods?.watch("userPhoto") : "images/person.jpg"}
            />
          </Grid>
          <Typography
            sx={{
              color: "#191919",
              backgroundColor: "#D9D9D9",
              width: "60%",
              borderRadius: "0px 50px 50px 0px",
              margin: "20px 0px",
              padding: "8px",
              textAlign: "center",
            }}
          >
            Education
          </Typography>
          <Grid sx={{ color: "#FFFAEF", fontSize: "12px" }}>
            <ul>
              <li style={{ margin: "10px 0px" }}>
                {methods.watch("university")
                  ? methods.watch("university")
                  : "Borcelle Business School"}
                <br />
                {methods.watch("degree") ? methods.watch("degree") : "Masters in Accounting"}
                <br />
                {methods.watch("universityEnd")
                  ? `Completed in ${methods.watch("universityEnd").$y}`
                  : "Completed in 2016"}
              </li>
              <li style={{ margin: "10px 0px" }}>
                {methods.watch("college") ? methods.watch("college") : "Borcelle Business School"}
                <br />
                {methods.watch("collegeSubject")
                  ? methods.watch("collegeSubject")
                  : "Masters in Accounting"}
                <br />
                {methods.watch("collegeEnd")
                  ? `Completed in ${methods.watch("collegeEnd").$y}`
                  : "Completed in 2016"}
              </li>
              <li style={{ margin: "10px 0px" }}>
                {methods.watch("school") ? methods.watch("school") : "Borcelle Business School"}
                <br />
                {methods.watch("schoolSubject")
                  ? methods.watch("schoolSubject")
                  : "Masters in Accounting"}
                <br />
                {methods.watch("schoolEnd")
                  ? `Completed in ${methods.watch("schoolEnd").$y}`
                  : "Completed in 2016"}
              </li>
            </ul>
          </Grid>
          <Typography
            sx={{
              color: "#191919",
              backgroundColor: "#D9D9D9",
              width: "60%",
              borderRadius: "0px 50px 50px 0px",
              margin: "20px 0px",
              padding: "8px",
              textAlign: "center",
            }}
          >
            contact
          </Typography>
          <Grid sx={{ color: "#FFFAEF", fontSize: "12px", margin: "20px" }}>
            <Typography sx={{ fontSize: "12px", padding: "0px 10px" }}>
              Email: {methods.watch("email") ? methods.watch("email") : `hello@reallygreatsite.com`}
              <br />
              Phone: {methods.watch("phone") ? methods.watch("phone") : `+123-456-7890`} <br />
              Address:{" "}
              {methods.watch("address") ? methods.watch("address") : `123 Anywhere St., Any City`}
            </Typography>
          </Grid>
          <Typography
            sx={{
              color: "#191919",
              backgroundColor: "#D9D9D9",
              width: "80%",
              borderRadius: "0px 50px 50px 0px",
              margin: "20px 0px",
              padding: "8px",
              textAlign: "center",
            }}
          >
            Achievements
          </Typography>
          <Grid sx={{ color: "#FFFAEF", fontSize: "12px" }}>
            <ul>
              <li style={{ margin: "10px 0px" }}>
                {methods.watch("startDateAchievementOne") && methods.watch("endDateAchievementOne")
                  ? methods.watch("startDateAchievementOne").$y +
                    "-" +
                    methods.watch("endDateAchievementOne").$y
                  : `2013 – 2015`}
                <br />
                {methods.watch("keyAchievementOne")
                  ? methods.watch("keyAchievementOne")
                  : `Reduced the production cost by 20% in the second year of internship`}
              </li>
              <li style={{ margin: "10px 0px" }}>
                {methods.watch("startDateAchievementTwo") && methods.watch("endDateAchievementTwo")
                  ? methods.watch("startDateAchievementTwo").$y +
                    "-" +
                    methods.watch("endDateAchievementTwo").$y
                  : `2014 – 2017`}
                <br />
                {methods.watch("keyAchievementTwo")
                  ? methods.watch("keyAchievementTwo")
                  : `Managed five projects worth over $100million.`}
              </li>
            </ul>
          </Grid>
        </Grid>
        <Grid>
          <Grid sx={{ padding: "30px 30px" }}>
            <Typography variant="h3">
              {methods?.watch("fName") ? methods?.watch("fName") : "Itsuki Takahashi"}
            </Typography>
            <Typography variant="h5" sx={{ fontStyle: "italic" }}>
              {methods?.watch("designation") ? methods?.watch("designation") : "Financial Analyst"}
            </Typography>
          </Grid>
          <hr />
          <Typography sx={{ fontSize: "12px", padding: "0px 30px" }}>
            {methods?.watch("objective")
              ? methods?.watch("objective")
              : `Dedicated and detail-oriented Financial Analyst with 10 years of experience. Eager to
          apply proven-budget maximization skills for Bank of Brocelle in monitoring, maintaining,
          and completing client billing and reconciliations. Special interest in achieving the
          millennial market and helping with retirement and general financial planning.`}
          </Typography>
          <Typography
            sx={{
              color: "#FFFAEF",
              backgroundColor: "#323232",
              width: "70%",
              borderRadius: "0px 50px 50px 0px",
              margin: "20px 0px",
              padding: "8px",
              textAlign: "center",
            }}
          >
            Professional Experience
          </Typography>
          <ul>
            <li>
              {methods.watch("companyName")
                ? methods.watch("companyName")
                : `Ginyard International Co. | Financial Analyst`}{" "}
              <br />
              {methods.watch("startsExp") && methods.watch("endExp")
                ? methods.watch("startsExp").$y + "-" + methods.watch("endExp").$y
                : `2015 – 2020`}
              <Typography sx={{ fontSize: "12px", fontStyle: "italic" }}>
                Key responsibilities:
              </Typography>
              {methods.watch("resposibilityOne") ? (
                methods.watch("resposibilityOne")?.map((ability, i) => (
                  <ul key={i} style={{ fontSize: "12px" }}>
                    <li>{ability}</li>
                  </ul>
                ))
              ) : (
                <ul style={{ fontSize: "12px" }}>
                  <li>Analyze current and past financial data.</li>
                  <li>Look at recent financial performance and identify trends.</li>
                  <li>
                    Prepare reports on the above information and communicate the insights of these
                    reports to the broader business.
                  </li>
                  <li>Consult with the management team to develop long-term commercial plans.</li>
                </ul>
              )}
            </li>
          </ul>
          <ul>
            <li>
              {methods.watch("companyNameTwo")
                ? methods.watch("companyNameTwo")
                : `Ginyard International Co. | Financial Analyst`}
              <br />
              {methods.watch("startsExpTwo") && methods.watch("endExpTwo")
                ? methods.watch("startsExpTwo").$y + "-" + methods.watch("endExpTwo").$y
                : `2015 – 2020`}{" "}
              <br />
              <Typography sx={{ fontSize: "12px", fontStyle: "italic" }}>
                Key responsibilities:
              </Typography>
              {methods.watch("resposibilityTwo") ? (
                methods.watch("resposibilityTwo")?.map((abilityTwo, i) => (
                  <ul key={i} style={{ fontSize: "12px" }}>
                    <li>{abilityTwo}</li>
                  </ul>
                ))
              ) : (
                <ul style={{ fontSize: "12px" }}>
                  <li>Looked at financial performance and identified trends</li>
                  <li>Look at recent financial performance and identify trends.</li>
                </ul>
              )}
            </li>
          </ul>
          <Typography
            sx={{
              color: "#FFFAEF",
              backgroundColor: "#323232",
              width: "40%",
              borderRadius: "0px 50px 50px 0px",
              padding: "8px",
              textAlign: "center",
            }}
          >
            Top skills
          </Typography>
          <Grid sx={{ display: "flex", justifyContent: "space-around" }}>
            <Grid>
              <Typography sx={{ margin: "10px 0px 0px 20px" }}>Hard Skills</Typography>
              {methods.watch("hardSkills") ? (
                methods.watch("hardSkills")?.map((skills, i) => (
                  <ul style={{ margin: "2px" }} key={i}>
                    <li style={{ fontSize: "12px" }}>{skills}</li>
                  </ul>
                ))
              ) : (
                <ul>
                  <li style={{ fontSize: "12px" }}>Financial modeling and reporting</li>
                  <li style={{ fontSize: "12px" }}>Data mining and analysis</li>
                  <li style={{ fontSize: "12px" }}>Financial accounting</li>
                  <li style={{ fontSize: "12px" }}>Business valuation</li>
                  <li style={{ fontSize: "12px" }}>Advanced SAS proficiency</li>
                </ul>
              )}
            </Grid>
            <Grid>
              <Typography sx={{ margin: "10px 0px 0px 20px" }}>Soft Skills</Typography>
              {methods.watch("softSkills") ? (
                methods.watch("softSkills")?.map((skills, i) => (
                  <ul style={{ margin: "2px" }} key={i}>
                    <li style={{ fontSize: "12px" }}>{skills}</li>
                  </ul>
                ))
              ) : (
                <ul>
                  <li style={{ fontSize: "12px" }}>Financial modeling and reporting</li>
                  <li style={{ fontSize: "12px" }}>Data mining and analysis</li>
                  <li style={{ fontSize: "12px" }}>Financial accounting</li>
                  <li style={{ fontSize: "12px" }}>Business valuation</li>
                  <li style={{ fontSize: "12px" }}>Advanced SAS proficiency</li>
                </ul>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Button onClick={toPDF}>Export As PDF</Button>
    </div>
  );
}
