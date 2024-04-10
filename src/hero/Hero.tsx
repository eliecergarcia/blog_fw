import React from 'react';

export const Hero = () => {
  return (
    <div className="min-h-[90vh] flex-grow p-5 bg-primary xl:p-10 xl:relative">
      <h1 className="pb-4 mx-auto text-3xl top-[40%] right-20 text-white text-center font-bold w-2/3 xl:absolute xl:w-[18%] xl:text-4xl">
        <span className="text-secondary">CONECTANDO</span> EL
        <span className="text-secondary"> FUTURO</span> TECH
      </h1>
      <img
        src="https://s3-alpha-sig.figma.com/img/8a17/a662/13447c271143bc469160b5c112c30203?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CpYQbiX3WzMZapRJCDyZJi79asTY69V5WSbRNrkxX0syO99-D3aB7pS08XfJZ9LSkB3tQFc9HTclzTvouzCwVleEcEVNtHeZyQ-pJBU7Z9A3rvd4zvrwMy~Rz1PfWILuk4jBinCTujJKsoK4YemQa3wfM-TXEBTd0JYpD2QT6cN5OPjwCYHu~6xICMOevcUAnGmLPIw1rUuA4y64GWacp1sA3uVl7pOqmJAZa7dUz2M9AN37MXVlXcG2wLpHqaJIThD8~sPraPtUWYlw03G3VMr2MBIUKESyC5Lp-uo9yP71pFLNfJsSGEJwj1kN7OulNbls6AB~irpQONJa2j-9WQ__"
        alt="heroImage"
        className="rounded-[50px] w-full h-[80vh] object-cover"
      />
    </div>
  );
};
