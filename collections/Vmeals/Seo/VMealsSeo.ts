import { CollectionConfig } from 'payload/types';

const VMealsSeo: CollectionConfig = {
  slug: 'VMealsSeo',
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
      name: 'VMealsSeoEnableDisables',
      type: 'select',
      label: 'VMeals Seo Enable / Disables',
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
      name : 'VMealsCategoriesSeoList',
      type: 'array',
      label: 'VMeals Categories Seo List',
      minRows: 0,
      maxRows: 5,
      labels: {
        singular: 'Slide',
        plural: 'Slides',
      },
      fields: [
        {
          name: 'VMealsCategoriesSeoBreadCrumb',
          type: 'text',
          label: 'VMeals Categories Seo Bread Crumb',
          admin: {
            readOnly: false
          },
          required: true
        },
        {
          name: 'VMealsCategoriesSeoBreadCrumbImage',
          label: 'VMeals Categories Seo Bread Crumb Image',
          type: 'upload',
          relationTo: 'media',
          admin: {
              readOnly: false,
          },
          required: false,
        },
        {
          name: 'VMealsSeoCategoriesTitle',
          type: 'text',
          label: 'VMeals Seo Categories Title',
          admin: {
            readOnly: false
          },
          required: true
        },
        {
          name : 'VMealsSeoList',
          type: 'array',
          label: 'VMealsSeoList',
          minRows: 0,
          maxRows: 3,
          labels: {
            singular: 'Slide',
            plural: 'Slides',
          },
          fields: [
            {
              name: 'VMealsSeoTitle',
              type: 'text',
              label: 'VMeals Seo Title',
              admin: {
                readOnly: false
              },
              required: true
            },
            {
              name: 'VMealsSeoDescription',
              type: 'textarea',
              label: 'VMeals Seo Description',
              admin: {
                readOnly: false
              },
              required: true
            },
            {
              name : 'VMealsTypeSeoList',
              type: 'array',
              label: 'VMealsTypeSeoList',
              minRows: 0,
              maxRows: 6,
              labels: {
                singular: 'Slide',
                plural: 'Slides',
              },
              fields: [
                {
                  name: 'VMealsSeoTitleTwo',
                  type: 'text',
                  label: 'VMeals Seo Title Two',
                  admin: {
                    readOnly: false
                  },
                  required: true
                },
                {
                  name: 'VMealsSeoDescriptionTwo',
                  type: 'textarea',
                  label: 'VMeals Seo Description Two',
                  admin: {
                    readOnly: false
                  },
                  required: true
                },
                {
                  name: 'VMealsSeoUploadFile',
                  type: 'upload',
                  label: 'VMeals Seo Upload File',
                  relationTo: 'media',
                  admin: {
                    readOnly: false
                  },
                  required: true
                },
                {
                  name: 'VMealsSeoColorButton',
                  type: 'text',
                  label: 'VMeals Seo Color Button',
                  admin: {
                    readOnly: false
                  },
                  required: true
                },
                {
                  name: 'VMealsSeoLearnMoreButtonText',
                  type: 'text',
                  label: 'VMeals Seo Learn More Button Text',
                  admin: {
                    readOnly: false
                  },
                  required: true
                },
                {
                  name: 'VMealsSeoSelectPositionText',
                  type: 'select',
                  label: 'VMeals Seo Select Position Text',
                  required: false,
                  options: [
                    {
                      label: 'Left',
                      value: 'left',
                    },
                    {
                      label: 'Right',
                      value: 'right',
                    }
                  ]
                }
              ]
            },
            {
              name: 'VMealsSeoDownTitleTitle',
              type: 'text',
              label: 'VMeals Seo Down Title Title',
              admin: {
                readOnly: false
              },
              required: true
            },
            {
              name: 'VMealsSeoDownDescription',
              type: 'text',
              label: 'VMeals Seo Down Description',
              admin: {
                readOnly: false
              },
              required: true
            },
            {
              name: 'VMealsSeoCategoriesButton',
              type: 'text',
              label: 'VMeals Seo Categories Button',
              admin: {
                readOnly: false
              },
              required: true
            },
            {
              name: 'VMealsSeoCategoriesButtonLinkURL',
              type: 'select',
              label: 'VMeals Seo Categories Button Link URL',
              required: false,
              options: [
                {
                  label: 'Home',
                  value: '/',
                },
                {
                    label: 'About Us',
                    value: 'AboutusPages',
                },
                {
                    label: 'On Plan',
                    value: 'OnPlanPages',
                },
                {
                    label: 'Blog',
                    value: 'BlogPages',
                },
                {
                    label: 'Contact Us',
                    value: 'ContactUsPages',
                },
                {
                    label: 'Faqs',
                    value: 'Faqspages',
                },
                {
                    label: 'Our Partners',
                    value: 'OurPartnersPages',
                },
                {
                    label: 'Seo',
                    value: 'SeoPages',
                },
                {
                    label: 'None',
                    value: '#',
                }
              ]
            },
          ]
        },
      ]
    }
  ]
};

export default VMealsSeo;