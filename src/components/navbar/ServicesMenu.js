import { Menu, MenuItem, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { PATH_SERVICES } from "src/routes/path";

// -------------------------------------------------------------------------

const MenuItemStyled = styled(MenuItem)(({ theme }) => ({
  paddingRight: theme.spacing(10),
  paddingLeft: theme.spacing(2)
}))

// -------------------------------------------------------------------------

export default function ServicesMenu({ open, anchorEl, setAnchorEl, handleClose }) {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    setAnchorEl(null);
  };
  
  return(
    <Menu
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      MenuListProps={{ onMouseLeave: handleClose }}
    >
      <MenuItemStyled onClick={() => handleNavigate(PATH_SERVICES.accounting)}>Contabilidad</MenuItemStyled>
      <MenuItemStyled>Auditorias</MenuItemStyled>
    </Menu>
  );
};
