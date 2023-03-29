import storeItems from "../data/items.json"
import {Col, Row} from "react-bootstrap";
import {StoreItem} from "../components/StoreItem";
import {v4 as uuidv4} from 'uuid';

export function Store(props) {
    return (
        <>
            <h1 className='Color'>Store</h1>
            <Row md={2} xs={1} lg={3} className="g-3">
                {storeItems.map(item =>
                    // <Col>{JSON.stringify(item)}</Col>
                    <Col key={item.id}>
                        <StoreItem {...item} />
                    </Col>
                )}



            </Row>


        </>

    )
}
