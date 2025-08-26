import { Link } from "react-router-dom";


const ProductsArr=[{id:"p1",title:"Product 1"},{id:"p2",title:"Product 2"},{id:"p3",title:"Product 3"}]
export default function Products()
{
    return(
        <>
        <h1>This is product Page</h1>
        <ul>
       {ProductsArr.map((prod)=><li key={prod.id}><Link to={`/products/${prod.id}`}>{prod.title}</Link></li>)}
        </ul>
        
        
        </>
        
    )
}