import { IoLogoLinkedin ,  IoLogoGithub } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";
import { useEffect } from "react";
import Popup from "reactjs-popup"
import AOS from "aos";
import "aos/dist/aos.css";
import './index.css';

const About = () =>  {
       
     useEffect(() => {
          AOS.init({
          duration: 2000,
             })
     }, []);

     return (
       <div className="about-container" data-aos="zoom-in">
        <div className="responsive-about-container">
           <div className="about-width">
                <h1 className="name">Durgaprasad M E</h1>
                <p className="role"> I’m a <span className="span">Full Stack Developer</span> </p>
                <p  className="descripition">Passionate about front-end development, building responsive and engaging web experiences with React.</p>     

                <div className ="conatct-icons-conatainer">
                    <a href="https://linkedin.com/in/durgaprasad78"  target="_blank"  rel="noopener noreferrer" className="about-link">  <IoLogoLinkedin className="conatct-icons"/></a>
                    <a href="https://github.com/dp2005dp?tab=repositories"  target="_blank"  rel="noopener noreferrer" className="about-link">   <IoLogoGithub className="conatct-icons" /></a>
                    <Popup 
                        trigger={
                                 <BiLogoGmail className="conatct-icons" />
                        }
                    >
                        <p className="gmail">meprasad78@gmail.com</p>
                    </Popup>
                </div>
           </div>
           <div className="profile-order">
              <img src="https://res.cloudinary.com/djcrncwbk/image/upload/e_background_removal/f_png/v1762269593/WhatsApp_Image_2025-11-04_at_8.48.23_PM_zgovhr.jpg" alt="developer durgaprasad" className="profile-pik"/>
             </div>
     </div>
     </div>
)
}
export default About;