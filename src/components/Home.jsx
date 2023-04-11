import React, { useContext, useEffect, useState } from 'react'

import { Cartcontext } from '../ContextAPI/Context'


const Home = () => {

  const [productItem, setProductItem] = useState([])

  useEffect(() => {
    loadData()
  }, [])




  const loadData = async () => {
    let response = await fetch("http://3.7.252.58:4001/product/getAllProduct ", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
    });
    response = await response.json();
    console.log(response);
    setProductItem(response)
   
  }
  const Globalstate=useContext(Cartcontext)
  console.log(Globalstate)
  const dispatch=Globalstate.dispatch;
  return (
    <div className='container'>
    <div className='row mb-4'  style={{ "paddingTop": "10rem" }} >


      {productItem.map((data,index) => {
        data.quantity=1
        return (

        <div className='col-lg-3 m-4'>
        <div>
        <div className="card" key={index} style={{ "width": "18rem" ,"height":"25rem" }}>
            <img style={{ "height": "14rem" }} src={data.imageUrl} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{data.name}</h5>
                <p className="card-text">Ratings {data.rating}/5</p>

                <div className='d-flex'>
                    <button onClick={()=>dispatch({type:'ADD',payload:data})} className="btn btn-primary" >Add to Cart</button>
                    <button className='btn btn'>Price:₹{data.price}</button>
                </div>

            </div>
        </div>
        </div>
        </div>
       

          
         
      
          
          
           

         
         

     
          
         
        )
        
      })}

    </div>
    </div>
  )
}

export default Home






