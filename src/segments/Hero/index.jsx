import { convertHexToRGBA } from "../../util"
import { Link } from "react-scroll"
import { FaArrowTrendUp } from "react-icons/fa6"
import { FaProjectDiagram } from "react-icons/fa"
import heroImage from "../../assets/hero.png"
import BoxAnimation from "../../assets/BoxAnimation"
import "./Hero.css"
const Hero = () => {
    return (
        <section id="hero">
            <BoxAnimation />
            <div className="container">
                <div>
                    <h4 className="text-primary hero-subtitle" style={{ background: convertHexToRGBA('--primary', 0.2) }}>Inovação Digital e Expansão</h4>
                    <h1 className="hero-title">Construa, Inove e Transforme com a Gente</h1>
                    <p className="hero-description"> A Datawave dá vida às suas ideias com soluções personalizadas em software, web e mobile. Do conceito ao lançamento, impulsionamos o seu negócio.</p>
                    <div className="buttons-wrapper">
                        <Link to="contact" smooth={true} className="btn primary">
                            Saiba Mais <FaArrowTrendUp />
                        </Link>
                        <Link to="projects" smooth={true} className="btn">
                            Nossos Serviços <FaProjectDiagram />
                        </Link>
                    </div>
                </div>
                <div className="hero-image">
                    <img src={heroImage} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Hero