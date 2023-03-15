import { List } from "@mui/material";
import StaticListItem from "./StaticListItem";

// -------------------------------------------------------------------------

export default function StaticList({ items }) {
  return(
    <List
      component="nav"
    >
      {items.map(item => (
        <StaticListItem item={item} />
      ))}
    </List>
  );
};
