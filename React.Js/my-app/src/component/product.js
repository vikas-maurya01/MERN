import './product.css';
import ProductItem from './ProductItem'
import Card from './Card'

function Product() {
    const resp = [
        {
            id: 1,
            name: "ESP32",
            date: "2025-05-10"

        },
        {
            id: 2,
            name: "Moter",
            date: "2000-01-12"
        },
        {
            id: 3,
            name: "Pump",
            date: "2002-04-22"
        },
        {
            id: 4,
            name: "DHT 11",
            date: "2003-05-21"
        }
    ]
    return (
        <Card>
            <ProductItem name={resp[0].name} pdate={resp[0].date}/>
            <ProductItem name={resp[1].name} pdate={resp[1].date}/>
            <ProductItem name={resp[2].name} pdate={resp[2].date}/>
            <ProductItem name={resp[3].name} pdate={resp[3].date}/>
        </Card>
    )
}

export default Product