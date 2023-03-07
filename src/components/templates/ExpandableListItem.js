import { useState } from "react";
import { Collapse, ListItemButton,  ListItemText } from "@mui/material";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

// -------------------------------------------------------------------------

export default function ExpandableListItem({ item }) {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(pv => !pv);
  };

  return(
    <>
      <ListItemButton onClick={toggleOpen}>
        <ListItemText primary={item.title} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {item.content}
      </Collapse>
    </>
  );
};
