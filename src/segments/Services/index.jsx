
import { FaArrowRightLong } from "react-icons/fa6"
import { services } from "../../data"
import { cssPerfectShape, convertHexToRGBA } from "../../util"
import "./Services.css"
import { Link } from "react-scroll"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { useRef } from "react"
gsap.registerPlugin(ScrollTrigger)
const Services = () => {
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
            .fromTo(["#services .section-header h3", "#services .section-header h2",
                "#sevices .services .service","#services .spotlight"],
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, stagger: 0.5 })

    }, { scope: container })
    return (
        <section id="services" ref={container}>
            <div className="spotlight" />
            <div className="container">
                <div className="section-header">
                    <h3>Nossos Serviços</h3>
                    <h2> Potencializando Seu Negócio com Soluções de TI Sob Medida</h2>
                </div>
                <div className="services">
                    {services.map((service, i) => (
                        <div className="blur service" key={i} style={{
                            background: convertHexToRGBA('--bg-secondary', 0.8)
                        }}>
                            <div className="icon" style={{
                                ...cssPerfectShape(70, 70),
                                background: convertHexToRGBA('--primary', 0.1)
                            }}>
                                <service.icon />
                            </div>
                            <div className="middle">
                                <h4 className="title">{service.title}</h4>
                                <p className="line-clamp-3 description">
                                    {service.description}
                                </p>
                            </div>
                            <div className="bottom">
                                <Link to="contact" className="btn primary">Explorar <FaArrowRightLong /> </Link>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services