import { CollectionConfig } from 'payload/types';

const VMealsIcon: CollectionConfig = {
    slug: 'VMealsIcon',
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
            name: 'VMealsIconEnableDisables',
            type: 'select',
            label: 'VMeals Icon Enable / Disables',
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
            name: 'VMealsIconList',
            type: 'array',
            label: 'VMeals Icon List',
            minRows: 0,
            maxRows: 3,
            labels: {
              singular: 'Slide',
              plural: 'Slides',
            },
            fields: [
                {
                    name: 'VMealsIconItemTitle',
                    type: 'select',
                    label: 'VMeals Icon Item Title',
                    required: false,
                    options: [
                        {
                            label: 'Whatsapp',
                            value: 'fa-brands fa-whatsapp',
                        },
                        {
                            label: 'Instagram',
                            value: 'fa-brands fa-instagram',
                        },
                        {
                            label: 'Facebook',
                            value: 'fa-brands fa-facebook-f',
                        }
                    ]
                },
                {
                    name: 'VMealsIconItemLink',
                    label: 'VMeals Icon Item Link',
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

export default VMealsIcon;