import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/material";

export const Navbar = () => {
  return (
    <AppBar>
      <Toolbar sx={{ backgroundColor: "black" }}>
        <IconButton sx={{ mr: 2, color: "#fff" }}>
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Tienda
        </Typography>
        <Box>
          <Button color="#00000">Inicio</Button>
          <Button color="#000">Acerca de</Button>
          <Button color="#000">Contacto</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
