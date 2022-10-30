import { CollectionConfig } from 'payload/types';

const VMealsBanner: CollectionConfig = {
    slug: 'VMealsBanner',
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
            name: 'VMealsBannerEnableDisables',
            type: 'select',
            label: 'VMeals Banner Enable / Disables',
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
            name: 'VMealsBannerList',
            type: 'array',
            label: 'VMeals Banner  List',
            minRows: 0,
            maxRows: 5,
            labels: {
              singular: 'Slide',
              plural: 'Slides',
            },
            fields: [
                {
                    name: 'VMealsBannerItemTitle',
                    label: 'VMeals Banner Item Title',
                    type: 'text',
                    admin: {
                        readOnly: false,
                    },
                    required: false,
                },
                {
                    name: 'VMealsBannerItemDescription',
                    label: 'VMeals Banner Item Description',
                    type: 'text',
                    admin: {
                        readOnly: false,
                    },
                    required: false,
                },
                {
                    name: 'VMealsBannerButtonItem',
                    label: 'VMeals Banner Button Item',
                    type: 'text',
                    admin: {
                        readOnly: false,
                    },
                    required: false,
                },
                {
                    name: 'VMealsBannerItemLinkURL',
                    type: 'select',
                    label: 'VMeals Banner Item Link URL',
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
                {
                    name: 'VMealsBannerItemUploadImage',
                    label: 'VMeals Banner Item Upload Image',
                    type: 'upload',
                    relationTo: 'media',
                    admin: {
                        readOnly: false,
                    },
                    required: false,
                },
            ]
        },
    ]
};

export default VMealsBanner;