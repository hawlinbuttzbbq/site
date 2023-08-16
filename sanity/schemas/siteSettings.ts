// schemas/siteSettings.js or ts
export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Site Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Site Description',
      type: 'text',
    },
    {
      name: 'address1',
      title: 'Address line 1',
      type: 'string',
    },
    {
      name: 'address2',
      title: 'Address line 2',
      type: 'string',
    },
    {
      name: 'address3',
      title: 'Address line 3',
      type: 'string',
    },
    {
      name: 'address4',
      title: 'Address line 4',
      type: 'string',
    },
    {
      name: 'chatWidget',
      title: 'Chat javascript code',
      type: 'text',
    },
    {
      name: 'socialFacebook',
      title: 'Facebook page or group link',
      description: 'Add the url link to your page. Example www.facebook.com/halwinbbbq',
      type: 'string',
    },
    {
      name: 'socialInstagram',
      title: 'Instagram link',
      description: 'Add the url link to your page.',
      type: 'string',
    },
    {
      name: 'socialYoutube',
      title: 'Youtube link',
      description: 'Add the url link to your channel.',
      type: 'string',
    },
    {
      name: 'socialX',
      title: 'X (AKA Twitter)',
      description: 'Add the url link to your page.',
      type: 'string',
    },
    {
      name: 'logoWeb',
      title: 'Logo for website',
      description: 'use any image file. (For best results use .svg)',
      type: 'image',
    },
    {
      name: 'logoMobile',
      title: 'Logo for mobile devices',
      description: 'use any image file. (For best results use .svg)',
      type: 'image',
    },
    {
      name: 'favicon',
      title: 'Favicon [16px x 16px]',
      description: 'This is the icon that shows on browser tabs',
      type: 'image',
    },
  ],
}
