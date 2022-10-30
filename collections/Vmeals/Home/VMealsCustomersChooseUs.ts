import { CollectionConfig } from 'payload/types';

const VMealsCustomersChooseUs: CollectionConfig = {
    slug: 'VMealsCustomersChooseUs',
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
            name: 'VMealsCustomersChooseUsEnableDisables',
            type: 'select',
            label: 'VMeals Customers Choose Us Enable / Disables',
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
            name: 'VMealsCustomersChooseUsTitle',
            label: 'VMeals Silder Bar Title',
            type: 'text',
            admin: {
                readOnly: false,
            },
            required: false,
        },
        {
            name: 'VMealsCustomersChooseUsDescription',
            label: 'VMeals Silder Bar Description',
            type: 'textarea',
            admin: {
                readOnly: false,
            },
            required: false,
        },
        {
            name: 'VMealsCustomersChooseUsList',
            type: 'array',
            label: 'VMeals Customers Choose Us List',
            minRows: 0,
            maxRows: 3,
            labels: {
              singular: 'Slide',
              plural: 'Slides',
            },
            fields: [
                {
                    name: 'VMealsCustomersChooseUsItemImageIcon',
                    label: 'VMeals Customers ChooseUs Item Image Icon',
                    type: 'upload',
                    relationTo: 'media',
                    required: false,
                },
                {
                    name: 'VMealsCustomersChooseUsItemTitle',
                    label: 'VMeals Customers ChooseUs Item Title',
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

export default VMealsCustomersChooseUs;