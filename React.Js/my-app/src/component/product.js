import './product.css';
import ProductItem from './ProductItem'
import Card from './Card'

function Product() {
    const resp = [
        {
            name: "vikas",
            date: 22,
            month: "May",
            year: 2001

        },
        {
            name: "Book",
            date: 12,
            month: "Jan",
            year: 2000
        },
        {
            name: "Nancy",
            date: 22,
            month: "April",
            year: 2002
        },
        {
            name: "Jaanu",
            date: 22,
            month: "Aug",
            year: 2003
        }
    ]
    return (
        <Card>
            <ProductItem name={resp[0].name} day={resp[0].date} month={resp[0].month} year={resp[0].year}></ProductItem>
            <ProductItem name={resp[1].name} day={resp[1].date} month={resp[1].month} year={resp[1].year}></ProductItem>
            <ProductItem name={resp[2].name} day={resp[2].date} month={resp[2].month} year={resp[2].year}></ProductItem>
            <ProductItem name={resp[3].name} day={resp[3].date} month={resp[3].month} year={resp[3].year}></ProductItem>
        </Card>
    )
}

export default Product