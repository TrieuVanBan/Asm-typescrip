import React from 'react'

type Props = {}

const details = (props: Props) => {
    return (
        <div className="detail">
            <div className="detaill">
                <div className="detaill_img">
                    <img src="https://cf.shopee.vn/file/799b518503faed7452467369d2ec178f_tn" alt="" />
                </div>
                <div className="detail_1">
                    <h3>Name</h3> <br />
                    <h6>Giá :</h6> <br /><br />
                    <h6>Size : <h4>S/M/L/XL</h4> </h6> <br /><br />
                    <h6>Số lượng :</h6><input type="number" name="" id="" /> <br /><br />
                    <h6>Mô tả sản phẩm :</h6> <br />
                    <span>Áo Hoodie Nỉ BÔNG với Chất liệu Nỉ Ngoại tốt; mang phong cách thời trang thời thượng các bạn trẻ; đặc biệt không những giúp bạn giữ ấm trong mùa lạnh mà còn có thể chống nắng, chống gió, chống bụi, chống rét, chống tia UV cực tốt, rất tiện lợi nhé!!!
                        (Được sử dụng nhiều trong dịp Lễ hội, Đi chơi, Da ngoại, Dạo phố, Du lịch...)</span>
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