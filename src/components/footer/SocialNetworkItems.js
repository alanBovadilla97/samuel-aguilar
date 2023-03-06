import { Avatar, styled, Tooltip } from "@mui/material";

// -------------------------------------------------------------------------

const AvatarStyled = styled(Avatar)(({ theme }) => ({
  background: 'transparent',
  border: '2px solid',
  cursor: 'pointer'
}));

// -------------------------------------------------------------------------

export default function SocialNetworkItem({ sns }) {
  return(
    <Tooltip title={sns.name} placement="top" arrow>
      <AvatarStyled>
        {sns.icon}
      </AvatarStyled>
    </Tooltip>
  );
};
