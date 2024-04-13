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
    <Navbar />
    <div>{props.children}</div>
  </div>
);

export { Main };
