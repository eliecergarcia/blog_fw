import React from 'react';

import { Contact } from '../contact/Contact';
import { Hero } from '../hero/Hero';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import { AppConfig } from '../utils/AppConfig';
import { About } from '../about/About';

//import for posts generations
// import { GetStaticProps } from 'next';

// import { IPaginationProps } from '../pagination/Pagination';
// import { getAllPosts } from '../utils/Content';
// import { IBlogGalleryProps } from '../blog/BlogGallery';


const Index = () => (
  <Main
    meta={
      <Meta
        title="Flatwhite"
        description={AppConfig.description}
      />
    }
  >
    <Hero />
    <About />
    <Contact />
  </Main>
);

// export const getStaticProps: GetStaticProps<IBlogGalleryProps> = async () => {
//   const posts = getAllPosts(['title', 'date', 'slug']);
//   const pagination: IPaginationProps = {};

//   if (posts.length > AppConfig.pagination_size) {
//     pagination.next = '/page2';
//   }

//   return {
//     props: {
//       posts: posts.slice(0, AppConfig.pagination_size),
//       pagination,
//     },
//   };
// };

export default Index;
