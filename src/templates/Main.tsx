import React, { ReactNode } from 'react';

import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('../components/navbar/Navbar'));

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="h-full">
    {props.meta}
    <div className="h-[20%] sticky top-0 z-50">
      <Navbar />
    </div>
    <div className="text-xl h-4/5">{props.children}</div>
  </div>
);

export { Main };
