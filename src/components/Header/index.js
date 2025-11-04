import "./index.css"

const Header = () => (
      <div className="header-container">
        <h1 className="logo"><span className="logo-span-d">D</span><span className="logo-span-p">p</span></h1>
        <ul className="nav-contaier">
            <li className="nav-list">
              <a href="#about" className="nativeRoute" >
                  <p className="nav-features">About</p>
              </a>
              
            </li>
            <li className="nav-list">
                 <a href="#skills" className="nativeRoute" >
                   <p className="nav-features">Skills</p>
                </a>
            
             </li>
            <li className="nav-list">
                 <a href="#projects" className="nativeRoute" >
                      <p className="nav-features">Projects</p>
                </a>
              </li>
        </ul>
      </div>
)


export default Header