import { CollectionConfig } from 'payload/types';

const VMealsFormOurPartners: CollectionConfig = {
    slug: 'VMealsFormOurPartners',
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
            name: 'VMealsFormFirstName',
            type: 'text',
            label: 'VMeals Form First Name',
            admin: {
                readOnly: false
            },
            required: true
        },
        {
            name: 'VMealsFormLastName',
            type: 'text',
            label: 'VMeals Form Last Name',
            admin: {
                readOnly: false
            },
            required: true
        },
        {
            name: 'VMealsFormEmailAddressName',
            type: 'text',
            label: 'VMeals Form Email Address',
            admin: {
                readOnly: false
            },
            required: true
        },
        {
            name: 'VMealsFormMobileNumberName',
            type: 'text',
            label: 'VMeals Form Mobile Number',
            admin: {
                readOnly: false
            },
            required: true
        },
        {
            name: 'VMealsFormCompanyName',
            type: 'text',
            label: 'VMeals Form Company Name',
            admin: {
                readOnly: false
            },
            required: true
        },
        {
            name: 'VMealsFormDesignation',
            type: 'text',
            label: 'VMeals Form Designation',
            admin: {
                readOnly: false
            },
            required: true
        },
        {
            name: 'VMealsFormMessage',
            type: 'text',
            label: 'VMeals Form Message',
            admin: {
                readOnly: false
            },
            required: true
        },
    ]
};

export default VMealsFormOurPartners;