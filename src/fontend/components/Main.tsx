import React from 'react'
import '../App.css'
import Slide from './Slide'

type Props = {}

const Main = (props: Props) => {
  return (
    <div className="mainn">
        <Slide/>
        <h2 className="h2">Sản Phẩm Mới Nhất</h2>
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
        <h2 className="h2">Sản Phẩm Yêu Thích</h2>
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
  )
}

export default Main