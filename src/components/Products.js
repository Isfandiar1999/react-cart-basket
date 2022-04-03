import React,{useState} from 'react'

const Products =  ({ addToCart }) => {

    const[products] = useState([
        {
          name:"Cinayet ve Ceza",
          cost: 10,
          image: 
              "https://assets1.bmstatic.com/assets/books-covers/21/01/ipad-0b48e4cb66db3f100b9803f674189ddc.jpg"
        },
        {
          name:"Bele buyurdu Zerdust",
          cost: 8,
          image: 
              "https://i.dr.com.tr/cache/500x400-0/originals/0000000200775-1.jpg"
        },
        {
          name:"Nietzsche agladiginda",
          cost: 12,
          image: 
              "https://images-na.ssl-images-amazon.com/images/I/416ZwJE+WoL._SX331_BO1,204,203,200_.jpg"
        },
        {
          name:"Forrest Gump",
          cost: 20,
          image: 
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSckoMi1MllgzWGU9FdRNGlSb-cRPkz7e57QO8zQBv9jmKaxr2n1wXY5OJcuJkQ_zQRlNA&usqp=CAU"
        },
        {
          name:"Atomik aliskanliklar",
          cost: 12,
          image: 
              "https://cdn.dsmcdn.com/ty11/product/media/images/20201019/14/17344532/70464975/1/1_org_zoom.jpg"
        },
        {
          name:"Savas ve Baris",
          cost: 30,
          image: 
              "https://i.dr.com.tr/cache/600x600-0/originals/0000000549677-1.jpg"
        }
      ])

      

  return (
    <div>
        <>
      <h1>Products</h1>
      <div className="big-box">
      {
        products.map((product, idx)=>(
          <div className="product" key={idx}>
            <h3>{product.name}</h3>
            <h4>${product.cost}</h4>
            <img src={product.image} alt={product.name} />
            <button className='add-btn' onClick={()=>addToCart(product)}>Add to cart</button>
          </div>
        ))
      }
      </div>
      </>
    </div>
  )
}

export default Products