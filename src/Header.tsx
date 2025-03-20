import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import logo from "../src/assets/logo.png";
const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = (event: any) => setAnchorEl(event.currentTarget);
  const closeMenu = () => setAnchorEl(null);

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "white", boxShadow: 1, paddingX: 2 }}
    >
      <Toolbar sx={webstyle.toolbar}>
        <Box sx={webstyle.logoimage}>
          <img src={logo} alt="Logo" style={{ height: 40, marginRight: 10 }} />
          <Typography
            variant="h6"
            sx={{
              fontWeight: 400,
              color: "#514432",
              fontFamily: "Gluten",
              fontSize: "20px",
            }}
          >
            Central Texas Fly Fishing
          </Typography>
        </Box>
        {isMobile ? (
          <>
            <IconButton edge="end" color="inherit" onClick={openMenu}>
              <MenuIcon sx={{ color: "black" }} />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={closeMenu}
            >
              <MenuItem onClick={closeMenu} sx={webstyle.textlink}>
                Home
              </MenuItem>
              <MenuItem onClick={closeMenu} sx={webstyle.textlink}>
                About us
              </MenuItem>
              <MenuItem onClick={closeMenu} sx={webstyle.textlink}>
                Services
              </MenuItem>
              <MenuItem onClick={closeMenu} sx={webstyle.textlink}>
                Contact
              </MenuItem>
            </Menu>
          </>
        ) : (
          <Box sx={{ display: "flex", gap: 3 }}>
            <Typography sx={webstyle.textlink}>Home</Typography>
            <Typography sx={webstyle.textlink}>About us</Typography>
            <Typography sx={webstyle.textlink}>Services</Typography>
            <Typography sx={webstyle.textlink}>Contact</Typography>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

const webstyle = {
  textlink: {
    fontWeight: 400,
    color: "#1C1812",
    fontFamily: "Inter",
    fontSize: "16px",
  },

  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logoimage: {
    display: "flex",
    alignItems: "center",
  },
};
export default Header;
