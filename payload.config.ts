import { buildConfig } from 'payload/config';
import dotenv from 'dotenv';
import Page from './collections/Page';
import Media from './collections/Media';
import VMealsHeader from './collections/Vmeals/Layout/VMealsHeader';
import VMealsFooter from './collections/Vmeals/Layout/VMealsFooter';
import VMealsIconFooter from './collections/Vmeals/Layout/VMealsIconFooter';
import VMealsSilderBar from './collections/Vmeals/Home/VMealsSilderBar';
import VMealsCustomersChooseUs from './collections/Vmeals/Home/VMealsCustomersChooseUs';
import VMealsOurGeniuses from './collections/Vmeals/Home/VMealsOurGeniuses';
import VMealsGetStarted from './collections/Vmeals/Home/VMealsGetStarted';
import VMealsGuide from './collections/Vmeals/Home/VMealsGuide';
import VMealsIcon from './collections/Vmeals/Home/VMealsIcon';
import VMealsBlog from './collections/Vmeals/Blog/VMealsBlog';
import VMealsAboutUs from './collections/Vmeals/AboutUs/VMealsAboutUs';
import VMealsContactUs from './collections/Vmeals/ContactUs/VMealsContactUs';
import VMealsFaqs from './collections/Vmeals/Faqs/VMealsFaqs';
import VMealsOurPartners from './collections/Vmeals/OurPartners/VMealsOurPartners';
import VMealsSeo from './collections/Vmeals/Seo/VMealsSeo';
import VMealCouponCode from './collections/Vmeals/CouponCode/VMealCouponCode';
import VMealsDeliveryInformation from './collections/Vmeals/Plans/VMealsDeliveryInformation';
import VMealsNextHelpBookAppointment from './collections/Vmeals/Plans/VMealsNextHelpBookAppointment';
import VMealsPaymentSuccessfully from './collections/Vmeals/Plans/VMealsPaymentSuccessfully';
import VMealsPersonalInformation from './collections/Vmeals/Plans/VMealsPersonalInformation';
import VMealsFormEmailAddress from './collections/Vmeals/Form/VMealsFormEmailAddress';
import VMealsFormOrderSummary from './collections/Vmeals/Form/VMealsFormOrderSummary';
import VMealsCalculation from './collections/Vmeals/Calculation/VMealsCalculation';
import VMealsFormContactUs from './collections/Vmeals/Form/VMealsFormContactUs';
import VMealsFormOurPartners from './collections/Vmeals/Form/VMealsFormOurPartners';
import VMealsBanner from './collections/Vmeals/Plans/VMealsBanner';
import VMealsSelectPlan from './collections/Vmeals/Plans/VMealsSelectPlan';

dotenv.config();

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  collections: [
    Page,
    Media,
    VMealsSilderBar,
    VMealsCustomersChooseUs,
    VMealsOurGeniuses,
    VMealsGetStarted,
    VMealsGuide,
    VMealsIcon,
    VMealsHeader,
    VMealsFooter,
    VMealsIconFooter,
    VMealsBlog,
    VMealsAboutUs,
    VMealsContactUs,
    VMealsFaqs,
    VMealsOurPartners,
    VMealsSeo,
    VMealCouponCode,
    VMealsDeliveryInformation,
    VMealsNextHelpBookAppointment,
    VMealsPaymentSuccessfully,
    VMealsPersonalInformation,
    VMealsFormEmailAddress,
    VMealsFormOrderSummary,
    VMealsCalculation,
    VMealsFormContactUs,
    VMealsFormOurPartners,
    VMealsBanner,
    VMealsSelectPlan,
  ],
});
