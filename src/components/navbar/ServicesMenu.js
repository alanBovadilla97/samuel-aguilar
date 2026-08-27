import { Menu, MenuItem, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { PATH_SERVICES } from "src/routes/path";

// -------------------------------------------------------------------------

const MenuItemStyled = styled(MenuItem)(({ theme }) => ({
  paddingRight: theme.spacing(10),
  paddingLeft: theme.spacing(2)
}));

const SERVICES_MENU_ITEMS = [
  { labelKey: 'navbar.servicesMenu.index', path: PATH_SERVICES.index },
  { labelKey: 'services.items.accounting.title', path: PATH_SERVICES.accounting },
  { labelKey: 'services.items.auditing.title' },
];

// -------------------------------------------------------------------------

export default function ServicesMenu({ open, anchorEl, setAnchorEl, handleClose, setMobileOpen }) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleNavigate = (path) => {
    if (path) {
      navigate(path);
    }

    setAnchorEl(null);
    setMobileOpen();
  };
  
  return(
    <Menu
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      MenuListProps={{ onMouseLeave: handleClose }}
    >
      {SERVICES_MENU_ITEMS.map(({ labelKey, path }) => (
        <MenuItemStyled key={labelKey} onClick={() => handleNavigate(path)}>
          {t(labelKey)}
        </MenuItemStyled>
      ))}
    </Menu>
  );
};
