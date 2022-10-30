import { CollectionConfig } from 'payload/types';

const VMealsIconFooter: CollectionConfig = {
    slug: 'VMealsIconFooter',
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
            name: 'VMealsIconFooterEnableDisables',
            type: 'select',
            label: 'VMeals Icon Footer Enable / Disables',
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
            name: 'VMealsIconFooterList',
            type: 'array',
            label: 'VMeals Icon Footer List',
            minRows: 0,
            maxRows: 5,
            labels: {
              singular: 'Slide',
              plural: 'Slides',
            },
            fields: [
                {
                    name: 'VMealsIconFooterItemLinkUrl',
                    label: 'VMeals Footer Item Link Url',
                    type: 'text',
                    admin: {
                        readOnly: false,
                    },
                    required: false,
                },
                {
                    name: 'VMealsContactUsButtonImagesIcon',
                    type: 'select',
                    label: 'VMeals Contact Us Images Icon Text',
                    required: false,
                    options: [
                        {
                            label: 'Whatsapp',
                            value: 'fa-brands fa-whatsapp',
                        },
                        {
                            label: 'Arrow Key',
                            value: 'fa-solid fa-angle-up',
                        }
                    ]
                },
            ]
        }
    ]
};

export default VMealsIconFooter;