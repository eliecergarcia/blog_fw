import React, { ReactNode } from 'react';

import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('../components/navbar/Navbar'));

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="antialiased w-full text-gray-700 px-0">
    {props.meta}
    <Navbar />
    <div className="max-w-screen-md mx-auto">
      <div className="text-xl py-5">{props.children}</div>
    </div>
  </div>
);

export { Main };
