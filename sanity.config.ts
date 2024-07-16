"use client";

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...tool]]\page.tsx` route
 */
import { schemaTypes } from "./sanity/schemaTypes";
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { imageHotspotArrayPlugin } from "sanity-plugin-hotspot-array";
import { media, mediaAssetSource } from "sanity-plugin-media";
import { customDocumentActions } from "./sanity/plugins/customDocumentActions";
// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";
import { structure } from "./sanity/structure";
import { colorInput } from "@sanity/color-input";
import { linkField } from "sanity-plugin-link-field";
import { documentInternationalization } from "@sanity/document-internationalization";
export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  // schema,
  plugins: [
    structureTool({ structure }),
    imageHotspotArrayPlugin(),
    customDocumentActions(),
    media(),
    colorInput(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    documentInternationalization({
      supportedLanguages: [
        { id: "es", title: "Spanish" },
        { id: "en", title: "English" },
        { id: "ar", title: "Arabic" },
      ],
      schemaTypes: ["page", "collections", "header-footer", "navbar"],
      languageField: `language`,
    }),
    linkField({
      linkableSchemaTypes: ["header-footer", "navbar"],
    }),
  ],
  schema: {
    types: schemaTypes,
  },
});
