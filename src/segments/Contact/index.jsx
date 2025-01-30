import Socials from "../../components/Socials"
import { contactInfo } from "../../data"
import { cssPerfectShape } from "../../util"
import "./Contact.css"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { useRef } from "react"
gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
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
            .fromTo("#contact .contact-info-wrapper .contact-info", { x: -50, opacity: 0 }, { x: 0, opacity: 1, stagger: 0.5 })
            .fromTo("#contact .socials .icon",
                { x: 50, opacity: 0 },
                { x: 0, opacity: 1, stagger: 0.5 }
            )
            .fromTo(["#contact form h2", "#contact form .description", "#contact form .control",
                "#contact form .btn"],
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, stagger: 0.5 })

    }, { scope: container })
    return (
        <section id="contact" ref={container}>
            <div className="container">
                <div className="contact-info-wrapper">
                    {contactInfo.map((info, i) => (
                        <div className="contact-info" key={i}>
                            <div className="icon" style={{ ...cssPerfectShape(70, 70) }}>
                                <info.icon />
                            </div>
                            <div className="info">
                                <h3>{info.title}</h3>
                                <p className="description">{info.description}</p>
                                <h4 className="value">{info.value}</h4>
                            </div>
                        </div>
                    ))}
                    <Socials />
                </div>
                <form>
                    <div className="top">
                        <h2>Entre em Contato</h2>
                        <p className="description">
                            Tem um projeto em mente ou precisa de orientação especializada? Estamos aqui para ajudar! Fale com nossa equipe para uma consultoria personalizada ou para dar o primeiro passo no seu próximo grande projeto.
                        </p>
                    </div>
                    <div className="middle">
                        <input type="text" placeholder="Seu Nome" name="fullName" className="control" />
                        <input type="email" placeholder="Seu E-mail" name="email" className="control" />
                        <input type="tel" placeholder="Seu Número de Telefone" name="phoneNumber" className="control" />
                        <textarea name="message" placeholder="Sua Mensagem" className="control"></textarea>
                    </div>
                    <div className="bottom">
                        <button type="button" className="btn primary">Enviar Mensagem</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact