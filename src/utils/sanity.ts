import { sanityClient } from "sanity:client";
import type { PortableTextBlock } from "@portabletext/types";
import type { ImageAsset, Slug } from "@sanity/types";
import groq from "groq";

export async function getPosts(): Promise<Post[]> {
  return await sanityClient.fetch(
    groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`
  );
}

export async function getPost(slug: string): Promise<Post> {
  return await sanityClient.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]`,
    {
      slug,
    }
  );
}

export async function getCategories(): Promise<Category[]> {
  return await sanityClient.fetch(
    groq`*[_type == "category" && defined(slug.current)] | order(_createdAt desc)`
  );
}

export async function getCategory(slug: string): Promise<Category> {
  return await sanityClient.fetch(
    groq`*[_type == "category" && slug.current == $slug][0]`,
    {
      slug,
    }
  );
}

export async function getPages(): Promise<Page[]> {
  return await sanityClient.fetch(
    groq`*[_type == "page" && defined(slug.current)] | order(_createdAt desc)`
  );
}

export async function getPage(slug: string): Promise<Page> {
  return await sanityClient.fetch(
    groq`
      *[_type == "page" && slug.current == $slug][0]{
        _id,
        title,
        slug,
        "sections": sections[]->{
          _type,
          _id,

          // Hero-Section
          headline,
          subheadline,
          "heroImageUrl": heroImage.asset->url,

          // Info-Section
          infoHeadline,
          infoBody,
          cta,
          "infoImageUrl": infoImage.asset->url,

          // Categorie-Section
          


  }
      }
    `,
    { slug }
  );
}

export async function getIndexPage(): Promise<IndexPageData> {
  return await sanityClient.fetch(
    groq`
      {
        "hero": *[_type == "hero" && slug.current == "hero-startseite"][0]{  
          _type,
          _id,
          headline,
          subheadline,
          "heroImage": heroImage.asset->url
        },

        "info": *[_type == "info" && slug.current == "info-startseite"][0]{  
          _type,
          _id,
          infoHeadline,
          infoBody,
          cta,
          "infoImage": infoImage.asset->url
        },

        
      }
    `
  );
}

export async function getHeader(): Promise<Header> {
  return await sanityClient.fetch(
    groq`*[_type == "header"][0]` // Fetch the first `header` document
  );
}

//fetch hero section data
export async function getHero(): Promise<Hero> {
  return await sanityClient.fetch(groq`*[_type == "hero"]`);
}

//fetch hero section data
export async function getInfo(): Promise<Info> {
  return await sanityClient.fetch(groq`*[_type == "info"][0]`);
}

// fetch category section data
export async function getService(): Promise<Service[]> {
  return await sanityClient.fetch(groq`*[_type == "service"]`);
}

export async function getSlider(): Promise<Slider> {
  return await sanityClient.fetch(groq`*[_type == "slider"][0]`);
}

export async function getFooter(): Promise<Footer[]> {
  return await sanityClient.fetch(groq`*[_type == "footer"]`);
}

export type Section = Hero | Info | Service | Category | Slider;

export interface Post {
  _type: "post";
  _createdAt: string;
  title?: string;
  slug: Slug;
  excerpt?: string;
  mainImage?: ImageAsset;
  postBody: PortableTextBlock[];
}

export interface Page {
  _type: "page";
  _createdAt: string;
  title?: string;
  slug: Slug;
  sections: Section[];
}

export interface Hero {
  _type: "hero";
  _id: string;
  headline?: string;
  subheadline?: string;
  headline2?: string;
  subheadline2?: string;
  headline3?: string;
  subheadline3?: string;
  heroImage?: ImageAsset;
  desktopHeroImage?: ImageAsset;
  mobileHeroImage?: ImageAsset;
}

export interface Info {
  _type: "info";
  _id: string;
  headline?: string;
  subheadline?: string;
  infoBody: PortableTextBlock[];
  cta?: string;
  infoImage?: ImageAsset;
}

export interface Teistimonial {
  _type: "testimonial";
  _id: string;
  title: string;
  kunde?: string;
  Firma?: string;
  rezession?: string;
  kundenImage?: ImageAsset;
}

export interface Category {
  _type: "category";
  _id: string;
  title: string;
  description?: string;
  imgUrl?: ImageAsset;
  categoryLogos?: ImageAsset[];
  slug: Slug;
  categoryBody: PortableTextBlock[];
  leistung: LeistungsKategorie[];
}

interface LeistungsKategorie {
  _key: string;
  titel: string;
  unterpunkte: string[];
}

export interface Service {
  _type: "service";
  _id: string; // ID hinzufügen
  title: string; // Titel hinzufügen
  description?: string;
  serviceImage?: ImageAsset;
}

export interface Slider {
  _type: "slider";
  _id: string;
  sliderImage?: ImageAsset;
  sliderImage2?: ImageAsset;
  sliderImage3?: ImageAsset;
  sliderImage4?: ImageAsset;
  sliderImage5?: ImageAsset;
}

export interface Header {
  _type: "header";
  marquee?: string;
}

export interface Footer {
  _id: string;
  headline: string;
  company: string[]; // Array von Strings
  headline2: string;
  info: string[]; // Array von Strings
  headline3: string;
  links: {
    title: string;
    url: string;
  }[]; // Array von Objekten
  headline4: string;
  socialImage: ImageAsset;
}

export interface IndexPageData {
  hero?: Hero;
  info?: Info;
}
