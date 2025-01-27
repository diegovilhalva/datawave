import { Link } from "react-scroll"
import { navRoutes } from "../../data"
import "./Sidebar.css"
import { FaTimes } from "react-icons/fa"
import { cssPerfectShape } from "../../util"

const Sidebar = ({open,onClose}) => {
    return (
        <div className={`sidebar ${open && 'active'}`}>
            <div className="top">
                <div className="close-btn" onClick={onClose} style={{...cssPerfectShape(40,40)}}>
                    <FaTimes/>
                </div>
            </div>
            <div className="middle">
                {navRoutes.map((route, i) => (
                    <Link key={i} to={route.id} className="route" activeClass="active" smoothtrue spy={true}
                        offset={-50}>{route.name}</Link>
                ))}
            </div>
        </div>
    )
}

export default Sidebar