import React from 'react';
import DeafultFeatureCard from 'components/Elements/Cards/DeafultFeatureCard';
import LockIcon from 'public/icons/phosphor-icons/assets/duotone/lock-key-open-duotone.svg';

export default {
  title: 'Elements/Cards/Feature',
  component: DeafultFeatureCard,
  parameters: {
    screenshot: {
      viewports: {
        large: {
          width: 2560,
          height: 1440,
        },
        medium: 'Kindle Fire HDX landscape',
        small: 'iPad',
        xsmall: 'iPhone 5',
      },
    },
  },
};

const styleCards = {width: '100%', maxWidth: '900px'};
const styleCardsIcon = {width: '150px'};

export const Feature = () => (
  <div className="mt-none sm:py-none sm:px-none md:py-6xl md:px-2xl lg:py-6xl lg:px-2xl xl:py-6xl xl:px-2xl relative grid place-content-center">
    <DeafultFeatureCard
      style={styleCards}
      cover={{
        svg: <LockIcon style={styleCardsIcon} alt="jwt.io" />,
      }}
      title={'Build with Next.js'}
      link={'https://nextjs.org'}
      content={
        'Build with Next 10 the famous React framework. Next comes packed with features like i18n support for full internationalization or image optimization. Next works along other with Node frameworks  like Express and that is exactly how we used it in this case. Express is our basic server getting all requests and handling things like the JWT authentication. After that it passes the request to Next if necessary. This most likely the case  when our API is called for a data request. This also is one of the benefits we got from Next. We build our API in the same environment as we build our the rest of our backend and even our frontend. We use getStaticProps and getStaticPaths to dynamically create the different the product pages from our database (or any other data source). The SSG output Next generates is highly optimized resulting in a very fast and smooth user experience on the frontend.'
      }
    />
  </div>
);
