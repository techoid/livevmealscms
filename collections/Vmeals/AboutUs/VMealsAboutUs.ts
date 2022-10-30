import { CollectionConfig } from 'payload/types';

const VMealsAboutUs: CollectionConfig = {
  slug: 'VMealsAboutUs',
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
        name: 'VMealsAboutUsEnableDisables',
        type: 'select',
        label: 'VMeals AboutUs Enable / Disables',
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
      name: 'VMealsAboutUsBreadCrumb',
      type: 'text',
      label: 'VMeals AboutUs Bread Crumb',
      admin: {
        readOnly: false
      },
      required: true
    },
    {
      name: 'VMealsAboutUsBreadCrumbImage',
      label: 'VMeals AboutUs Bread Crumb Image',
      type: 'upload',
      relationTo: 'media',
      admin: {
          readOnly: false,
      },
      required: false,
    },
    {
      name: 'VMealsAboutUsHeading',
      type: 'text',
      label: 'VMeals AboutUs Heading',
      admin: {
        readOnly: false
      },
      required: true
    },
    {
      name: 'VMealsAboutUsTitle',
      type: 'text',
      label: 'VMeals AboutUs Title',
      admin: {
        readOnly: false
      },
      required: true
    },
    {
      name: 'VMealsAboutUsDescription',
      type: 'textarea',
      label: 'VMeals AboutUs Description',
      admin: {
        readOnly: false
      },
      required: true
    },
    {
      name: 'VMealsAboutUsImage',
      label: 'VMeals AboutUs Image',
      type: 'upload',
      relationTo: 'media',
      admin: {
          readOnly: false,
      },
      required: false,
    },
    {
      name: 'VMealsAboutUsBackgroundImage',
      label: 'VMeals AboutUs Background Image',
      type: 'upload',
      relationTo: 'media',
      admin: {
          readOnly: false,
      },
      required: false,
    },
    {
      name : 'VMealsAboutUsList',
      type: 'array',
      label: 'VMeals AboutUs List',
      minRows: 0,
      maxRows: 4,
      labels: {
        singular: 'Slide',
        plural: 'Slides',
      },
      fields: [
        {
          name: 'VMealsAboutUsTitleItem',
          type: 'text',
          label: 'VMeals About Us Title Item',
          admin: {
            readOnly: false
          },
          required: true
        },
        {
          name: 'VMealsAboutUsDescriptionItem',
          type: 'textarea',
          label: 'VMeals About Us Description Item',
          admin: {
            readOnly: false
          },
          required: true
        }
      ]
    }
  ]
};

export default VMealsAboutUs;