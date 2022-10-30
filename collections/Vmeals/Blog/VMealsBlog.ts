import { CollectionConfig } from 'payload/types';

const VMealsBlog: CollectionConfig = {
  slug: 'VMealsBlog',
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
        name: 'VMealsBlogEnableDisables',
        type: 'select',
        label: 'VMeals Blog Enable / Disables',
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
      name: 'VMealsBlogBreadCrumb',
      type: 'text',
      label: 'VMeals Blog Bread Crumb',
      admin: {
        readOnly: false
      },
      required: true
    },
    {
      name: 'VMealsBlogBreadCrumbImage',
      label: 'VMeals Blog Bread Crumb Image',
      type: 'upload',
      relationTo: 'media',
      admin: {
          readOnly: false,
      },
      required: false,
    },
    {
      name: 'VMealBlogHeading',
      type: 'text',
      label: 'VMeal Blog Heading',
      admin: {
        readOnly: false
      },
      required: true
    },
    {
      name : 'VMealsCategoriesBlogList',
      type: 'array',
      label: 'VMealsBlogList',
      minRows: 0,
      maxRows: 5,
      labels: {
        singular: 'Slide',
        plural: 'Slides',
      },
      fields: [
        {
            name: 'VMealBlogCategoriesTitle',
            type: 'text',
            label: 'VMeals Blog Categories Title',
            admin: {
                readOnly: false
            },
            required: true
        },
        {
          name : 'VMealsBlogList',
          type: 'array',
          label: 'VMealsBlogList',
          minRows: 0,
          maxRows: 5,
          labels: {
            singular: 'Slide',
            plural: 'Slides',
          },
          fields: [
            {
              name: 'VMealsBlogImage',
              label: 'VMeals Blog Image',
              type: 'upload',
              relationTo: 'media',
              admin: {
                  readOnly: false,
              },
              required: false,
            },
            {
              name: 'VMealBlogListCategoriesTitle',
              type: 'text',
              label: 'VMeals Blog List Categories Title',
              admin: {
                  readOnly: false
              },
              required: true
            },
            {
              name: 'VMealsBlogTitle',
              type: 'text',
              label: 'VMeals Blog Title',
              admin: {
                readOnly: false
              },
              required: true
            },
            {
              name: 'VMealsBlogDescription',
              type: 'textarea',
              label: 'VMeals Blog Description',
              admin: {
                readOnly: false
              },
              required: true
            },
            {
              name: 'VMealsBlogTitleTwo',
              type: 'text',
              label: 'VMeals Blog Title Two',
              admin: {
                readOnly: false
              },
              required: true
            },
            {
              name: 'VMealsBlogDescriptionTwo',
              type: 'textarea',
              label: 'VMeals Blog Description Two',
              admin: {
                readOnly: false
              },
              required: true
            },
            {
              name: 'VMealsBlogDate',
              type: 'date',
              label: 'VMeals Blog Date',
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

export default VMealsBlog;