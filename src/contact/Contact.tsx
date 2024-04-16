import React from 'react';

import { Icon } from '../components/icon/Icon';
import SubscribeForm from '../components/newsletter/Newsletter';

export const Contact = () => {
  return (
    <div
      id="suscribe"
      className="min-h-[90vh] p-5 bg-secondary grid gap-4 lg:grid-cols-3"
    >
      <section className="flex flex-col gap-20">
        <article className="text-white flex flex-col gap-4">
          <h2 className="text-4xl font-bold">Contáctanos</h2>
          <p className="text-2xl">
            Conectando el futuro de TI: sumérgete en el mundo de la innovación y
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
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <Icon className="fill-white h-10 w-10" name="linkedin" />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <Icon className="fill-white h-10 w-10" name="instagram" />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <Icon className="fill-white h-10 w-10" name="github" />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <Icon className="fill-white h-10 w-10" name="tiktok" />
          </a>
        </div>
      </section>
      <div className="col-span-2 flex justify-center items-start py-10">
        <SubscribeForm />
      </div>
    </div>
  );
};
