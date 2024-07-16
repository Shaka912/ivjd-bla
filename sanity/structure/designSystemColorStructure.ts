import { ListItemBuilder } from "sanity/structure";
import defineStructure from "../utils/defineStructure";
import { ColorWheelIcon } from "@sanity/icons";
export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title("Design System Colors")
    .schemaType("designSystemColors")
    .icon(ColorWheelIcon)
    .child(S.documentTypeList("designSystemColors"))
);
