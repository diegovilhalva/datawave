import VRImage from "../../assets/vr.png"
import PersonnelImage from "../../assets/pic-1.png"
import { ourApproaches, whyChooseUs } from "../../data"
import "./About.css"
import { convertHexToRGBA, cssPerfectShape } from "../../util"
import { Link } from "react-scroll"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { useRef } from "react"
gsap.registerPlugin(ScrollTrigger)
const About = () => {
    const container = useRef()
    useGSAP(() => {
        gsap.timeline({
            delay: 0.5,
            scrollTrigger: {
                trigger: container.current,
                start: "20% bottom",
                end: "bottom top"
            }
        })
            .fromTo(["#about .vision-item", "#about .vision-item .image-container", "#about h2", "#about .approach", "#about .contact-us"], { y: 50, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.5 })
            .fromTo(["#about .spotlight","#about .why-choose-us-container .why-choose-us"], { x: 50, opacity: 0 }, { x: 0, opacity: 1, stagger: 0.5 })
           
    }, { scope: container })
    return (
        <section id="about" ref={container}>
            <div className="container" ref={container}>
                <div className="left-column">
                    <div className="spotlight" />
                    <div className="vision-container">
                        <div className="vision-item">
                            <div className="vision-content">
                                <h2>Nossa Visão</h2>
                                <h4 className="title">Transformando Tecnologia em Progresso</h4>
                                <p className="description">
                                    Nossa visão é capacitar empresas com soluções de TI inovadoras e funcionais que impulsionam o crescimento, otimizam processos e aumentam a competitividade.
                                </p>
                            </div>
                            <div className="image-container">
                                <img src={VRImage} alt="" />
                            </div>
                        </div>
                        <div className="vision-item">
                            <div className="spotlight" />
                            <div className="vision-content">
                                <h2>Quem Somos</h2>
                                <h4 className="title">Seu Parceiro Tecnológico de Confiança</h4>
                                <p className="description">
                                    Somos profissionais experientes em TI, entregando soluções tecnológicas personalizadas para atender às necessidades únicas de cada cliente.
                                </p>
                            </div>
                            <div className="image-container">
                                <img src={PersonnelImage} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="why-choose-us-container">
                        {whyChooseUs.map((list, i) => (
                            <div className="blur why-choose-us" style={{ background: convertHexToRGBA('--bg-secondary', 0.3) }} key={i}>
                                <div className="icon">
                                    <img src={list.imageIcon} alt="" />
                                </div>
                                <h3 className="title">{list.title}</h3>
                                <p className="description">{list.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="right-column">
                    <h2 className="title">Nossa Métodologia</h2>
                    <div className="boxes-wrapper">
                        {ourApproaches.map((approach, i) => (
                            <div className="approach" key={i}>
                                <div className="icon" style={{
                                    ...cssPerfectShape(50, 50),
                                    background: convertHexToRGBA('--primary', 0.1)
                                }}>
                                    <approach.icon />
                                </div>
                                <div>
                                    <h3 className="title">{approach.title}</h3>
                                    <p className="description">{approach.description}</p>
                                </div>
                            </div>
                        ))}
                        <div className="contact-us">
                            <h2 className="title">
                                Entre em contato para ter as melhores soluções em TI
                            </h2>
                            <Link to="contact" smooth={true} className="btn primary">Entrar em contato</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About