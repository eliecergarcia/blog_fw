import React from 'react';

export const About = () => {
  return (
    <div
      id="about"
      className="min-h-[90vh] bg-primary flex flex-col lg:flex-row-reverse"
    >
      <img
        src="https://s3-alpha-sig.figma.com/img/566c/53c0/a7bd87bd0aaf46ca578e5430808811aa?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hZFxlUtiNgRWketBznDZnH50SughTaImyatT6di6n0pqBzfh24WArRLqjad08iexWxKhAljWtDpnNgPH6IgPe2HO2atg1XpCZRiL0Dag5upog2-h4fLwnEjrGBYUf1VUwU9MWEzllEgDJ8PslKF2e1f0h-SbqzDAJura457VXgRwuQ69ERA2LMk8qlaxMd-NAdXvbwK0LMQQMAD~yDdsKBJgKVzVIbTHaKBLjI6ntSeAp1r~wPIral9X4DfY5z6yxeLwUTT~KCuTTEBSO5UU8UkwFE0QETXRkAxNtKbP4zC7hL73eR5vlf1ICAbZbs7WJYl~MgIOGPMOjjFPRx3xBA__"
        alt="aboutImage"
        className="object-cover w-full lg:w-1/2"
      />
      <article className="text-white flex flex-col gap-6 lg:w-1/2">
        <h2 className="text-5xl font-bold">Quiénes somos</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget
          efficitur elit. Vivamus mattis et ipsum eget laoreet. Maecenas aliquam
          convallis vehicula. Nullam pretium eleifend rutrum. Curabitur vel
          gravida leo, a ornare elit. Nullam laoreet tellus id turpis luctus
          dapibus. Praesent consectetur tellus non porta ultrices. Morbi purus
          mi, egestas id malesuada ut, eleifend eu nulla. Suspendisse quis dolor
          porttitor, aliquet quam non, ullamcorper eros. Duis arcu nunc,
          elementum nec lectus sit amet, imperdiet placerat ante. In pulvinar
          facilisis venenatis. Nunc hendrerit lacinia finibus. Suspendisse
          lectus nibh, maximus et elementum in, blandit nec justo. Integer ac
          sagittis justo. Pellentesque in turpis ut nunc consectetur elementum.
          Etiam in vulputate velit. Ut turpis lorem, mollis sed nisl quis,
          condimentum tempor augue. Suspendisse nec turpis a sem cursus luctus
          vitae a augue. Sed hendrerit id tellus quis lobortis. Nunc lacinia
          risus at neque elementum, sit amet rhoncus mi consequat. Proin
          vehicula rhoncus accumsan. Vivamus eu tincidunt velit. Sed rhoncus
          felis nulla, nec sagittis velit auctor quis
        </p>
      </article>
    </div>
  );
};
