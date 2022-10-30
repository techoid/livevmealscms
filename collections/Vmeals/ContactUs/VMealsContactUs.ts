import { CollectionConfig } from 'payload/types';

const VMealsContactUs: CollectionConfig = {
  slug: 'VMealsContactUs',
  admin: {
      useAsTitle: 'title',
  },
  access: {
        read: (): boolean => true,
        create: (): boolean => true,
        update: (): boolean => true,
  },
  fields: [
    {
        name: 'VMealsContactUsEnableDisables',
        type: 'select',
        label: 'VMeals ContactUs Enable / Disables',
        required: false,
        options: [
            {
                label: 'Enable',
                value: 'Enable',
            },
            {
                label: 'Disable',
                value: 'Disable',
            }
        ]
    },
    {
      name: 'VMealsContactUsBreadCrumb',
      type: 'text',
      label: 'VMeals ContactUs Bread Crumb',
      admin: {
        readOnly: false
      },
      required: true
    },
    {
      name: 'VMealsContactUsBreadCrumbImage',
      label: 'VMeals ContactUs Bread Crumb Image',
      type: 'upload',
      relationTo: 'media',
      admin: {
          readOnly: false,
      },
      required: false,
    },
    {
      name: 'VMealsContactUsTitle',
      type: 'text',
      label: 'VMeals Contact Us Title',
      admin: {
        readOnly: false
      },
      required: true
    },
    {
        name: 'VMealsContactUsText',
        type: 'text',
        label: 'VMeals Connect With Us Text',
        admin: {
            readOnly: false
        },
        required: true
    },
    {
        name: 'VMealsContactUsButtonText',
        type: 'text',
        label: 'VMeals Contact Us Button Text',
        admin: {
            readOnly: false
        },
        required: true
    },
    {
        name: 'VMealsContactUsButtonImagesIcon',
        type: 'select',
        label: 'VMeals Contact Us Button Images Icon Text',
        required: false,
        options: [
            {
                label: 'Whatsapp',
                value: 'fa-brands fa-whatsapp',
            },
            {
                label: 'Live Chat',
                value: 'fa-regular fa-book',
            }
        ]
    },
    {
        name: 'VMealsContactUsButtonLinkUrl',
        type: 'text',
        label: 'VMeals Contact Us Button Link Url',
        admin: {
            readOnly: false
        },
        required: true
    },
    {
        name: 'VMealsContactUsButtonTextTwo',
        type: 'text',
        label: 'VMeals Contact Us Button Text Two',
        admin: {
            readOnly: false
        },
        required: true
    },
    {
      name: 'VMealsContactUsButtonImagesIconTwo',
      type: 'select',
      label: 'VMeals ContactUs Button Images Icon Two',
      required: false,
      options: [
          {
              label: 'Whatsapp',
              value: 'fa-brands fa-whatsapp',
          },
          {
              label: 'Live Chat',
              value: 'fa-regular fa-book',
          }
      ]
  },
    {
        name: 'VMealsContactUsButtonLinkUrlTwo',
        type: 'text',
        label: 'VMeals Contact Us Button Link Url Two',
        admin: {
            readOnly: false
        },
        required: true
    },
    {
      name : 'VMealsContactUsList',
      type: 'array',
      label: 'VMeals Contact Us List',
      minRows: 0,
      maxRows: 5,
      labels: {
        singular: 'Slide',
        plural: 'Slides',
      },
      fields: [
        {
          name: 'VMealsContactUsImageIconUpload',
          type: 'select',
          label: 'VMeals Contact Us Image Icon Upload',
          required: false,
          options: [
              {
                  label: 'Location',
                  value: 'fa-solid fa-location-dot',
              },
              {
                  label: 'Mobile',
                  value: 'fa-solid fa-mobile-screen',
              },
              {
                  label: 'email',
                  value: 'fa-solid fa-envelope',
              },
              {
                  label: 'time',
                  value: 'fa-solid fa-clock',
              }
          ]
      },
        {
          name: 'VMealsContactUsListTitle',
          type: 'text',
          label: 'VMeals Contact Us List Title',
          admin: {
            readOnly: false
          },
          required: true
        },
        {
            name: 'VMealsContactUsLinkUrl',
            type: 'text',
            label: 'VMeals Contact Us Link Url',
            admin: {
              readOnly: false
            },
            required: true
        },
      ]
    }
  ]
};

export default VMealsContactUs;