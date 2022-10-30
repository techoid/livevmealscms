import { CollectionConfig } from 'payload/types';

const VMealsGetStarted: CollectionConfig = {
    slug: 'VMealsGetStarted',
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
            name: 'VMealsGetStartedEnableDisables',
            type: 'select',
            label: 'VMeals Get Started Enable / Disables',
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
            name: 'VMealsGetStartedImage',
            label: 'VMeals Get Started Image',
            type: 'upload',
            relationTo: 'media',
            admin: {
                readOnly: false,
            },
            required: false,
        },
        {
            name: 'VMealsGetStartedHeading',
            label: 'VMeals Get Started Heading',
            type: 'text',
            admin: {
                readOnly: false,
            },
            required: false,
        },
        {
            name: 'VMealsGetStartedTitle',
            label: 'VMeals Get Started Title',
            type: 'text',
            admin: {
                readOnly: false,
            },
            required: false,
        },
        {
            name: 'VMealsGetStartedList',
            type: 'array',
            label: 'VMeals Get Started List',
            minRows: 0,
            maxRows: 5,
            labels: {
              singular: 'Slide',
              plural: 'Slides',
            },
            fields: [
                {
                    name: 'VMealsGetStartedItemTitle',
                    label: 'VMeals Get Started Item Title',
                    type: 'text',
                    admin: {
                        readOnly: false,
                    },
                    required: false,
                },
                {
                    name: 'VMealsGetStartedItemDescription',
                    label: 'VMeals Get Started Item Description',
                    type: 'textarea',
                    admin: {
                        readOnly: false,
                    },
                    required: false,
                }
            ]
        }
    ]
};

export default VMealsGetStarted;