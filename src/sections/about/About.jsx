import AboutImage from '../../assets/about.jpg'
import CV from '../../assets/cv.pdf'
import {HiDownload} from 'react-icons/hi'
import data from './data'
import Card from '../../components/Card'
import './about.css'

const About = () => {
  return (
    <section id="about">
        <div className="container about__container">
            <div className="about__left">
                <div className="about__portrait"  data-aos="fade-in">
                    <img src={AboutImage} alt="About Image" />
                </div>
            </div>
            <div className="about__right"  data-aos="fade-down">
                <div className="about__cards">
                    {
                        data.map(item => (
                            <Card key={item.id} className="about__card">
                                <span className='about__card-icon'>{item.icon}</span>
                                <h5>{item.title}</h5>
                                <small>{item.desc}</small>
                            </Card>
                        ))
                    }
                </div>
                <p>
                My experience in web development includes Angular, React, Flutter, and other programming languages and frameworks, as well as experience with MySQL, MongoJS and the observability platform Grafana. I enjoy creating websites that not only look great but also function seamlessly for users. In addition, I am comfortable working with cross-functional teams, including designers, project managers, and other developers.                </p>
                <p>
                Throughout my career, I have worked on a variety of web development projects, ranging from mobile apps, small websites for local businesses to e-commerce platforms. I am always eager to learn new technologies and approaches to web development as well as staying up-to-date with the latest industry trends.
                </p>
                <p>
                I am excited about the opportunity to work with a company that is committed to delivering high-quality digital solutions to its clients, and I believe that my experience and passion for web development would be an asset to your team.
                </p>
                <a href={CV} download className='btn primary'>Download CV <HiDownload/></a>
            </div>
        </div>
    </section>
  )
}

export default About