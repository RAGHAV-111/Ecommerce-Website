import React from 'react';

import classes from './About.module.css';

const About = () => {
  return (
    <section className={classes.section}>
      <h1>The Generics</h1>
      <h2>ABOUT</h2>
      <div>
        <img
          src='https://media.newyorker.com/photos/59097c7c8b51cf59fc423e77/master/w_2560%2Cc_limit/Crouch-The-Band-1.jpg'
          alt='Musical Band'
        />
        <p>
          Jonatha Brooke and Jennifer Kimball first met in 1981 while first-year students at Amherst College in Amherst, Massachusetts. Originally called simply "Jonatha and Jennifer", they performed regularly throughout the Boston area until graduation, at which time Brooke started working in a dance company and Kimball went to a publishing firm.[1]

          In 1989 the duo recorded a demo, Over Oceans, and were quickly signed by Green Linnet Records. They changed their name to The Story, and their debut album Grace in Gravity was released in 1991. Elektra Records then signed the band, reissuing the album a year later. The Angel in the House followed in 1993, but a year later The Story dissolved.[1]

          Known for their ethereal and dissonant vocal harmonies, both Brooke and Kimball have gone on to critically acclaimed solo careers. Although The Story's work has been highly regarded by critics and fans alike, both Brooke and Kimball have individually downplayed the band's work.[citation needed]
        </p>
      </div>
    </section>
  );
};

export default About;
