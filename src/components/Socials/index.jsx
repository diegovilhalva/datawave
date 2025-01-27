import "./Socials.css"
import { socialHandles } from "../../data"
import { convertHexToRGBA, cssPerfectShape } from "../../util"

const Socials = () => {
  return (
    <div className="socials">
        {socialHandles.map((list,index) => (
            <a href={list.link} key={index} target="_blank" className="icon" style={{...cssPerfectShape(40,40),background: convertHexToRGBA("--primary",0.2)}}>
                <list.icon/>
            </a>
        ))}
    </div>
  )
}

export default Socials