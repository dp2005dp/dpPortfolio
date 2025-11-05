import { VscLiveShare } from "react-icons/vsc";
import {  IoLogoGithub } from "react-icons/io";
import { motion } from "framer-motion";
import {useEffect , useState} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import './index.css';

const webProjectsList = [
    {   id : 0,
        title: "Nxt Trendz",
        description: "An e-commerce platform built with React, featuring secure login, product browsing, and responsive design.",
        link: "https://dp2005dp.github.io/nxtTrendz/",
        imageUrl : "https://github.com/user-attachments/assets/5e87ffc7-49da-49f7-80fa-3d88378de070",
        gitHubLink: "https://github.com/dp2005dp/nxtTrendz",
        userName : "rahul",
        password : "rahul@2021"
    },
    {  id : 1,
        title: "Nxt Watch",
        description: "A YouTube-inspired video app built using React with theme toggle, authentication, and dynamic routing.",
        link: "https://dp2005dp.github.io/nxtWatch/",
        imageUrl : "https://github.com/user-attachments/assets/384b025d-c7f0-40d5-b63c-5b8c049082ee",
        gitHubLink: "https://github.com/dp2005dp/nxtWatch",
        userName : "rahul",
        password : "rahul@2021"
    }, 
    {   id : 2,
        title: "CookBook",
        description: "An interactive recipe app using the MealsDB API to discover, search, and view delicious meals easily.",
        link: "https://dp2005dp.github.io/cookBook/",
        imageUrl : "https://github.com/user-attachments/assets/3c1afa3d-37e3-47b4-b27c-547c29438284",
        gitHubLink: "https://github.com/dp2005dp/cookBook",
        userName : "",
        password : "",
    },
    {   id : 3,
        title: "Jobby App",
        description: "A React-based job portal where users can explore listings, filter jobs, and apply seamlessly.",
        link: "https://dp2005dp.github.io/jobByApp/",
        imageUrl : "https://github.com/user-attachments/assets/998ae702-032b-4567-a53f-377790b8760b",
        gitHubLink: "https://github.com/dp2005dp/jobByApp",
        userName : "rahul",
        password : "rahul@2021"
    },
    {  id : 4,
        title: "App Store",
        description: "A modern React web app to explore, search, and view popular applications with a smooth user interface.",
        link: "https://dp2005dp.github.io/appStore/",
        imageUrl : "https://github.com/user-attachments/assets/f266319f-9733-411d-9a4a-e2220f7373c8",
        gitHubLink: "https://github.com/dp2005dp/appStore",
        userName : "",
        password : "",
    },
]

const gameProjectsList = [
    {   id : 0,
        title: "Rock Paper Scissors",
        description: "A fun React game where players challenge the computer with smooth animations and score tracking.",
        link: "https://dp2005dp.github.io/rockPaperScissors/",
        imageUrl : "https://github.com/user-attachments/assets/e4d37780-3137-4d87-968d-a19f7bbefbb0",
        gitHubLink: "https://github.com/dp2005dp/rockPaperScissors",
    },
    {  id : 1,
        title: "Emoji Game",
        description:"A memory-based React game where users match unique emojis without repeating selections.",
        link: "https://dp2005dp.github.io/emojiGame/",
        imageUrl : "https://github.com/user-attachments/assets/48aae5ea-387f-41d3-a6b1-46769164f184",
        gitHubLink: "https://github.com/dp2005dp/emojiGame",
    }, 
    {   id : 2,
        title: "Match Game",
        description: "An interactive React game where players match images against categories before the timer runs out.",
        link: "https://dp2005dp.github.io/matchGame/",
        imageUrl : "https://github.com/user-attachments/assets/393be50e-b840-43ec-af1f-8292c19f6528",
        gitHubLink: "https://github.com/dp2005dp/matchGame",
    },
]

const Projects = () => {

       useEffect(() => {
              AOS.init({
              duration: 2000,
              })
              }, []);
       

        const [projectId , setProjectId] = useState("")

        const viewProjectPassword = (id) => {
               setProjectId(id)
        }

    return ( 

     <div className="projects-container">
         <h1 className="main-heading">Projects</h1>
         <h1 className="project-heading">Web Projects</h1>
         <p className="project-descripition">Building modern and responsive web applications using React.js, focused on clean UI and smooth user experience.</p>

        <ul 
            className="projects-ul"
        
            >
             {
                 webProjectsList.map(eachProject => (
                  <motion.li 
                            key={eachProject.id} 
                            className="projects-li"
                            whileHover={{ scale: 0.95  ,  boxShadow: "0px 4px 16px 0px  #bfbfbfbf"}}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0 }}
                            data-aos="slide-up"
                            onMouseEnter={() => viewProjectPassword(eachProject.id)}
                            onMouseLeave={() => setProjectId("")}
                            >
                            <img src={eachProject.imageUrl} className="image" alt={eachProject.title} />
                           
                            <h2 className="title">{eachProject.title}</h2>
                            <div className="flex-container">
                                <div className="link-flex-container">
                                <VscLiveShare color="skyblue" className="share-icon" />
                                <a href={eachProject.link} target="_blank" rel="noopener noreferrer" className="link">Live Demo</a>
                                </div>
                                <div className="link-flex-container">
                                <a href={eachProject.gitHubLink} target="_blank" rel="noopener noreferrer" className="link">
                                    <IoLogoGithub className="github-icon" />
                                </a>
                                </div>
                            </div>
                            <p className="descripition">{eachProject.description}</p>
                            {eachProject.userName.length > 1 &&  projectId === eachProject.id && (
                                <>
                                <p className="note-content"><strong>Note:</strong> This project integrates the NxtWave login API for authentication.</p>
                                <div className="user-pasword-container">
                                <p className="user-pasword">Username : {eachProject.userName}</p>
                                <p className="user-pasword">Password : {eachProject.password}</p>
                                </div>
                               </>
                            )}
                            
                            </motion.li>
                     ))
                  }
        </ul>

          <h1 className="project-heading">Game Projects</h1>
          <p className="project-descripition">Creating fun and interactive React-based games that combine logic, design, and engaging gameplay.</p>

          <ul className="projects-ul">
             {
                gameProjectsList.map(eachProject => (
                    <motion.li 
                            key={eachProject.id} 
                            className="projects-li"
                            whileHover={{ scale: 0.95  ,  boxShadow: "0px 4px 16px 0px  #bfbfbfbf"}}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0 }}
                            data-aos="zoom-in"
                            >
                        <img src={eachProject.imageUrl} className="image" alt={eachProject.title} />
                        <h2 className="title">{eachProject.title}</h2>
                        <div className="flex-container">
                        <div className="link-flex-container">
                             <VscLiveShare color="skyblue" className="share-icon"/>
                            <a href={eachProject.link} target="_blank" rel="noopener noreferrer" className="link">Live Demo</a>
                           
                        </div>
                       
                       <div className="link-flex-container">
                            <a href={eachProject.gitHubLink} target="_blank" rel="noopener noreferrer" className="link">   <IoLogoGithub className="github-icon"/></a>
                         
                       </div>
                       </div>
                       
                         <p className="descripition">{eachProject.description}</p>
                      
                    </motion.li>
                 ))
             }
         </ul>
     </div>
)
}

export default Projects;