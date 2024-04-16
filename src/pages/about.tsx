import about from '../../public/about.jpg';

const About = () => (
  <div
    id="about"
    className="p-5 bg-primary flex gap-8 flex-col lg:flex-row-reverse"
  >
    <img
      src={about.src}
      alt="aboutImage"
      className="object-cover w-full lg:w-1/2"
    />
    <article className="text-white flex flex-col gap-6">
      <h2 className="text-5xl font-bold">Quiénes somos</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget
        efficitur elit. Vivamus mattis et ipsum eget laoreet. Maecenas aliquam
        convallis vehicula. Nullam pretium eleifend rutrum. Curabitur vel
        gravida leo, a ornare elit. Nullam laoreet tellus id turpis luctus
        dapibus. Praesent consectetur tellus non porta ultrices. Morbi purus mi,
        egestas id malesuada ut, eleifend eu nulla. Suspendisse quis dolor
        porttitor, aliquet quam non, ullamcorper eros. Duis arcu nunc, elementum
        nec lectus sit amet, imperdiet placerat ante. In pulvinar facilisis
        venenatis. Nunc hendrerit lacinia finibus. Suspendisse lectus nibh,
        maximus et elementum in, blandit nec justo. Integer ac sagittis justo.
        Pellentesque in turpis ut nunc consectetur elementum. Etiam in vulputate
        velit. Ut turpis lorem, mollis sed nisl quis, condimentum tempor augue.
        Suspendisse nec turpis a sem cursus luctus vitae a augue. Sed hendrerit
        id tellus quis lobortis. Nunc lacinia risus at neque elementum, sit amet
        rhoncus mi consequat. Proin vehicula rhoncus accumsan. Vivamus eu
        tincidunt velit. Sed rhoncus felis nulla, nec sagittis velit auctor quis
      </p>
    </article>
    <p></p>
  </div>
);

export default About;
