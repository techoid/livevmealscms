import { CollectionConfig } from 'payload/types';

const VMealsSilderBar: CollectionConfig = {
    slug: 'VMealsSilderBar',
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
            name: 'VMealsSilderBarEnableDisables',
            type: 'select',
            label: 'VMeals Silder Bar Enable / Disables',
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
            name: 'VMealsSilderBarUpload',
            label: 'VMeals Silder Bar Image',
            type: 'upload',
            relationTo: 'media',
            admin: {
                readOnly: false,
            },
            required: false,
        },
        {
            name: 'VMealsSilderBarHeading',
            label: 'VMeals Silder Bar Heading',
            type: 'text',
            admin: {
                readOnly: false,
            },
            required: false,
        },
        {
            name: 'VMealsSilderBarTitle',
            label: 'VMeals Silder Bar Title',
            type: 'textarea',
            admin: {
                readOnly: false,
            },
            required: false,
        },
        {
            name: 'VMealsSilderBarButtonViewPlan',
            label: 'VMeals Silder Bar Button View Plan',
            type: 'text',
            required: false,
        },
        {
            name: 'VMealsSilderBarButtonViewPlanLinkURL',
            type: 'select',
            label: 'VMeals Silder Bar Button View Plan Item Link URL',
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
            name: 'VMealsSilderBarUploadButtonLearnMore',
            label: 'VMeals Silder Bar Button Learn More',
            type: 'text',
            required: false,
        },
        {
            name: 'VMealsSilderBarUploadButtonLearnMoreLinkURL',
            type: 'select',
            label: 'VMeals Silder Bar Upload Button Learn More Link URL',
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
            name: 'VMealsArrowsDownUploadImage',
            label: 'VMeals Arrows Down Upload Image',
            type: 'upload',
            relationTo: 'media',
            admin: {
                readOnly: false,
            },
            required: false,
        }
    ]
};

export default VMealsSilderBar;