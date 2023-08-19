import { defineField } from "sanity";

// schemas/siteSettings.js or ts
export default {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Site Title",
      type: "string",
      description:
        "The title of your site. (Shown in search engines and browser tab)",
    },
    {
      name: "description",
      title: "Site Description",
      type: "text",
      description:
        "The text that show in the search engine. ([Good ideal to use this] Help increase your search ratings)",
    },
    {
      name: "address1",
      title: "Address line 1",
      type: "string",
    },
    {
      name: "address2",
      title: "Address line 2",
      type: "string",
    },
    {
      name: "address3",
      title: "Address line 3",
      type: "string",
    },
    {
      name: "address4",
      title: "Address line 4",
      type: "string",
    },
    // TODO: Add feature to embed chat widget
    // {
    //   name: "chatWidget",
    //   title: "Chat javascript code",
    //   type: "text",
    //   description:
    //     "Will open a chat window where your customers can chat with you live (provider: FreshChat)",
    // },
    {
      name: "showSocialChannels",
      title: "Do you want to show Social Media channels",
      type: "boolean",
    },
    defineField({
      name: "socialFacebook",
      title: "Facebook page or group link",
      description:
        "Add the url link to your page. Example www.facebook.com/halwinbbbq",
      type: "string",
      hidden: ({ document }) => !document?.showSocialChannels,
    }),
    defineField({
      name: "socialInstagram",
      title: "Instagram link",
      description: "Add the url link to your page.",
      type: "string",
      hidden: ({ document }) => !document?.showSocialChannels,
    }),
    defineField({
      name: "socialYoutube",
      title: "Youtube link",
      description: "Add the url link to your channel.",
      type: "string",
      hidden: ({ document }) => !document?.showSocialChannels,
    }),
    defineField({
      name: "socialX",
      title: "X (AKA Twitter)",
      description: "Add the url link to your page.",
      type: "string",
      hidden: ({ document }) => !document?.showSocialChannels,
    }),
    {
      name: "logoWeb",
      title: "Logo for website",
      description: "use any image file. (For best results use .svg)",
      type: "image",
    },
    {
      name: "logoMobile",
      title: "Logo for mobile devices",
      description: "use any image file. (For best results use .svg)",
      type: "image",
    },
    {
      name: "favicon",
      title: "Favicon [16px x 16px]",
      description: "This is the icon that shows on browser tabs",
      type: "image",
    },
    {
      name: "keywords",
      title: "Keywords",
      description: "A method to help search engines find you",
      type: "string",
    },
  ],
};
