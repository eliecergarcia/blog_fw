import hero from '../../public/assets/images/Hero.png';

export const Hero = () => {
  return (
    <div
      id="hero"
      className="min-h-[90vh] flex-grow p-5 bg-primary xl:p-10 xl:relative"
    >
      <h1 className="pb-4 mx-auto text-3xl top-[40%] right-20 text-white text-center font-bold w-2/3 xl:absolute xl:w-[18%] xl:text-4xl">
        <span className="text-secondary">CONECTANDO</span> EL
        <span className="text-secondary"> FUTURO</span> TECH
      </h1>
      <img
        src={hero.src}
        alt="heroImage"
        className="rounded-[50px] w-full h-[80vh] object-cover"
      />
    </div>
  );
};
