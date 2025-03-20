import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import home from "../src/assets/home.png";
import john from "../src/assets/john.png";
import { useMediaQuery, useTheme } from "@mui/material";

const stories = [
  {
    title: "John's Story",
    image: john,
    description:
      "Nunc at risus quis mauris quam quisque. Orci eu vulputate odio nisl lacus.",
  },
  {
    title: "The Journey",
    image: home,
    description:
      "Nunc at risus quis mauris quam quisque. Orci eu vulputate odio nisl lacus.",
  },
  {
    title: "Catch Day",
    image: home,
    description:
      "Nunc at risus quis mauris quam quisque. Orci eu vulputate odio nisl lacus.",
  },
  {
    title: "Trout Tales",
    image: home,
    description:
      "Nunc at risus quis mauris quam quisque. Orci eu vulputate odio nisl lacus.",
  },
];

const Memberstories = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Container sx={{ my: 5 }}>
      <Typography sx={webstyle.headingtext} gutterBottom>
        Member Stories
      </Typography>
      <Grid container spacing={4}>
        {isSmallScreen ? (
          <>
            {stories.map((story, index) => (
              <Grid item xs={12} sm={12} md={6} lg={6} key={index}>
                <Box style={{ display: "flex", flexDirection: "column" }}>
                  <Typography sx={webstyle.title}>{story.title}</Typography>
                  <Card sx={webstyle.mobilescreen}>
                    <Box
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "12px",
                      }}
                    >
                      <CardMedia
                        component="img"
                        sx={{ width: 100, height: 100 }}
                        image={story.image}
                        alt={story.title}
                      />
                      <Typography sx={webstyle.decription}>
                        {story.description}
                      </Typography>
                    </Box>
                    <Button sx={{ ...webstyle.readmorebutton, width: "100px" }}>
                      Read more
                    </Button>
                    <CardContent></CardContent>
                  </Card>
                </Box>
              </Grid>
            ))}
          </>
        ) : (
          <>
            {stories.map((story, index) => (
              <Grid item xs={12} sm={12} md={6} lg={6} key={index}>
                <Card sx={webstyle.webscreen}>
                  <CardMedia
                    component="img"
                    sx={{ width: 200, height: 200 }}
                    image={story.image}
                    alt={story.title}
                  />
                  <CardContent>
                    <Typography sx={webstyle.title}>{story.title}</Typography>
                    <Typography sx={webstyle.decription}>
                      {story.description}
                    </Typography>
                    <Button size="small" sx={webstyle.readmorebutton}>
                      Read more
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </>
        )}
      </Grid>
    </Container>
  );
};

const webstyle = {
  headingtext: {
    fontWeight: 600,
    color: "#1C1812",
    fontFamily: "Inter",
    fontSize: "48px",
  },

  readmorebutton: {
    mt: 1,
    fontWeight: 400,
    color: "#1C1812",
    fontFamily: "Inter",
    fontSize: "14px",
    background: "#DFDEDD",
    borderRadius: "4px",
    textTransform: "Capitalize",
  },

  decription: {
    fontWeight: 400,
    color: "#65625E",
    fontFamily: "Inter",
    fontSize: "14px",
  },

  title: {
    fontWeight: 400,
    color: "#000000",
    fontFamily: "Gluten",
    fontSize: "32px",
  },

  mobilescreen: {
    display: "flex",
    flexDirection: "column",
    boxShadow: "none",
    borderBottom: { xs: "1px solid #ddd", lg: "none" },
    borderLeft: "none",
    borderRight: "none",
    borderTop: "none",
    justifyContent: "flex-start",
    alignItems: "baseline",
    gap: "15px",
  },

  webscreen: {
    display: "flex",
    alignItems: "center",
    boxShadow: { lg: "none" },
    borderBottom: { xs: "1px solid #ddd", lg: "none" },
    borderLeft: "none",
    borderRight: "none",
    borderTop: "none",
  },
};

export default Memberstories;
