import { List, ListSubheader } from "@mui/material";
import ExpandableListItem from "./ExpandableListItem";

export default function ExpandableList({ items, title }) {
  return(
    <List
      component="nav"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          {title}
        </ListSubheader>
      }
    >
      {items.map(item => (
        <ExpandableListItem item={item} />
      ))}
    </List>
  );
};