import { Link } from "react-scroll"
import DataWaveLogo from "../../components/DataWaveLogo"
import Socials from "../../components/Socials"
import { contactInfo, footer } from "../../data"
import "./Footer.css"

const Footer = () => {
    return (
        <footer>
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