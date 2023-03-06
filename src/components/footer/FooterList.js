import { List, ListItem, ListItemIcon, ListItemText, ListSubheader, styled } from "@mui/material";

// -------------------------------------------------------------------------

const ListSubheaderStyled = styled(ListSubheader)(({ theme }) => ({
  backgroundColor: 'transparent',
  color: theme.palette.common.white,
  fontWeight: 600,
  fontSize: '1.1rem'
}));

const ListItemTextStyled = styled(ListItemText)(({ theme, hasAction }) => ({
  color: theme.palette.common.white,
  '& > *': {
    fontSize: '0.85rem !important',
    '&:hover': {
      ...(hasAction && {
        cursor: 'pointer',
        textDecoration: 'underline'
      })
    }
  }
}));

const ListItemIconStyled = styled(ListItemIcon)(({ theme }) => ({
  minWidth: 'auto',
  color: theme.palette.common.white,
  justifyContent: 'flex-end',
  marginRight: theme.spacing(1)
}))

// -------------------------------------------------------------------------

export default function FooterList({ items, title }) {
  return (
    <List subheader={<ListSubheaderStyled>{title}</ListSubheaderStyled>}>
      {items.map(item => (
        <ListItem onClick={item?.action}>
          {item?.icon && (
            <ListItemIconStyled>
              {item.icon}
            </ListItemIconStyled>
          )}
          <ListItemTextStyled primary={item.text} hasAction={!!item?.action} />
        </ListItem>
      ))}
    </List>
  );
};
