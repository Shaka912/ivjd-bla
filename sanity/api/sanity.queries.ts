import { groq } from "next-sanity";
import { client } from "../lib/client";
import { Collection, HeaderFooter, Page } from "./type";

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
          "collections": collectionsArray[]->{
           ...
            // Add any other fields you need from the collection document
          }
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
      logo,
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
       "nextProjectSlug": coalesce(
        *[_type == "collections" && ^._createdAt < _createdAt] | order(_createdAt asc)[0].slug.current,
        *[_type == "collections"] | order(_createdAt asc)[0].slug.current
      )
      
    }
    `,
    { slug }
  );
}

export async function getHeaderFooter(lang: string): Promise<HeaderFooter> {
  return await client.fetch(
    groq`
    *[_type == "header-footer" && language == $lang ][0] {
  ...,
    link {
    ...,
    internalLink->{_type,slug,title}
      
  },
}
    `,
    { lang }
  );
}
export async function getNavbar(lang: string): Promise<HeaderFooter> {
  return await client.fetch(
    groq`
    *[_type == "navbar" && language == $lang][0] {
  ...,
    link {
    ...,
    internalLink->{_type,slug,title}
      
  },
}
    `,
    { lang }
  );
}
