export interface Page {
  description: string;
  title: string;
  sections: { _type: string }[];
  slug: string;
}

export interface HomeHeroProps {
  _type: string;
  header: {
    logo: Image;
    title: string;
  };
  cards: {
    image: Image;
    description: string;
  }[];
  heroCarouselContent: {
    description: string;
    title: string;
    description1: string;
  };
}

export interface HomeResearchCentreProp {
  _type: string;
  main: {
    leftImage: Image;
    rightImage: Image;
    title: string;
  };
}

export interface HomeCollectionProp {
  _type: string;
  title: string;
  collectionItems: {
    image: Image;
    title: string;
    subTitle: string;
    link: {
      title: string;
      link: string;
    };
  }[];
}

export interface HomeVistingProp {
  _type: string;
  title: string;
  Hours: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
  };
  images: Image[];
  heading: string;
  subHeading: string;
}
export interface HomeHeroCard {
  description: string;
  image: Image;
}
export interface Collection {
  featuredImage: ImageAsset;
  _id: string;
  description: PortableTextBlock;
  title: string;
  slug: string;
  images: ImageAsset[];
  backgroundColor: string;
  textColor: string;
  nextProjectSlug: string;
  collection1R: HomeHeroCard[];
  featuredImage1: HomeHeroCard;
  collection2R: HomeHeroCard[];
}
