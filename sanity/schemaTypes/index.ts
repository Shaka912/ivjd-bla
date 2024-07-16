import { accordionGroupType } from "./objects/module/accordionGroupType";
import { accordionType } from "./objects/module/accordionType";
import { calloutType } from "./objects/module/calloutType";
import { callToActionType } from "./objects/module/callToActionType";
import { collectionGroupType } from "./objects/collection/collectionGroupType";
import { collectionLinksType } from "./objects/collection/collectionLinksType";
import { collectionReferenceType } from "./objects/module/collectionReferenceType";
import { collectionRuleType } from "./objects/shopify/collectionRuleType";
import { customProductOptionColorObjectType } from "./objects/customProductOption/customProductOptionColorObjectType";
import { customProductOptionColorType } from "./objects/customProductOption/customProductOptionColorType";
import { customProductOptionSizeObjectType } from "./objects/customProductOption/customProductOptionSizeObjectType";
import { customProductOptionSizeType } from "./objects/customProductOption/customProductOptionSizeType";
import { footerType } from "./objects/global/footerType";
import { gridItemType } from "./objects/module/gridItemType";
import { gridType } from "./objects/module/gridType";
import { heroType } from "./objects/module/heroType";
import { imageCallToActionType } from "./objects/module/imageCallToActionType";
import { imageFeaturesType } from "./objects/module/imageFeaturesType";
import { imageFeatureType } from "./objects/module/imageFeatureType";
import { imageWithProductHotspotsType } from "./objects/hotspot/imageWithProductHotspotsType";
import { instagramType } from "./objects/module/instagramType";
import { inventoryType } from "./objects/shopify/inventoryType";
import { linkEmailType } from "./objects/link/linkEmailType";
import { linkExternalType } from "./objects/link/linkExternalType";
import { linkInternalType } from "./objects/link/linkInternalType";
import { linkProductType } from "./objects/link/linkProductType";
import { menuLinksType } from "./objects/global/menuLinksType";
import { menuType } from "./objects/global/menuType";
import { notFoundPageType } from "./objects/global/notFoundPageType";
import { optionType } from "./objects/shopify/optionType";
import { placeholderStringType } from "./objects/shopify/placeholderStringType";
import { priceRangeType } from "./objects/shopify/priceRangeType";
import { productFeaturesType } from "./objects/module/productFeaturesType";
import { productHotspotsType } from "./objects/hotspot/productHotspotsType";
import { productReferenceType } from "./objects/module/productReferenceType";
import { productWithVariantType } from "./objects/shopify/productWithVariantType";
import { proxyStringType } from "./objects/shopify/proxyStringType";
import { seoType } from "./objects/seoType";
import { shopifyCollectionType } from "./objects/shopify/shopifyCollectionType";
import { shopifyProductType } from "./objects/shopify/shopifyProductType";
import { shopifyProductVariantType } from "./objects/shopify/shopifyProductVariantType";
import { spotType } from "./objects/hotspot/spotType";
import designSystemColors from "./documents/designSyestemColor";
// Objects used as annotations must be imported first
const annotations = [
  linkEmailType,
  linkExternalType,
  linkInternalType,
  linkProductType,
];

const objects = [
  // accordionGroupType,
  // accordionType,
  // calloutType,
  // callToActionType,
  // collectionGroupType,
  // collectionLinksType,
  // collectionReferenceType,
  // collectionRuleType,
  // customProductOptionColorObjectType,
  // customProductOptionColorType,
  // customProductOptionSizeObjectType,
  // customProductOptionSizeType,
  // footerType,
  // gridItemType,
  // gridType,
  // heroType,
  // imageCallToActionType,
  // imageFeaturesType,
  // imageFeatureType,
  // imageWithProductHotspotsType,
  // instagramType,
  // inventoryType,
  // menuLinksType,
  // menuType,
  // notFoundPageType,
  // optionType,
  // placeholderStringType,
  // priceRangeType,
  // productFeaturesType,
  // productHotspotsType,
  // productReferenceType,
  // productWithVariantType,
  // proxyStringType,
  // seoType,
  // shopifyCollectionType,
  // shopifyProductType,
  // shopifyProductVariantType,
  // spotType,
  aboutHero,
  aboutInfoSection,
  designSystemColors,
  contactHero,
  homeHero,
  homeHeroCard,
  contactSection,
  homeResearchCentre,
  homeCollections,
  collectionItems,
  // projectSection,
  // shopSection,
  homebrands,
  homeVisit,
  // homeFollow,
  navLink,
  subLink,
];

import { portableTextType } from "./portableText/portableTextType";
import { portableTextSimpleType } from "./portableText/portableTextSimpleType";

const blocks = [portableTextType, portableTextSimpleType];

import { colorThemeType } from "./documents/colorTheme";
import { pageType } from "./documents/page";

// import Projects from "./documents/Projects";

// import designSyestemColor from "./documents/designSyestemColor";

import news from "./documents/news";

const documents = [
  // colorThemeType,
  pageType,
  Collections,
  // socialMedia,
  // Projects,
  // archive,
  // designSyestemColor,
  // news,
  // archiveSubCategory,
];

// import { homeType } from "./singletons/homeType";
import { settingsType } from "./singletons/settingsType";
import { headerFooterType } from "./singletons/headerFooterType";

import socialMedia from "./documents/socialMedia";
import { aboutHero } from "./objects/sections/aboutHero";
import { homeHero } from "./objects/sections/homeHero/homeHero";
import { homeHeroCard } from "./objects/sections/homeHero/homeHeroCard";
import { contactSection } from "./objects/sections/contactSection";
import { projectSection } from "./objects/sections/projectSection";
import { shopSection } from "./objects/sections/shopSection";
import { homebrands } from "./objects/sections/homeHero/homebrands";
import { homeFollow } from "./objects/sections/homeHero/homeFollow";
import { aboutInfoSection } from "./objects/sections/aboutInfoSection";
import { contactHero } from "./objects/sections/contactHero";
import { navLink } from "./objects/sections/headerFooter/navLink";
import { subLink } from "./objects/sections/headerFooter/subLink";
import { homeResearchCentre } from "./objects/sections/HomeResearchCentre";
import {
  collectionItems,
  homeCollections,
} from "./objects/sections/HomeCollections";
import { homeVisit } from "./objects/sections/homeVisit";
import Collections from "./documents/Collections";

const singletons = [settingsType, headerFooterType];

export const schemaTypes = [
  // ...annotations,
  headerFooterType,
  ...objects,
  // ...singletons,
  // ...blocks,
  ...documents,
];
