import './Skills.css';
import ImgHTML from './../../../assets/images/html_logo.png';
import ImgCSS from './../../../assets/images/css_logo.png';
import ImgJs from './../../../assets/images/js_logo.svg.png';
import ImgTs from './../../../assets/images/ts_logo.png';
import ImgC from './../../../assets/images/c_logo.png';
import ImgCp from './../../../assets/images/cp_logo.png';
import ImgJava from './../../../assets/images/java_logo.png';
import ImgPHP from './../../../assets/images/php_logo.png';
import ImgReact from './../../../assets/images/react_logo.png';
import ImgSQLite from './../../../assets/images/sqlite_logo.png';
import ImgVercel from './../../../assets/images/vercel_logo.png';
import ImgFlutter from './../../../assets/images/flutter_logo.png';
import ImgGithub from './../../../assets/images/github_circle_logo.png';
import ImgVite from './../../../assets/images/vite_logo.svg.png';
import ImgFigma from './../../../assets/images/figma_logo.png';
import ImgAi from './../../../assets/images/ai_logo.png';
import ImgAe from './../../../assets/images/ae_logo.png';

function Skills() {
  return (
    <div className='skills'>
    <h2>Skills</h2>
    <div className="skills-container">
      <div className="skills-icon">
        <div className='skills-peace'>
          <img src={ImgHTML} alt="My Icon" className="profile-image" />
          <p>HTML</p>
        </div>
        <div className='skills-peace'>
          <img src={ImgCSS} alt="My Icon" className="profile-image" />
          <p>CSS</p>
        </div>
        <div className='skills-peace'>
          <img src={ImgJs} alt="My Icon" className="profile-image" />
          <p>JavaScript</p>
        </div>
        <div className='skills-peace'>
          <img src={ImgTs} alt="My Icon" className="profile-image" />
          <p>TypeScript</p>
        </div>
        <div className='skills-peace'>
          <img src={ImgC} alt="My Icon" className="profile-image" />
          <p>C</p>
        </div>
        <div className='skills-peace'>
          <img src={ImgCp} alt="My Icon" className="profile-image" />
          <p>C++</p>
        </div>
        <div className='skills-peace'>
          <img src={ImgJava} alt="My Icon" className="profile-image" />
          <p>Java</p>
        </div>
        <div className='skills-peace'>
          <img src={ImgPHP} alt="My Icon" className="profile-image" />
          <p>PHP</p>
        </div>
        <div className='skills-peace'>
          <img src={ImgReact} alt="My Icon" className="profile-image" />
          <p>React</p>
        </div>
        <div className='skills-peace'>
          <img src={ImgSQLite} alt="My Icon" className="profile-image" />
          <p>SQLite</p>
        </div>
        <div className='skills-peace'>
          <img src={ImgVercel} alt="My Icon" className="profile-image" />
          <p>Vercel</p>
        </div>
        <div className='skills-peace'>
          <img src={ImgFlutter} alt="My Icon" className="profile-image" />
          <p>Flutter</p>
        </div>
        <div className='skills-peace'>
          <img src={ImgGithub} alt="My Icon" className="profile-image" />
          <p>Github</p>
        </div>
        <div className='skills-peace'>
          <img src={ImgVite} alt="My Icon" className="profile-image" />
          <p>Vite</p>
        </div>
        <div className='skills-peace'>
          <img src={ImgFigma} alt="My Icon" className="profile-image" />
          <p>Figma</p>
        </div>
        <div className='skills-peace'>
          <img src={ImgAi} alt="My Icon" className="profile-image" />
          <p>Adobe <br />Illustrator</p>
        </div>
        <div className='skills-peace'>
          <img src={ImgAe} alt="My Icon" className="profile-image" />
          <p>Adobe <br />After Effects</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Skills;
