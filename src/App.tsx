import { useEffect, useState } from 'react'
import "./fontend/App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link, NavLink, Navigate } from "react-router-dom";
import Websitelayout from './fontend/layouts/Websitelayout';
import WebsiteAdmin from './fontend/layouts/WebsiteAdmin';
import { add, list } from './fontend/api/product'
import Web from './pages/admin/products/web'
import Shop from './fontend/components/shop'
import Main from './fontend/components/Main';
import List from './pages/admin/category/list'
import ProductAdd from './pages/admin/products/ProductAdd';
import { ProductType } from './fontend/types/Product';

function App() {
  const [count, setCount] = useState(0)
  const [products, setProducts] = useState<ProductType[]>([]);
  // useEffect(()=>{
  // const getProducts = async()=>{
  //   const {data} = await list()
  //   console.log(data);
  //   setProducts(data)
  // }
  // getProducts()
  // })
  const onHandleAdd = async (product: ProductType) => {
    const { data } = await add(product);
    setProducts([...products, data]);
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Websitelayout />}>
          <Route index element={<Navigate to="index" />} />
          <Route path="index" element={<Main />} />
          <Route path="product">
            <Route index element={<Shop />} />
          </Route>
        </Route>
      </Routes>
      {/* admin */}
      <Routes>
        <Route path="/admin" element={<WebsiteAdmin />}>
          <Route index element={<Navigate to="index" />} />
          <Route path="index" element={<Web />} />
          <Route path="products">
            <Route path="add" element={<ProductAdd name="product" onAdd={onHandleAdd} />} />
          </Route>
        </Route>

      </Routes>
    </div>
  )
}

export default App
