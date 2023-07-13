import {Link, useNavigate } from "react-router-dom"

const Item = ({id, name, img, price}) => {
    const navigate = useNavigate()

    return(
    <div>
        <h2>{name}</h2>
        <img src={img} style={{width: 300}}/>
        <p>${price}</p>
        <Link to={`/item/${id}`}>Detalle del Producto</Link>

        
    </div>
    )
}

export default Item