import Odometer from "react-odometerjs"
import "odometer/themes/odometer-theme-default.css"
import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)
import "./Achievement.css"

const Achievement = () => {
  const container = useRef(null)
  const [clients, setClients] = useState(0)
  const [satisfaction, setSatisfaction] = useState(0)
  const [projects, setProjects] = useState(0)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setClients(200)
      setSatisfaction(200)
      setProjects(500)
    }, 2000);
    return () => clearTimeout(timeout)
  }, [])

  useGSAP(() => {
    gsap.timeline({
      delay: 0.5,
      scrollTrigger: {
        trigger: container.current,
        start: "20% bottom",
        end: "bottom top",
        onEnter: () => {
          setTimeout(() => {
            setClients(200)
            setSatisfaction(200)
            setProjects(500)
          }, 2000);
        }
      }

    })
      .fromTo("#achievement .achievement", { y: 50, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.5 })
  }, { scope: container })

  return (
    <section id="achievement" ref={container}>
      <div className="container">
        <div className="achievement">
          <p className="sub-title">
            Aprovado por
          </p>
          <Odometer value={clients} className="title" />
          <p className="sub-title">Clientes</p>
          <p className="description">
            Construindo parcerias duradouras com serviços de TI confiáveis.
          </p>
        </div>
        <div className="achievement">
          <p className="sub-title">
            Mais de
          </p>
          <Odometer value={satisfaction} className="title" />
          <p className="sub-title">Clientes Satisfeitos</p>
          <p className="description">
            Entregando soluções de TI que aumentam a produtividade
          </p>
        </div>
        <div className="achievement">
          <p className="sub-title">
            Projetos
          </p>
          <Odometer value={projects} className="title" />
          <p className="sub-title">Finalizados</p>
          <p className="description">
            Desenvolvendo sistemas robustos para empresas no mundo todo.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Achievement