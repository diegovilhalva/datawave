import { Autoplay } from "swiper/modules"
import "./Testimonials.css"
import { Swiper, SwiperSlide } from "swiper/react"
import { clientsReviews } from "../../data"
import { convertHexToRGBA, cssPerfectShape, starDecoder } from "../../util"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { useRef } from "react"
gsap.registerPlugin(ScrollTrigger)
const Testimonials = () => {
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
            .fromTo(["#testimonials .section-header h3", "#testimonials .section-header h2",
                "#testimonials .testimonial","#testimonials .spotlight"],
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, stagger: 0.5 })

    }, { scope: container })
    return (
        <section id="testimonials" ref={container}>
            <div className="container">
                <div className="spotlight"/>
                <div className="section-header">
                    <h3>O Que Nossos Clientes Dizem</h3>
                    <h2>Referência Mundial em Soluções de TI Inovadoras</h2>
                </div>

                <Swiper className="testimonials-wrapper" slidesPerView={1} spaceBetween={30}
                    modules={[Autoplay]}
                    autoplay={true}
                    loop={true}
                    speed={1000}
                    grabCursor={true}
                    breakpoints={{
                        600: { slidesPerView: 2 },
                        900: { slidesPerView: 3 }
                    }}>
                    {clientsReviews.map((client, i) => (
                        <SwiperSlide className="blur testimonial" style={{
                            background:convertHexToRGBA('--bg-secondary',0.5)
                        }} key={i}>
                            <div className="top">
                                <p className="content">{client.content}</p>
                            </div>
                            <div className="bottom">
                                <div className="star-container">
                                    {starDecoder(client.rating)}
                                </div>
                                <div style={{...cssPerfectShape(60,60)}} className="profile">
                                    <img src={client.image} alt="" />
                                </div>
                                <h3 className="name">{client.name}</h3>
                                <p className="job-title">{client.jobTitle}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </section>
    )
}

export default Testimonials