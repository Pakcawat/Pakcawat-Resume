import Image from "next/image";
import Link from "next/link";
import Profile_first from './Profile_first.js';
import About from './About.js';
import Experience from './Experience.js'
import Contact from './Contact.js'
import Work from './Work.js'
import Hobbies from './Hobbies.js'
import Skills from './Skills.js'


export default function Home() {
  return (
    <main className="stylesmain">
      <div className="container_1 ">
        <Profile_first />

        <div className="information ">

          <About />
          <Skills /> 
          <Work />
          <Experience />
          <Hobbies />
          <Contact />
        </div>
      </div>
    </main>
  );
}
