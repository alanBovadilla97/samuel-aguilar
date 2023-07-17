import { ListItemButton, ListItemText, Stack, styled, Avatar } from "@mui/material";
import { useState } from "react";

// -------------------------------------------------------------------------

const AvatarStyled = styled(Avatar)(({ theme }) => ({
  width: 35,
  height: 35,
  border: `2px solid ${theme.palette.grey[700]}`,
  color: theme.palette.grey[800],
  '& > *' : {
    fontSize: 17
  }
}));

const ListItemTextStyled = styled(ListItemText)(({ theme }) => ({
  textAlign: 'right',
  color: theme.palette.info.dark
}))

// -------------------------------------------------------------------------


export default function StaticListItem({ item }) {
  const [isOver, setIsOver] = useState(false);

  const handleMouseEnter = () => {
    setIsOver(true);
  };

  const handleMouseLeave = () => {
    setIsOver(false);
  };

  return(
    <ListItemButton 
      onClick={item.action} 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      <Stack direction="row" alignItems="center" gap={1.5} sx={{ width: '100%' }}>
        <AvatarStyled>{item.icon}</AvatarStyled>
        <ListItemText primary={item.title} />
        {isOver && <ListItemTextStyled primary="Leer más" />}
      </Stack>
    </ListItemButton>
  );
};
