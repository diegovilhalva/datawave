import { convertHexToRGBA } from "../../util"
import { Link } from "react-scroll"
import { FaArrowTrendUp } from "react-icons/fa6"
import { FaProjectDiagram } from "react-icons/fa"
import heroImage from "../../assets/hero.png"
import BoxAnimation from "../../assets/BoxAnimation"
import "./Hero.css"
import gsap from "gsap"
import { useEffect } from "react"
const Hero = () => {
    useEffect(() => {
        gsap.timeline({ delay: 0.5 })
            .fromTo("#hero .hero-subtitle", { x: -20, opacity: 0 }, { x: 0, opacity: 1 })
            .fromTo("#hero .hero-title", { y: 20, opacity: 0 }, { y: 0, opacity: 1 })
            .fromTo("#hero .hero-image", { y: -20, opacity: 0 }, { y: 0, opacity: 11 })
            .fromTo("#hero .hero-description", { y: -20, opacity: 0 }, { y: 0, opacity: 1 })
            .fromTo("#hero .buttons-wrapper", { y: 20, opacity: 0 }, { y: 0, opacity: 1 })
    }, [])
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