import { CollectionConfig } from 'payload/types';

const VMealsHeader: CollectionConfig = {
    slug: 'VMealsHeader',
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
            name: 'VMealsHeaderEnableDisables',
            type: 'select',
            label: 'VMeals Header Enable / Disables',
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
            name: 'VMealsHeaderLogoImage',
            label: 'VMeals Header Logo Image',
            type: 'upload',
            relationTo: 'media',
            admin: {
                readOnly: false,
            },
            required: false,
        },
        {
            name: 'VMealsHeaderLogoImageLinkURL',
            type: 'select',
            label: 'VMeals Header Logo Image Link URL',
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
            name: 'VMealsHeaderButtonText',
            label: 'VMeals Header Button Text',
            type: 'text',
            admin: {
                readOnly: false,
            },
            required: false,
        },
        {
            name: 'VMealsHeaderButtonTextLinkURL',
            type: 'select',
            label: 'VMeals Header Button Text Link URL',
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
            name: 'VMealsHeaderBlogText',
            label: 'VMeals Header Blog Text',
            type: 'text',
            admin: {
                readOnly: false,
            },
            required: false,
        },
        {
            name: 'VMealsHeaderBlogTextLinkURL',
            type: 'select',
            label: 'VMeals Header Blog Text Link URL',
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
            name: 'VMealsHeaderMenuList',
            type: 'array',
            label: 'VMeals Header Menu List',
            minRows: 0,
            maxRows: 5,
            labels: {
              singular: 'Slide',
              plural: 'Slides',
            },
            fields: [
                {
                    name: 'VMealsHeaderMenuItemTitle',
                    label: 'VMeals Header Menu Item Title',
                    type: 'text',
                    admin: {
                        readOnly: false,
                    },
                    required: false,
                },
                {
                    name: 'VMealsHeaderMenuItemLinkURL',
                    type: 'select',
                    label: 'VMeals Header Menu Item Link URL',
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
                    name: 'VMealsHeaderSubMenuList',
                    type: 'array',
                    label: 'VMeals Header Sub Menu List',
                    minRows: 0,
                    maxRows: 5,
                    labels: {
                      singular: 'Slide',
                      plural: 'Slides',
                    },
                    fields: [
                        {
                            name: 'VMealsHeaderSubMenuTitle',
                            label: 'VMeals Header Sub Menu Title',
                            type: 'text',
                            admin: {
                                readOnly: false,
                            },
                            required: false,
                        },
                        {
                            name: 'VMealsHeaderSubMenuLinkURL',
                            type: 'select',
                            label: 'VMeals Header Sub Menu Link URL',
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
                        }
                    ]
                }
            ]
        },
        {
            name: 'VMealsLanguagesList',
            type: 'array',
            label: 'VMeals Languages List',
            minRows: 0,
            maxRows: 2,
            labels: {
              singular: 'Slide',
              plural: 'Slides',
            },
            fields: [
                {
                    name: 'VMealsLanguagesItemTitle',
                    label: 'VMeals Languages Item Title',
                    type: 'text',
                    admin: {
                        readOnly: false,
                    },
                    required: false,
                },
                {
                    name: 'VMealsLanguagesItemslug',
                    label: 'VMeals Languages Slug',
                    type: 'text',
                    admin: {
                        readOnly: false,
                    },
                    required: false,
                }
            ]
        }
    ]
};

export default VMealsHeader;