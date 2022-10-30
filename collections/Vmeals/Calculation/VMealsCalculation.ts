import { CollectionConfig } from 'payload/types';

const VMealsCalculation: CollectionConfig = {
  slug: 'VMealsCalculation',
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
            name: 'VMealsCalculationEnableDisables',
            type: 'select',
            label: 'VMeals Calculation Enable / Disables',
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
            name: 'VMealsCalculationNumber',
            type: 'number',
            label: 'VMeals Calculation Amount',
            admin: {
                readOnly: false
            },
            required: true
        },
        {
            name: 'VMealsCalculationTax',
            type: 'number',
            label: 'VMeals Calculation Tax',
            admin: {
                readOnly: false
            },
            required: true
        },
        {
            name: 'VMealsCalculationDiscount',
            type: 'number',
            label: 'VMeals Calculation Discount',
            admin: {
                readOnly: false
            },
            required: true
        }
    ]
};

export default VMealsCalculation;