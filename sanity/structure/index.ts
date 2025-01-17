import { ListItemBuilder, StructureResolver } from "sanity/structure";
import collectionStructure from "./collectionStructure";
import designSystemColors from "./designSystemColorStructure";
/**
 * Structure overrides
 *
 * Sanity Studio automatically lists document types out of the box.
 * With this custom structure we achieve things like showing the `home`
 * and `settings` document types as singletons, and grouping product details
 * and variants for easy editorial access.
 *
 * You can customize this even further as your schema types progress.
 * To learn more about structure builder, visit our docs:
 * https://www.sanity.io/docs/overview-structure-builder
 */

// If you add document types to structure manually, you can add them to this function to prevent duplicates in the root pane
const hiddenDocTypes = (listItem: ListItemBuilder) => {
  const id = listItem.getId();

  if (!id) {
    return false;
  }

  return !["designSystemColors", "collections"].includes(id);
};

export const structure: StructureResolver = (S, context) =>
  S.list()
    .title("Content")
    .items([
      designSystemColors(S, context),
      S.divider(),
      collectionStructure(S, context),
      S.divider(),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);
