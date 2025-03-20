import {
  Box,
  Container,
  Typography,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import home from "../src/assets/home.png";
import fishing from "../src/assets/fishing.png";
import Memberstories from "./Memborstroies";
import { useMediaQuery, useTheme } from "@mui/material";
import mobile from "../src/assets/mobile.png";

const Maincomponent = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Box sx={{ py: 5 }}>
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "row" },
            alignItems: "center",
            gap: 4,
          }}
        >
          <Box sx={{ flex: 1 }}>
            <span style={webstyle.contentheading}>Central Texas</span>
            <Typography style={webstyle.contentheading}>Fly Fishing</Typography>
            <Typography sx={webstyle.paratext}>
              At lacus vitae nulla sagittis scelerisque nisl. Pellentesque dui
              cursus vestibulum, facilisi ac, sed faucibus.
            </Typography>
            <Button sx={webstyle.startbutton}>Get started</Button>
          </Box>
          <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <img
              src={home}
              alt="Fishing"
              style={{ width: "100%", maxWidth: "400px", borderRadius: 8 }}
            />
          </Box>
        </Container>
      </Box>

      <Box sx={{ backgroundColor: "#F1ECE1", py: 5 }}>
        <Container maxWidth="lg">
          <Typography
            sx={webstyle.featuretext}
            gutterBottom
          >
            Featured options
          </Typography>

          {isSmallScreen ? (
            <Box
              style={webstyle.smallscreencontainer}
            >
              <Box
                sx={{
                  background: "#F1ECE1",
                  p: 2,
                  borderRadius: 2,
                  backgroundImage: `url(${mobile})`,
                }}
              >
                <Typography sx={webstyle.contentinsidetext}>
                  Explore Fly Fishing
                </Typography>
                <Typography sx={webstyle.paratext}>
                  Proin nibh nisi condimentum id venenatis a condimentum vitae
                  sapien. Tellus in metus vulputate eu.
                </Typography>
                <Button sx={webstyle.learnmorebutton}>Learn more</Button>
              </Box>
              <Box
                sx={{
                  background: "#F1ECE1",
                  p: 2,
                  borderRadius: 2,
                  backgroundImage: `url(${mobile})`,
                }}
              >
                <Typography sx={webstyle.contentinsidetext}>
                  Fly Fishing Experiences
                </Typography>
                <Typography sx={webstyle.paratext}>
                  Proin nibh nisi condimentum id venenatis a condimentum vitae
                  sapien. Tellus in metus vulputate eu.
                </Typography>
                <Button sx={webstyle.learnmorebutton}>Learn more</Button>
              </Box>
              <Box
                sx={{
                  background: "#F1ECE1",
                  p: 2,
                  borderRadius: 2,
                  backgroundImage: `url(${mobile})`,
                }}
              >
                <Typography sx={webstyle.contentinsidetext}>
                  Gear Up and Catch More
                </Typography>
                <Typography sx={webstyle.paratext}>
                  Proin nibh nisi condimentum id venenatis a condimentum vitae
                  sapien. Tellus in metus vulputate eu.
                </Typography>
                <Button sx={webstyle.learnmorebutton}>Learn more</Button>
              </Box>
            </Box>
          ) : (
            <>
              <Accordion sx={{ background: "#F1ECE1" }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      color: "#1C1812",
                      fontFamily: "Inter",
                      fontSize: "20px",
                    }}
                  >
                    Explore Fly Fishing
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    gap: 2,
                  }}
                >
                  <img
                    src={fishing}
                    alt="Fishing"
                    style={{ borderRadius: 8 }}
                  />
                  <Box>
                    <Typography sx={webstyle.contentinsidetext}>
                      Explore Fly Fishing
                    </Typography>
                    <Typography sx={webstyle.paratext}>
                      Proin nibh nisi condimentum id venenatis a condimentum
                      vitae sapien. Tellus in metus vulputate eu.
                    </Typography>
                    <Button variant="contained" sx={webstyle.learnmorebutton}>
                      Learn more
                    </Button>
                  </Box>
                </AccordionDetails>
              </Accordion>

              <Accordion sx={{ background: "#F1ECE1" }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      color: "#1C1812",
                      fontFamily: "Inter",
                      fontSize: "20px",
                    }}
                  >
                    Fly Fishing Experiences
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    gap: 2,
                  }}
                >
                  <img
                    src={fishing}
                    alt="Fishing"
                    style={{ borderRadius: 8 }}
                  />
                  <Box>
                    <Typography sx={webstyle.contentinsidetext}>
                      Explore Fly Fishing
                    </Typography>
                    <Typography sx={webstyle.paratext}>
                      Proin nibh nisi condimentum id venenatis a condimentum
                      vitae sapien. Tellus in metus vulputate eu.
                    </Typography>
                    <Button variant="contained" sx={webstyle.learnmorebutton}>
                      Learn more
                    </Button>
                  </Box>
                </AccordionDetails>
              </Accordion>

              <Accordion sx={{ background: "#F1ECE1" }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      color: "#1C1812",
                      fontFamily: "Inter",
                      fontSize: "20px",
                    }}
                  >
                    Gear Up and Catch More
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    gap: 2,
                  }}
                >
                  <img
                    src={fishing}
                    alt="Fishing"
                    style={{ borderRadius: 8 }}
                  />
                  <Box>
                    <Typography sx={webstyle.contentinsidetext}>
                      Explore Fly Fishing
                    </Typography>
                    <Typography sx={webstyle.paratext}>
                      Proin nibh nisi condimentum id venenatis a condimentum
                      vitae sapien. Tellus in metus vulputate eu.
                    </Typography>
                    <Button variant="contained" sx={webstyle.learnmorebutton}>
                      Learn more
                    </Button>
                  </Box>
                </AccordionDetails>
              </Accordion>
            </>
          )}
        </Container>
      </Box>
      <Memberstories />
    </>
  );
};

const webstyle = {
  contentheading: {
    fontWeight: 600,
    color: "#1C1812",
    fontFamily: "Inter",
    fontSize: "56px",
  },

  contentinsidetext: {
    fontWeight: 600,
    color: "#1C1812",
    fontFamily: "Inter",
    fontSize: "32px",
  },

  learnmorebutton: {
    backgroundColor: "#DFDEDD",
    fontWeight: 400,
    color: "#1C1812",
    fontFamily: "Inter",
    fontSize: "14px",
    mt: 1,
    textTransform:"capitalize"
  },

  paratext: {
    fontWeight: 400,
    color: "#65625E",
    fontFamily: "Inter",
    fontSize: "20px",
  },

  startbutton: {
    backgroundColor: "#514432",
    borderRadius: "4px",
    fontWeight: 400,
    color: "#F7F7F6",
    fontFamily: "Inter",
    fontSize: "16px",
    marginTop:"5px",
    textTransform:"capitalize"
  },

  featuretext:{
    fontWeight: 600,
    color: "#1C1812",
    fontFamily: "Inter",
    fontSize: "48px",
  },

  smallscreencontainer:{
    display: "flex", 
    flexDirection: "column" as "column", 
    gap: "30px"
  }
};
export default Maincomponent;
