import { ListItem, ListItemIcon, ListItemText, styled } from "@mui/material";
import LabelImportantRoundedIcon from '@mui/icons-material/LabelImportantRounded';

// -------------------------------------------------------------------------

const ListItemIconStyled = styled(ListItemIcon)(({ theme }) => ({
  minWidth: 0,
  marginRight: theme.spacing(0.5),
}));

const LabelImportantRoundedIconStyled = styled(LabelImportantRoundedIcon)(() => ({
  fontSize: 15
}));

// -------------------------------------------------------------------------

export default function ServiceListItem({ text }) {
  return(
    <ListItem>
      <ListItemIconStyled>
        <LabelImportantRoundedIconStyled />
      </ListItemIconStyled>
      <ListItemText primary={text} />
    </ListItem>
  );
}