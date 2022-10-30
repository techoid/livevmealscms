import { CollectionConfig } from 'payload/types';

const VMealsSelectPlan: CollectionConfig = {
  slug: 'VMealsSelectPlan',
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
      name : 'VMealsSampleMenuSelectPlan',
      type: 'array',
      label: 'VMeals Sample Menu SelectPlan',
      minRows: 0,
      maxRows: 5,
      labels: {
        singular: 'Slide',
        plural: 'Slides',
      },
      fields: [
        {
          name: 'VMealsSampleMenuEnableDisables',
          type: 'select',
          label: 'VMeals Sample Menu Enable / Disables',
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
          name: 'VMealsSampleMenuTitle',
          type: 'text',
          label: 'VMeals Sample Menu Title One',
          admin: {
            readOnly: false
          },
          required: true
        },
        {
            name: 'VMealsSampleMenuTags',
            type: 'text',
            label: 'VMeals Sample Menu Title Two',
            admin: {
                readOnly: false
            },
            required: true
        },
        {
            name: 'VMealsSampleMenuDescription',
            type: 'text',
            label: 'VMeals Sample Menu Title Three',
            admin: {
                readOnly: false
            },
            required: true
        },
        {
            name: 'VMealsSampleMenuSelectPlanName',
            type: 'text',
            label: 'VMeals Sample Menu Select Title Four',
            admin: {
                readOnly: false
            },
            required: true
        },
        {
          name : 'VMealsSelectPlanList',
          type: 'array',
          label: 'VMeals Select Plan List',
          minRows: 0,
          maxRows: 6,
          labels: {
            singular: 'Slide',
            plural: 'Slides',
          },
          fields: [
            {
              name: 'VMealsSelectPlanEnableDisables',
              type: 'select',
              label: 'VMeals Select Plan Enable / Disables',
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
              name: 'VMealsSelectPlanTitle',
              type: 'text',
              label: 'VMeals Select Plan Title',
              admin: {
                readOnly: false
              },
              required: true
            },
            {
              name: 'VMealsSelectPlanImageUpload',
              type: 'upload',
              label: 'VMeals Select Plan Image Upload',
              relationTo: 'media',
              admin: {
                readOnly: false
              },
              required: true
            },
            {
              name: 'VMealsSelectPlanLinkUrl',
              type: 'text',
              label: 'VMeals Select Plan Link Url',
              admin: {
                readOnly: false
              },
              required: true
            },
            {
              name : 'VMealsCustomisePlanSelectPlan',
              type: 'array',
              label: 'VMeals Customise Plan SelectPlan',
              minRows: 0,
              maxRows: 5,
              labels: {
                singular: 'Slide',
                plural: 'Slides',
              },
              fields: [
                {
                  name: 'VMealsCustomisePlanEnableDisables',
                  type: 'select',
                  label: 'VMeals Customise Plan Enable / Disables',
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
                  name: 'VMealsCustomisePlanTitle',
                  type: 'text',
                  label: 'VMeals Customise Plan Title',
                  admin: {
                    readOnly: false
                  },
                  required: true
                },
                {
                    name: 'VMealsCustomisePlanDescription',
                    type: 'textarea',
                    label: 'VMeals Customise Plan Description',
                    admin: {
                        readOnly: false
                    },
                    required: true
                },
                {
                    name: 'VMealsCustomisePlanSampleMenuName',
                    type: 'text',
                    label: 'VMeals Customise Plan Sample Menu Name',
                    admin: {
                        readOnly: false
                    },
                    required: true
                },
                {
                  name : 'VMealTypeOfDietList',
                  type: 'array',
                  label: 'VMeal Type Of Diet List',
                  minRows: 0,
                  maxRows: 5,
                  labels: {
                    singular: 'Slide',
                    plural: 'Slides',
                  },
                  fields: [
                    {
                      name: 'VMealTypeOfDietEnableDisables',
                      type: 'select',
                      label: 'VMeal Type Of Diet Enable / Disables',
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
                      name: 'VMealTypeOfDietTitle',
                      type: 'text',
                      label: 'VMeal Type Of Diet Title',
                      admin: {
                        readOnly: false
                      },
                      required: true
                    },
                    {
                      name : 'VMealPortionSizeList',
                      type: 'array',
                      label: 'VMeal Portion Size List',
                      minRows: 0,
                      maxRows: 5,
                      labels: {
                        singular: 'Slide',
                        plural: 'Slides',
                      },
                      fields: [
                        {
                          name: 'VMealPortionSizeEnableDisables',
                          type: 'select',
                          label: 'VMeal Portion Size Enable / Disables',
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
                          name: 'VMealPortionSizeTitle',
                          type: 'text',
                          label: 'VMeal Portion Size Title',
                          admin: {
                            readOnly: false
                          },
                          required: true
                        },
                        {
                            name: 'VMealPortionSizeSmallTitle',
                            type: 'text',
                            label: 'VMeal Portion Size Small Title',
                            admin: {
                              readOnly: false
                            },
                            required: true
                        },
                        {
                            name: 'VMealsPortionSizeDeliveriesPerWeekName',
                            type: 'text',
                            label: 'VMeals Portion Size Deliveries Per Week Name',
                            admin: {
                                readOnly: false
                            },
                            required: true
                        },
                        {
                          name : 'VMealDeliveriesPerWeekList',
                          type: 'array',
                          label: 'VMeal Deliveries Per Week List',
                          minRows: 0,
                          maxRows: 5,
                          labels: {
                            singular: 'Slide',
                            plural: 'Slides',
                          },
                          fields: [
                            {
                              name: 'VMealDeliveriesPerWeekEnableDisables',
                              type: 'select',
                              label: 'VMeal Deliveries Per Week Enable / Disables',
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
                              name: 'VMealDeliveriesPerWeekTitle',
                              type: 'text',
                              label: 'VMeal Deliveries Per Week Title',
                              admin: {
                                readOnly: false
                              },
                              required: true
                            },
                            {
                                name: 'VMealsDeliveriesPerWeekPortionSizeName',
                                type: 'text',
                                label: 'VMeals Deliveries Per Week Portion Size Name',
                                admin: {
                                    readOnly: false
                                },
                                required: true
                            },
                            {
                              name : 'VMealsOffDaysList',
                              type: 'array',
                              label: 'VMeals Off Days List',
                              minRows: 0,
                              maxRows: 5,
                              labels: {
                                singular: 'Slide',
                                plural: 'Slides',
                              },
                              fields: [
                                {
                                  name: 'VMealsOffDaysEnableDisables',
                                  type: 'select',
                                  label: 'VMeals Off Days Enable / Disables',
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
                                  name: 'VMealsOffDaysTitle',
                                  type: 'text',
                                  label: 'VMeals Off Days Title',
                                  admin: {
                                    readOnly: false
                                  },
                                  required: true
                                },
                                {
                                    name: 'VMealsOffDaysDeliveriesPerWeekName',
                                    type: 'text',
                                    label: 'VMeals Off Days Deliveries Per Week Name',
                                    admin: {
                                        readOnly: false
                                    },
                                    required: true
                                },
                                {
                                  name : 'VMealsPlanDurationList',
                                  type: 'array',
                                  label: 'VMeals Plan Duration List',
                                  minRows: 0,
                                  maxRows: 5,
                                  labels: {
                                    singular: 'Slide',
                                    plural: 'Slides',
                                  },
                                  fields: [
                                    {
                                      name: 'VMealsPlanDurationEnableDisables',
                                      type: 'select',
                                      label: 'VMeals Plan Duration Enable / Disables',
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
                                      name: 'VMealsPlanDurationTitle',
                                      type: 'text',
                                      label: 'VMeals Off Days Title',
                                      admin: {
                                        readOnly: false
                                      },
                                      required: true
                                    },
                                    {
                                        name: 'VMealsPlanDurationSelectPlanName',
                                        type: 'text',
                                        label: 'VMeals Plan Duration Select Plan Name',
                                        admin: {
                                            readOnly: false
                                        },
                                        required: true
                                    },
                                    {
                                      name : 'VMealMealTypeList',
                                      type: 'array',
                                      label: 'VMeal Meal Type List',
                                      minRows: 0,
                                      maxRows: 5,
                                      labels: {
                                        singular: 'Slide',
                                        plural: 'Slides',
                                      },
                                      fields: [
                                        {
                                          name: 'VMealMealTypeEnableDisables',
                                          type: 'select',
                                          label: 'VMeal Meal Type Enable / Disables',
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
                                          name: 'VMealMealTypeTitle',
                                          type: 'text',
                                          label: 'VMeal Meal Type Title',
                                          admin: {
                                            readOnly: false
                                          },
                                          required: true
                                        },
                                        {
                                            name: 'VMealMealTypePlanDurationName',
                                            type: 'text',
                                            label: 'VMeal Meal Type Plan Duration Name',
                                            admin: {
                                                readOnly: false
                                            },
                                            required: true
                                        },
                                        {
                                          name : 'VMealsAllergiesList',
                                          type: 'array',
                                          label: 'VMeals Allergies List',
                                          minRows: 0,
                                          maxRows: 5,
                                          labels: {
                                            singular: 'Slide',
                                            plural: 'Slides',
                                          },
                                          fields: [
                                            {
                                              name: 'VMealsAllergiesEnableDisables',
                                              type: 'select',
                                              label: 'VMeals Allergies Enable / Disables',
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
                                              name: 'VMealsAllergiesTitle',
                                              type: 'text',
                                              label: 'VMeals Allergies Title',
                                              admin: {
                                                readOnly: false
                                              },
                                              required: true
                                            },
                                            {
                                                name: 'VMealsAllergiesMealTypeName',
                                                type: 'text',
                                                label: 'VMeals Allergies Meal Type Name',
                                                admin: {
                                                    readOnly: false
                                                },
                                                required: true
                                            },
                                            {
                                              name : 'VMealsAddOnsList',
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
                                                    name: 'VMealsAddOnsEnableDisables',
                                                    type: 'select',
                                                    label: 'VMeals Add Ons Enable / Disables',
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
                                                      name: 'VMealsAddOnsTitle',
                                                      type: 'text',
                                                      label: 'VMeals Add Ons Title',
                                                      admin: {
                                                          readOnly: false
                                                      },
                                                      required: true
                                                  },
                                                  {
                                                      name: 'VMealsAddOnsVMealsAllergiesName',
                                                      type: 'text',
                                                      label: 'VMeals Add Ons Allergies Name',
                                                      admin: {
                                                          readOnly: false
                                                      },
                                                      required: true
                                                  }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        } 
      ]
    }
  ]
};

export default VMealsSelectPlan;