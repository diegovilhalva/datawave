import { portfolio } from "../../data"
import "./Portfolio.css"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"

const Portfolio = () => {
    return (
        <section id="portfolio">
            <div className="container">
                <div className="section-header">
                    <h3>Nosso Portfólio</h3>
                    <h2>Soluções Inovadoras de TI Que Geram Resultados Reais</h2>
                </div>
                <Swiper className="portfolio-wrapper" slidesPerView={1} spaceBetween={30}
                    modules={[Autoplay]}
                    autoplay={true}
                    loop={true}
                    speed={1000}
                    grabCursor={true}
                    breakpoints={{
                        600: { slidesPerView: 2 },
                        900: { slidesPerView: 3 }
                    }}>
                    {portfolio.map((list, i) => (
                        <SwiperSlide className="portfolio" key={i}>
                            <div className="image-wrapper">
                                <img src={list.image} alt="" />
                            </div>
                            <div className="content-wrapper">
                                <h3 className="title">{list.title}</h3>
                                <p className="description">{list.description}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default Portfolio