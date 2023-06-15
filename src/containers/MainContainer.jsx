import products from '../constants/products'
import MainProduct from '../components/MainProduct'

function MainContainer(props) {
  const productList = products.map((el, index) => (
    <MainProduct
      key={`mainProduct-${index}`}
      name={el.name}
      description={el.description}
      price={el.price}
    ></MainProduct>
  ))
  return (
    <div id='mainContainer'>
      <header>
        <h1>Dogua</h1>
        <h2>Agua for your dog</h2>
      </header>
      <div id='mainProductContainer'>
        {productList}
      </div>
    </div>
  )
}

export default MainContainer