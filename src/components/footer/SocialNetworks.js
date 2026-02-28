import { Stack, Typography } from "@mui/material";
import SocialNetworkItem from "./SocialNetworkItems";

export default function SocialNetworks({ items }) {
  return(
    <Stack alignItems="center" justifyContent="center" gap={2} direction='column' py={1}>
      <Typography variant="body1" color="common.white">
        Síganos
      </Typography>
      <Stack direction='row' gap={2}>
        {items.map(sns => (
          <SocialNetworkItem sns={sns} />
        ))}
      </Stack>
    </Stack>
  );
};
