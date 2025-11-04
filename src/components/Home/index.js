
import Header from '../Header'
import About from '../About'
import Skills from '../Skills'
import  Projects from '../Projects' 
import './index.css';

const Home = ( ) => (
      <div className="home-bg-container">
            <div className="responsive-container">
             <Header/>
                        <section id="about">
                        <About />
                        </section>
                 
                        <section id="skills">
                        <Skills />
                        </section>

                        <section id="projects">
                        <Projects />
                        </section>                   
           </div>
         </div>
)

export default Home;