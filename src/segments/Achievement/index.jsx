import Odometer from "react-odometerjs"
import "odometer/themes/odometer-theme-default.css"
import { useEffect, useState } from "react"

import "./Achievement.css"

const Achievement = () => {
  const [clients, setClients] = useState(0)
  const [satisfaction, setSatisfaction] = useState(0)
  const [projects, setProjects] = useState(0)
  useEffect(() => {
    const timeout =  setTimeout(() => {
      setClients(200)
      setSatisfaction(200)
      setProjects(500)
    }, 2000);
    return () => clearTimeout(timeout)
  }, [])

  return (
    <section id="achievement">
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