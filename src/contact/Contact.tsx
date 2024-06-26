import React from 'react';

import { Icon } from '../components/icon/Icon';
import SubscribeForm from '../components/newsletter/Newsletter';

export const Contact = () => {
  return (
    <div
      id="suscribe"
      className="min-h-[90vh] p-10 bg-secondary grid gap-8 lg:grid-cols-2"
    >
      <section className="flex lg:py-10 flex-col gap-20">
        <article className="text-white flex flex-col gap-6">
          <h2 className="text-3xl font-bold">Brewing innovation one developer at a time</h2>
          <p className="text-2xl">
            Sumérgete en el mundo de la innovación y
            el networking. ¿Quieres más información, descubrir tips y acceder a
            contenido exclusivo? ¡Suscríbete a nuestro newsletter y sé parte de
            la revolución tecnológica!            
          </p>
        </article>
        <a
          href="mailto:flatwhite.info@gmail.com"
          className="text-lg text-white w-fit"
        >
          flatwhite.info@gmail.com
        </a>
        <div className="flex gap-16">
          <a href="https://www.linkedin.com/company/flatwhite/" target="_blank" rel="noopener noreferrer">
            <Icon className="fill-white h-10 w-10" name="linkedin" />
          </a>
          <a href="https://www.instagram.com/flatwhite_community/" target="_blank" rel="noopener noreferrer">
            <Icon className="fill-white h-10 w-10" name="instagram" />
          </a>
          <a href="https://www.youtube.com/@FlatWhiteOficial" target="_blank" rel="noopener noreferrer">
            <Icon className="fill-white h-10 w-10" name="youtube" />
          </a>
          {/* <a href="https://www.tiktok.com/@flatwhiteoficial?lang=es" target="_blank" rel="noopener noreferrer">
            <Icon className="fill-white h-10 w-10" name="tiktok" />
          </a> */}
        </div>
      </section>
      <div className="col-span-1 flex justify-center items-start py-10">
        <SubscribeForm />
      </div>
    </div>
  );
};
