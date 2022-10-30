import { CollectionConfig } from 'payload/types';

const VMealCouponCode: CollectionConfig = {
  slug: 'VMealCouponCode',
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
        name: 'VMealsCouponCodeEnableDisables',
        type: 'select',
        label: 'VMeals Coupon Code Enable / Disables',
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
        name : 'VMealCouponCodeList',
        type: 'array',
        label: 'VMeals Add Ons List',
        minRows: 0,
        maxRows: 5,
        labels: {
            singular: 'Slide',
            plural: 'Slides',
        },
        fields: [
            {
                name: 'VMealCouponCodeTitle',
                type: 'text',
                label: 'VMeals Coupon Code Title',
                admin: {
                    readOnly: false
                },
                required: true
            },
            {
                name: 'VMealCouponCodePercTitle',
                type: 'number',
                label: 'VMeals Coupon Code Perc Title',
                admin: {
                    readOnly: false
                },
                required: true
            },
            {
                name: 'VMealCouponCodeDate',
                type: 'text',
                label: 'VMeals Coupon Code Date',
                admin: {
                    readOnly: false
                },
                required: true
            },
            {
                name: 'VMealCouponCodeTime',
                type: 'text',
                label: 'VMeals Coupon Code Time',
                admin: {
                    readOnly: false
                },
                required: true
            }
        ]
    }
  ]
};

export default VMealCouponCode;