import React from "react";
import { getSingleCollection } from "@/sanity/api/sanity.queries";
import { Locale } from "@/i18n";
import CollectionPage from "@/components/CollectionPage";

interface Props {
  params: {
    slug: string;
    lang: Locale;
  };
}

const ProjectDetail = async ({ params }: Props) => {
  const lang = params.lang;
  const collection = await getSingleCollection(params.slug, lang);
  return <CollectionPage lang={lang} collection={collection} />;
};

export default ProjectDetail;
