import { CollectionConfig } from 'payload/types';

const VMealsFaqs: CollectionConfig = {
  slug: 'VMealsFaqs',
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
        name: 'VMealsFaqsEnableDisables',
        type: 'select',
        label: 'VMeals Faqs Enable / Disables',
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
      name: 'VMealsFaqsBreadCrumb',
      type: 'text',
      label: 'VMeals Faqs Bread Crumb',
      admin: {
        readOnly: false
      },
      required: true
    },
    {
      name: 'VMealsFaqsBreadCrumbImage',
      label: 'VMeals Faqs Bread Crumb Image',
      type: 'upload',
      relationTo: 'media',
      admin: {
          readOnly: false,
      },
      required: false,
    },
    {
      name: 'VMealsFaqsTitle',
      type: 'text',
      label: 'VMeals Faqs Title',
      admin: {
        readOnly: false
      },
      required: true
    },
    {
        name: 'VMealsFaqsImagesUpload',
        type: 'upload',
        label: 'VMeals Faqs Images Upload',
        relationTo: 'media',
        admin: {
          readOnly: false
        },
        required: true
    },
    {
      name : 'VMealsFaqsList',
      type: 'array',
      label: 'VMeals Faqs List',
      minRows: 0,
      maxRows: 5,
      labels: {
        singular: 'Slide',
        plural: 'Slides',
      },
      fields: [
        {
          name: 'VMealsFaqsText',
          type: 'text',
          label: 'VMeals Faqs Title',
          admin: {
            readOnly: false
          },
          required: true
        },
        {
            name : 'VMealsFaqsItemList',
            type: 'array',
            label: 'VMeals Faqs Item List',
            minRows: 0,
            maxRows: 5,
            labels: {
              singular: 'Slide',
              plural: 'Slides',
            },
            fields: [
                {
                    name: 'VMealsFaqsItemTitle',
                    type: 'text',
                    label: 'VMeals Faqs Item Title',
                    admin: {
                    readOnly: false
                    },
                    required: true
                },
                {
                    name: 'VMealsFaqsItemDescription',
                    type: 'textarea',
                    label: 'VMeals Faqs Item Description',
                    admin: {
                    readOnly: false
                    },
                    required: true
                }, 
            ]
        }
      ]
    }
  ]
};

export default VMealsFaqs;