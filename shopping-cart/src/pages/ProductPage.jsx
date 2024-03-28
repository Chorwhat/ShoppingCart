import { Link } from "react-router-dom";
import Product from "../components/Product";

const ProductPage = () => {

let itemsInfo = [
    {title: 'item 1',
    cost: '1.00',
    description: 'The first'},
    {title: 'item 2',
    cost: '2.25',
    description: 'The second'},
    {title: 'item 3',
    cost: '5.00',
    description: 'The third'},
    {title: 'item 4',
    cost: '4.00',
    description: 'The fourth'},
    {title: 'item 5',
    cost: '3.00',
    description: 'The fifth'},
]

function convertObjectToProduct(obj) {
    if(Object.prototype.hasOwnProperty.call(obj, "title") && Object.prototype.hasOwnProperty.call(obj, "cost") && Object.prototype.hasOwnProperty.call(obj, "description")){
        return <Product title={obj.title} cost={obj.cost} description={obj.description} amount={0}/>
    }
    else{
        print("must be a missing key")
    }
}



  return (
    <>
      <p>Hi, I am Popeye! I love to eat Spinach!</p>
      <Link to="/">Click here to go back</Link>

      {itemsInfo.map(convertObjectToProduct)}
    </>
  );
};

export default ProductPage;