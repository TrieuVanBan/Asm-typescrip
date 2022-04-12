import { useEffect, useState } from 'react'
import "./fontend/App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link, NavLink, Navigate } from "react-router-dom";
import Websitelayout from './fontend/layouts/Websitelayout';
import WebsiteAdmin from './fontend/layouts/WebsiteAdmin';
import { add, list, update } from './fontend/api/product'
import { addd, listt, removee, updatee } from './fontend/api/category'
import Web from './pages/admin/products/web'
import Shop from './fontend/components/shop'
import Main from './fontend/components/Main';
import ProductAdd from './pages/admin/products/ProductAdd';
import ProductEdit from './pages/admin/products/ProductEdit';
import Category from './pages/admin/category/CategoryManage';
import CreateCategory from './pages/admin/category/CreateCategory';
import UpdateCategory from './pages/admin/category/UpdateCategory';
import { ProductType } from './fontend/types/Product';
import Signup from './pages/admin/signup'
import Signin from './pages/admin/signin'
import { CategoryType } from './fontend/types/category';
import Detail from './fontend/components/details'

function App() {
  const [count, setCount] = useState(0)
  const [products, setProducts] = useState<ProductType[]>([]);
  useEffect(()=>{
  const getProducts = async()=>{
    const {data} = await list();
    console.log(data);
    setProducts(data)
  }
  getProducts()
  })


  // products
  const onHandleAdd = async (product: ProductType) => {
    const { data } = await add(product);
    setProducts([...products, data]);
  }
  const onHandleUpdate = async (product: ProductType) => {
    const { data } = await update(product);
    setProducts(products.map(item => item._id == data._id ? data : item));
  }

  //cate
  const [categorys, setCategorys] = useState<CategoryType[]>([]);
  useEffect(() => {
    const getCategory = async () => {
      const { data } = await listt();
      setCategorys(data);
    };
    getCategory();
  }, [])
  const onHandleRemovee = (_id: number) => {
    removee(_id);
    setCategorys(categorys.filter(item => item._id !== _id));
  }
  const onHandleAddd = async (category: CategoryType) => {
    const { data } = await addd(category);
    setCategorys([...categorys, data])
  }
  const onHandleUpdatee = async (category: CategoryType) => {
    const { data } = await updatee(category);
    setCategorys(categorys.map(item => item._id == data._id ? data : item));
  }
  return (
    <div className="App">
      {/* Website */}
      <Routes>
        <Route path="/" element={<Websitelayout />}>
          <Route index element={<Navigate to="index" />} />
          <Route path="index" element={<Main />} />

          <Route path="product">
            <Route index element={<Shop products={products} />} />
          </Route>
          <Route path="detail" element={<Detail />} />

        </Route>
      </Routes>

      {/* signup, signin */}
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>

      {/* Admin */}
      <Routes>
        <Route path="/admin" element={<WebsiteAdmin />}>
          <Route index element={<Navigate to="index" />} />
          <Route path="index" element={<Web />} />

          <Route path="products">
            <Route path="add" element={<ProductAdd name="product" categorys={categorys} onAdd={onHandleAdd} />} />
            <Route path=":id/edit" element={<ProductEdit onUpdate={onHandleUpdate} />} />
          </Route>
          {/* category */}
          <Route path="category">
            <Route index element={<Category categorys={categorys} onRemovee={onHandleRemovee} />} />
            <Route path="create" element={<CreateCategory onAddd={onHandleAddd} />} />
            <Route path=":_id/update" element={<UpdateCategory onUpdatee={onHandleUpdatee} />} />
          </Route>
        </Route>

      </Routes>
    </div>
  )
}

export default App
