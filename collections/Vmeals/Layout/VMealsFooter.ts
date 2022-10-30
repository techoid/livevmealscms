import { CollectionConfig } from 'payload/types';

const VMealsFooter: CollectionConfig = {
    slug: 'VMealsFooter',
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
            name: 'VMealsFooterEnableDisables',
            type: 'select',
            label: 'VMeals Footer Enable / Disables',
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
            name: 'VMealsFooter',
            label: 'VMeals Footer Copy Right Text',
            type: 'text',
            admin: {
                readOnly: false,
            },
            required: false,
        },
        {
            name: 'VMealsFooterList',
            type: 'array',
            label: 'VMealsFooter List',
            minRows: 0,
            maxRows: 5,
            labels: {
              singular: 'Slide',
              plural: 'Slides',
            },
            fields: [
                {
                    name: 'VMealsFooterItemTitle',
                    label: 'VMeals Footer Item Title',
                    type: 'text',
                    admin: {
                        readOnly: false,
                    },
                    required: false,
                },
                {
                    name: 'VMealsOurPartnersFileUpload',
                    type: 'upload',
                    label: 'VMeals Our Partners File Upload',
                    relationTo: 'media',
                    admin: {
                      readOnly: false
                    },
                    required: true
                },
            ]
        }
    ]
};

export default VMealsFooter;