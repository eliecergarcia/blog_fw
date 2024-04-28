import about from '../../public/assets/images/About.png'

export const About = () => {
  return (
    <div
      id="about"
      className="min-h-[90vh] bg-primary p-5 flex flex-col lg:flex-row-reverse"
    >
    <img src={about.src} alt="aboutImage"
        className="w-full lg:w-1/2"
    />
      <article className="text-white flex flex-col gap-6 lg:w-1/2">
        <h2 className="text-5xl font-bold">Quiénes somos</h2>
        <p>
          En un mundo donde el networking en el ámbito tecnológico se ha vuelto esencial, nosotros en Flatwhite reinventamos la forma de conectar con desarrolladores. Sabemos que las conexiones profesionales son cruciales para el progreso en el desarrollo de software, pero también reconocemos los desafíos y la tediosa burocracia que a menudo acompañan a estos procesos. Por eso, nuestra plataforma elimina los obstáculos innecesarios, permitiendo a los profesionales de IT de todos los niveles colaborar, compartir conocimientos y crecer juntos.
        </p>
        <p>
          Nuestra comunidad en línea se dedica a fomentar la pasión por el desarrollo de software. Aquí, los miembros pueden trabajar en proyectos innovadores, compartir su experiencia técnica y aprender directamente de expertos en el campo. Nos centramos en el crecimiento práctico y continuo, facilitando la búsqueda de mentores y la colaboración efectiva sin las complicaciones habituales.
        </p>
        <p>
          Únete a Flatwhite y transforma tu manera de hacer networking en el desarrollo de software. Nuestra misión es simple: hacer que tu experiencia profesional sea tan dinámica y fructífera como los proyectos que desarrollas.
        </p>
      </article>
    </div>
  );
};
