import { useParams } from 'react-router-dom'

const Product = () => {
  const teste = useParams()
  console.log(teste)
  return <div>produto</div>
}

export default Product
