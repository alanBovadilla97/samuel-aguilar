import { Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import SocialNetworkItem from "./SocialNetworkItems";

export default function SocialNetworks({ items }) {
  const { t } = useTranslation();

  return(
    <Stack alignItems="center" justifyContent="center" gap={2} direction='column' py={1}>
      <Typography variant="body1" color="common.white">
        {t('footer.followUs')}
      </Typography>
      <Stack direction='row' gap={2}>
        {items.map(sns => (
          <SocialNetworkItem sns={sns} />
        ))}
      </Stack>
    </Stack>
  );
};
