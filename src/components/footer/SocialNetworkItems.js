import { Avatar, styled, Tooltip } from "@mui/material";

// -------------------------------------------------------------------------

const AvatarStyled = styled(Avatar)(({ theme }) => ({
  background: 'transparent',
  border: '2px solid',
  cursor: 'pointer'
}));

// -------------------------------------------------------------------------

export default function SocialNetworkItem({ sns }) {
  const handleOpenSns = () => {
    if (sns.url) {
      window.open(sns.url, '_blank');
    }
  };

  return(
    <Tooltip title={sns.name} placement="top" arrow>
      <AvatarStyled onClick={handleOpenSns}>
        {sns.icon}
      </AvatarStyled>
    </Tooltip>
  );
};
