import ItemCount from "./ItemCount"


const ItemDetail = ({id,img,price,name,category,description,stock}) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>{category}</p>
            <img src={img} style={{width: 300}}/>
            <p>${price}</p>
            <p>Description:{description}</p>
            <ItemCount/>
            
        </div>
    )
}

export default ItemDetail