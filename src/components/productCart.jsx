import "./productCart.css";
export default function ProductCart(props){
    return(
        <div>
          <img src = {props.img}/>
          <span>{props.name}</span>
          <span>{props.price}</span>
            <p>{props.description}</p>
        </div>
    )

}