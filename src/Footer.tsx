import { Box, Container, Typography, IconButton, styled } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import logo from "../src/assets/logo.png";

const Logobox = styled(Box)({
  display: "none",
  "@media (max-width: 600px)": {
    display: "block",
    width: "78px",
    height: "40px",
  },
});

const Footercontent = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  alignItems: "center",
  "@media (max-width: 600px)": {
    flexDirection: "column",
    gap: "12px",
  },
});

const Footer = () => {
  return (
    <Box component="footer" sx={webstyle.footercomp}>
      <Container maxWidth="lg" sx={webstyle.footercontainer}>
        <Footercontent>
          <Logobox>
            <img src={logo} />
          </Logobox>
          <Box sx={{ display: "flex", gap: 3, mb: 1 }}>
            <Typography style={webstyle.footertext}>FAQ</Typography>
            <Typography style={webstyle.footertext}>Privacy</Typography>
            <Typography style={webstyle.footertext}>Support</Typography>
            <Typography style={webstyle.footertext}>Contact</Typography>
          </Box>
          <Box>
            <IconButton sx={{ color: "#d1c7bf" }}>
              <FacebookIcon />
            </IconButton>
            <IconButton sx={{ color: "#d1c7bf" }}>
              <InstagramIcon />
            </IconButton>
            <IconButton sx={{ color: "#d1c7bf" }}>
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Footercontent>
        <Box>
          <Typography style={webstyle.footerpolicy}>
            © 2024 Central Texas Fly Fishing. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

const webstyle = {
  footercomp: {
    backgroundColor: "#1a1411",
    color: "#d1c7bf",
    py: 3,
    mt: 4,
  },

  footercontainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  footertext: {
    fontWeight: 400,
    color: "#F7F7F6",
    fontFamily: "Inter",
    fontSize: "16px",
  },

  footerpolicy: {
    fontWeight: 400,
    color: "#AEADAA",
    fontFamily: "Inter",
    fontSize: "12px",
  },
};

export default Footer;
