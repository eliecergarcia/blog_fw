import React from 'react';

import { GetStaticProps } from 'next';

import { IBlogGalleryProps } from '../blog/BlogGallery';
import { Contact } from '../contact/Contact';
import { Hero } from '../hero/Hero';
import { Meta } from '../layout/Meta';
import { IPaginationProps } from '../pagination/Pagination';
import { Main } from '../templates/Main';
import { AppConfig } from '../utils/AppConfig';
import { getAllPosts } from '../utils/Content';
import About from './about';

const Index = () => (
  <Main
    meta={
      <Meta
        title="Made with Next.js, TypeScript, ESLint, Prettier, PostCSS, Tailwind CSS"
        description={AppConfig.description}
      />
    }
  >
    <Hero />
    <About />
    <Contact />
  </Main>
);

export const getStaticProps: GetStaticProps<IBlogGalleryProps> = async () => {
  const posts = getAllPosts(['title', 'date', 'slug']);
  const pagination: IPaginationProps = {};

  if (posts.length > AppConfig.pagination_size) {
    pagination.next = '/page2';
  }

  return {
    props: {
      posts: posts.slice(0, AppConfig.pagination_size),
      pagination,
    },
  };
};

export default Index;
