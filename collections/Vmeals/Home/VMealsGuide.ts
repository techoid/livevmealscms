import { CollectionConfig } from 'payload/types';

const VMealsGuide: CollectionConfig = {
    slug: 'VMealsGuide',
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
            name: 'VMealsGuideEnableDisables',
            type: 'select',
            label: 'VMeals Guide Enable / Disables',
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
            name: 'VMealsGuideTitle',
            label: 'VMeals Guide Title',
            type: 'text',
            admin: {
                readOnly: false,
            },
            required: false,
        },
        {
            name: 'VMealsGuideBoldColorTitle',
            label: 'VMeals Guide Bold Color Title',
            type: 'text',
            admin: {
                readOnly: false,
            },
            required: false,
        },
        {
            name: 'VMealsGuideInputImages',
            label: 'VMeals Guide Images',
            type: 'upload',
            relationTo: 'media',
            admin: {
                readOnly: false,
            },
            required: false,
        },
        {
            name: 'VMealsGuideInputPlaceholderText',
            label: 'VMeals Guide Input Placeholder Text',
            type: 'text',
            admin: {
                readOnly: false,
            },
            required: false,
        },
        {
            name: 'VMealsGuideInputButtonTitle',
            label: 'VMeals Guide Input Button Title',
            type: 'text',
            admin: {
                readOnly: false,
            },
            required: false,
        }
    ]
};

export default VMealsGuide;