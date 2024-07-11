import { groq } from "next-sanity";
import { client } from "../lib/client";
import { Collection, Page } from "./type";

export async function getPage(slug: string): Promise<Page> {
  return await client.fetch(
    groq`
    *[_type == "page" && slug.current == $slug][0] {
      ...,
       sections[] {
        ...,
        cards[] { ... },
        header { ... },
        heroCarouselContent { ... },
        main { ... },
        collectionItems[] { ... },
        Hours { ... },
        images[] { ... },
        // Include title specifically for homeCollections
        _type == 'homeCollections' => {
          title,
          collectionItems[] { ... }
        }
      },
      "slug": slug.current
    }
    `,
    { slug }
  );
}

export async function getSingleCollection(slug: string): Promise<Collection> {
  return await client.fetch(
    groq`
    *[_type == "collections" && slug.current == $slug][0] {
      title,
      "slug": slug.current,
      featuredImage,
      description,
      collection1R[] {
        ...,
        _type == 'homeHeroCard' => {
          // Specify the fields you need from homeHeroCard
          title,
          description,
          image,
          // Add other fields as needed
        }
      },
      featuredImage1 {
        // Specify the fields you need from homeHeroCard
        title,
        description,
        image,
        // Add other fields as needed
      },
      collection2R[] {
        ...,
        _type == 'homeHeroCard' => {
          // Specify the fields you need from homeHeroCard
          title,
          description,
          image,
          // Add other fields as needed
        }
      },
      "backgroundColor": backgroundColor->color.hex,
      "textColor": textColor->color.hex,
      _id,
      country,
      year,
      "nextProjectSlug": *[_type == "collections" && ^._createdAt < _createdAt] | order(_createdAt asc)[0].slug.current
    }
    `,
    { slug }
  );
}
