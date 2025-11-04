import { IoLogoHtml5  , IoLogoCss3 , IoLogoNodejs , IoLogoPython} from "react-icons/io";
import { BsBootstrapFill } from "react-icons/bs";
import { IoLogoReact ,  IoLogoJavascript } from "react-icons/io5";
import { PiFileSql } from "react-icons/pi";
import { SiExpress } from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";
import './index.css';      
import { useEffect , useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

 

const Skills = () => {

        useEffect(() => {
        AOS.init({
        duration: 2000,
        })
        }, []);
    
    const [cardId , setCard] = useState("")
     
    const cardTrigger = (id) => {
           setCard(id)
    }
     
    const cardTriggerLeave = () => {
           setCard("")
    }

    return (
       <div className="skills-container">
          <h1 className="main-heading">Skills </h1>
          <h1 className="skill-heading"><span className="span-skill-heading">Front-</span>End</h1>
          
         <div className="mobile-skills-view">
          <ul  className="skills-ul">
                <li  className="skills-li" data-aos="zoom-in-left" onMouseEnter={() => cardTrigger("0")} onMouseLeave={cardTriggerLeave}>
                       <IoLogoHtml5 className="skills-icons" color="#E34F26" />
                        <p className="skill-name">Html5</p>
                        {
                            cardId === "0" &&  <div className="link-flex-container">
                            <a href ="https://certificates.ccbp.in/intensive/static-website?id=KUETPSSQTM" target="_blank"  rel="noopener noreferrer" className="link">View Certificate</a>
                            <FaExternalLinkAlt size={20} color="skyblue" />
                        </div>
                        }
                       
                        
                </li>
                <li  className="skills-li" data-aos="zoom-in-left" onMouseEnter={() => cardTrigger("1")} onMouseLeave={cardTriggerLeave}>
                       <IoLogoCss3  className="skills-icons" color="#1572B6" />
                        <p className="skill-name">css</p>
                         {
                            cardId === "1" &&  <div className="link-flex-container">
                            <a href ="https://certificates.ccbp.in/intensive/static-website?id=KUETPSSQTM" target="_blank"  rel="noopener noreferrer" className="link">View Certificate</a>
                            <FaExternalLinkAlt size={20} color="skyblue" />
                        </div>
                        }
                </li>
                <li  className="skills-li" data-aos="zoom-in-left" onMouseEnter={() => cardTrigger("2")} onMouseLeave={cardTriggerLeave}>
                      < BsBootstrapFill className="skills-icons" color="#7952B3" />
                        <p className="skill-name">Bootstrap</p>
                         {
                            cardId === "2" &&  <div className="link-flex-container">
                            <a href ="https://certificates.ccbp.in/intensive/responsive-website?id=EMBELAJMGZ" target="_blank"  rel="noopener noreferrer" className="link">View Certificate</a>
                            <FaExternalLinkAlt size={20} color="skyblue" />
                        </div>
                        }
                </li>
                <li  className="skills-li" data-aos="zoom-in-left" onMouseEnter={() => cardTrigger("3")} onMouseLeave={cardTriggerLeave}>
                     <IoLogoJavascript className="skills-icons" color="#F7DF1E" />
                        <p className="skill-name">JavaScript</p>
                         {
                            cardId === "3" &&  
                            <div>
                            <div className="link-flex-container">
                            <a href ="https://certificates.ccbp.in/intensive/dynamic-web-application?id=RQRAKALINS" target="_blank"  rel="noopener noreferrer" className="link">Dynamic Web Application</a>
                              <FaExternalLinkAlt size={20} color="skyblue" />
                              </div>
                             <div className="link-flex-container">
                             <a href ="https://certificates.ccbp.in/intensive/javascript-essentials?id=HKXJWTDGOB" target="_blank"  rel="noopener noreferrer" className="link">JavaScript Essentials</a>
                             <FaExternalLinkAlt size={20} color="skyblue" />
                        </div>
                        </div>
                        }
                </li>
                <li  className="skills-li" data-aos="zoom-in-left" onMouseEnter={() => cardTrigger("4")} onMouseLeave={cardTriggerLeave}>
                     < IoLogoReact className="react-icon" color="#61DAFB" />
                        <p className="skill-name">React.js</p>
                         {
                            cardId === "4" &&  <div className="link-flex-container">
                            <a href ="https://certificates.ccbp.in/intensive/react-js?id=CAIYNRUXRA" target="_blank"  rel="noopener noreferrer" className="link">View Certificate</a>
                            <FaExternalLinkAlt size={20} color="skyblue"/>
                        </div>
                        }
                </li>
                
          </ul>
          </div> 
           <h1 className="skill-heading"><span className="span-skill-heading">Back-</span>End</h1>
               <ul  className="skills-ul">
                <li  className="skills-li" data-aos="zoom-in-right" onMouseEnter={() => cardTrigger("5")} onMouseLeave={cardTriggerLeave}>
                          <IoLogoNodejs className="skills-icons"  color="#339933" />
                        <p className="skill-name">Node.js</p>
                         {
                            cardId === "5" &&  <div className="link-flex-container">
                            <a href ="https://certificates.ccbp.in/intensive/node-js?id=QHXEMCFDIR" target="_blank"  rel="noopener noreferrer" className="link">View Certificate</a>
                            <FaExternalLinkAlt size={20} color="skyblue" />
                        </div>
                        }
                </li>
                <li  className="skills-li" data-aos="zoom-in-right">
                     <SiExpress className="skills-icons" color="#4B5563" />
                        <p className="skill-name">Express.js</p>
                        
                </li>
                <li  className="skills-li" data-aos="zoom-in-right" onMouseEnter={() => cardTrigger("6")} onMouseLeave={cardTriggerLeave}>
                    < IoLogoPython className="skills-icons" color="#3776AB" />
                        <p className="skill-name">Python</p>
                         {
                            cardId === "6" &&  <div className="link-flex-container">
                            <a href ="https://certificates.ccbp.in/intensive/programming-foundations?id=EACTIEMGXV"
                            target="_blank"  rel="noopener noreferrer" className="link">View Certificate</a>
                            <FaExternalLinkAlt size={20} color="skyblue" />
                        </div>
                        }
                </li>
                <li  className="skills-li" data-aos="zoom-in-right" onMouseEnter={() => cardTrigger("7")} onMouseLeave={cardTriggerLeave}>
                     < PiFileSql className="skills-icons" color="#4479A1" />
                        <p className="skill-name">Sql</p>
                         {
                            cardId === "7" &&  <div className="link-flex-container">
                            <a href ="https://certificates.ccbp.in/intensive/introduction-to-databases?id=ZVFYEILOPL" target="_blank"  rel="noopener noreferrer" className="link">View Certificate</a>
                            <FaExternalLinkAlt size={20} color="skyblue" />
                        </div>
                        }
                </li>
                
          </ul>

       </div>
)
}

export default Skills;