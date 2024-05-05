import { useEffect } from "react"
import '../index.css'
function Header({title,iconname}){

    const date = new Date();
    const formatedDate = date.toLocaleDateString('es-ES',{
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })

    const time = new Date()
    const formatedTime = time.toLocaleTimeString('en-US',{
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true 
    })

    return(
        <div className="headerComponent">
            <h1 className="title"><box-icon animation="tada" type='solid' color="#fca311" size='sm' name={iconname}></box-icon>{title}</h1>
            <h1>{formatedDate}</h1>
            <h1>{formatedTime}</h1>
        </div>
    )
}

export default Header