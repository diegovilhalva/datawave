import { Link } from "react-scroll"
import DataWaveLogo from "../../components/DataWaveLogo"
import Socials from "../../components/Socials"
import { contactInfo, footer } from "../../data"
import "./Footer.css"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { useRef } from "react"
gsap.registerPlugin(ScrollTrigger)

const Footer = () => {
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
            .fromTo(["footer .newsletter h2","footer .newsletter p","footer .newsletter .subscribe","footer .box-wrapper .box"],
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, stagger: 0.5 })

    }, { scope: container })
    return (
        <footer ref={container}>
            <div className="container">
                <section className="newsletter">
                    <h2>Newsletter</h2>
                    <p>Fique por dentro das nossas novidades e eventos. Assine nossa newsletter</p>
                    <div className="subscribe">
                        <input type="email" name="email" placeholder="Escreva seu E-mail" />
                        <button type="button">Assinar</button>
                    </div>
                </section>
                <section className="box-wrapper">
                    <div className="box">
                        <DataWaveLogo />
                        <p>Inovando soluções de TI para a transformação dos negócios</p>
                        <Socials />
                    </div>
                    {footer.map((list, i) => (
                        <div className="box" key={i}>
                            <h3 className="title">{list.title}</h3>
                            <div className="routes">
                                {
                                    list.subRoutes.map((route, i) => (
                                        <Link to={route.id} key={i} className="route">{route.title}</Link>
                                    ))
                                }
                            </div>
                        </div>
                    ))}
                    <div className="box">
                        <h3 className="title">Detalhes para Contato</h3>
                        {contactInfo.map((contact, i) => (
                            <div className="route" key={i}>
                                <div className="icon">
                                    <contact.icon />
                                </div>
                                <p>{contact.value}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </footer>
    )
}

export default Footer