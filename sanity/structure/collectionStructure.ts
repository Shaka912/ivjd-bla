import { ClipboardImageIcon } from "@sanity/icons";
import { ListItemBuilder } from "sanity/structure";
import defineStructure from "../utils/defineStructure";

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title("Collections")
    .icon(ClipboardImageIcon)
    .schemaType("collections")
    .child(S.documentTypeList("collections"))
);
