import { Stack } from "@mui/material";
import SocialNetworkItem from "./SocialNetworkItems";

export default function SocialNetworks({ items }) {
  return(
    <Stack alignItems="center" justifyContent="center" gap={2} direction='row' py={1}>
      {items.map(sns => (
        <SocialNetworkItem sns={sns} />
      ))}
    </Stack>
  );
};
