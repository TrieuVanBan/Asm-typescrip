import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { read } from '../api/product'
import { ProductType } from '../types/Product'

type Props = {}

const details = (props: Props) => {
    const {id} = useParams()
    const [product,setProduct] = useState<ProductType>();
    useEffect(() => {
        const getPro = async () =>{
            const {data} = await read(id);
            setProduct(data);
            console.log(data);
            
        }
        getPro();
    },[id])
    return (
        <div className="detail">
            <div className="detaill">
                <div className="detaill_img">
                    <img src={product?.image} alt=""/>
                </div>
                <div className="detail_1">
                    <h3>{product?.name} </h3> <br />
                    <h6>Giá : {product?.price}</h6> <br /><br />
                    <h6>Size : <h4>S/M/L/XL</h4> </h6> <br /><br />
                    <h6>Số lượng :</h6><input type="number" name="" id="" /> <br /><br />
                    <h6>Mô tả sản phẩm : </h6> <br />
                    <span>{product?.description}</span>
                </div>
            </div>
            <hr />
            <div className="detaill1">
                <h2>Sản phẩm liên quan</h2>
                <div className="spmoi">
                    <div className="imgmoi">
                        <img src="https://cf.shopee.vn/file/28d11974d7901d151277509d593cf760" alt="" />
                        <div className="name">
                            <a href="">
                                <span>Áo Hoodie</span> <br />
                                <span>300.000VND</span>
                            </a>
                        </div>
                    </div>
                    <div className="imgmoi">
                        <img src="https://cf.shopee.vn/file/28d11974d7901d151277509d593cf760" alt="" />
                        <div className="name">
                            <a href="">
                                <span>Áo Hoodie</span> <br />
                                <span>300.000VND</span>
                            </a>
                        </div>
                    </div>
                    <div className="imgmoi">
                        <img src="https://cf.shopee.vn/file/28d11974d7901d151277509d593cf760" alt="" />
                        <div className="name">
                            <a href="">
                                <span>Áo Hoodie</span> <br />
                                <span>300.000VND</span>
                            </a>
                        </div>
                    </div>
                    <div className="imgmoi">
                        <img src="https://cf.shopee.vn/file/28d11974d7901d151277509d593cf760" alt="" />
                        <div className="name">
                            <a href="">
                                <span>Áo Hoodie</span> <br />
                                <span>300.000VND</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default details