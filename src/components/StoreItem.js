import {Button, Card} from "react-bootstrap";
import {FormatCurrency} from "../utilities/FormatCurrency";
import {useState} from "react";



export function StoreItem({id, name, price, imgUrl}) {

    const [quantity, setQuantity] = useState(0);

    const [clickBasket, setClickBasket] = useState(0);
    const onClickAdd = () => {
     const item ={
         id,
         name,
         price,
         type: clickBasket
     };

    }



        return <Card className="h-100">
        <Card.Img variant="top"
                  src={imgUrl} height="350px"
                  style={{objectFit: "cover"}} />

        <Card.Body className="d-flex-column">
            <Card.Title className="d-flex
            justify-content-space-between align-items-baseline
            mb-4">
                <span className="fs-2">{name}</span>
                <span className="ms-2 text-muted">{FormatCurrency(price)}</span>

            </Card.Title>
            <div className="mt-auto">
                {quantity === 0 ? <Button className="w-100" onClick={onClickAdd}>+ Add To Cart</Button>
                    : null}
                     <div className="d-flex align-items-center flex-column" style={{gap: ".5 rem"}}>

                        <div className="d-flex align-items-center justify-content-center" style={{gap: ".5 rem"}}>

                            <Button onClick={() => setQuantity(quantity > 0 ? quantity-1 : false)}>

                                -</Button>
                            <div>
                                <span className="fs-3">{quantity}</span> in cart
                            </div>
                            <Button onClick={() => setQuantity(quantity+1)}>+</Button>
                        </div>

                        <Button variant="danger" size="sm" onClick={()=> setQuantity(0) }>Remove</Button>



                    </div>

            </div>

        </Card.Body>
    </Card>
}