import { CollectionConfig } from 'payload/types';

const VMealsOurGeniuses: CollectionConfig = {
    slug: 'VMealsOurGeniuses',
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
            name: 'VMealsOurGeniusesEnableDisables',
            type: 'select',
            label: 'VMeals Our Geniuses Enable / Disables',
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
            name: 'VMealsOurGeniusesImage',
            label: 'VMeals Our Geniuses Image',
            type: 'upload',
            relationTo: 'media',
            admin: {
                readOnly: false,
            },
            required: false,
        },
        {
            name: 'VMealsOurGeniusesHeading',
            label: 'VMeals Our Geniuses Heading',
            type: 'text',
            admin: {
                readOnly: false,
            },
            required: false,
        },
        {
            name: 'VMealsOurGeniusesTitle',
            label: 'VMeals Our Geniuses Title',
            type: 'text',
            admin: {
                readOnly: false,
            },
            required: false,
        },
        {
            name: 'VMealsOurGeniusesDescription',
            label: 'VMeals Our Geniuses Description',
            type: 'textarea',
            admin: {
                readOnly: false,
            },
            required: false,
        },
        {
            name: 'VMealsOurGeniusesButtonBookAppointment',
            label: 'VMeals Our Geniuses Button Book Appointment',
            type: 'text',
            admin: {
                readOnly: false,
            },
            required: false,
        },
        {
            name: 'VMealsOurGeniusesButtonLinkURL',
            type: 'select',
            label: 'VMeals Our Geniuses Button Link URL',
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
};

export default VMealsOurGeniuses;