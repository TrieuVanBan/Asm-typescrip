import React from 'react'
import { Button, Form, ListGroup, Pagination } from 'react-bootstrap'

type Props = {}

const shop = (props: Props) => {
    return (
        <div className="shop">
            <div className="category">
                <div className="category1">
                    <ListGroup as="ul">
                        <ListGroup.Item as="li" active>
                            Danh mục
                        </ListGroup.Item>
                        <ListGroup.Item as="li">Sản phẩm 2</ListGroup.Item>
                        <ListGroup.Item as="li">Sản phẩm 3</ListGroup.Item>
                        <ListGroup.Item as="li">
                            Sản phẩm 4
                        </ListGroup.Item>
                        <ListGroup.Item as="li">Sản phẩm 5</ListGroup.Item>
                        <ListGroup.Item as="li">Sản phẩm 6</ListGroup.Item>
                    </ListGroup>
                </div>
                <div> <br/><br/><br/>
                    <>
                        <Form.Label>
                            <h4>Lọc</h4>
                        </Form.Label>
                        <Form.Range />
                        <div className="loc">
                            <h5>10$</h5>
                            <h5>100$</h5>
                        </div>
                        
                    </>
                </div>
            </div>

            <div className="allSP">
                <div className="search">
                    <h2>Tất cả sản phẩm</h2>
                    <div className="search1">
                        <input type="text" name="" id="" placeholder='Search...' className="search11" />
                        <input type="button" value="Tìm kiếm" className="search111" />
                    </div>
                </div>

                <div className="spmoi spmoi_1">
                    <div className="imgmoi imgmoi_1">
                        <img src="https://cf.shopee.vn/file/28d11974d7901d151277509d593cf760" alt="" />
                        <div className="name">
                            <a href="">
                                <span>Áo Hoodie</span> <br />
                                <span>300.000VND</span>
                            </a>
                        </div>
                    </div>
                    <div className="imgmoi imgmoi_1 ">
                        <img src="https://cf.shopee.vn/file/28d11974d7901d151277509d593cf760" alt="" />
                        <div className="name">
                            <a href="">
                                <span>Áo Hoodie</span> <br />
                                <span>300.000VND</span>
                            </a>
                        </div>
                    </div>
                    <div className="imgmoi imgmoi_1 ">
                        <img src="https://cf.shopee.vn/file/28d11974d7901d151277509d593cf760" alt="" />
                        <div className="name">
                            <a href="">
                                <span>Áo Hoodie</span> <br />
                                <span>300.000VND</span>
                            </a>
                        </div>
                    </div>
                    <div className="imgmoi imgmoi_1 ">
                        <img src="https://cf.shopee.vn/file/28d11974d7901d151277509d593cf760" alt="" />
                        <div className="name">
                            <a href="">
                                <span>Áo Hoodie</span> <br />
                                <span>300.000VND</span>
                            </a>
                        </div>
                    </div>
                    <div className="imgmoi imgmoi_1 ">
                        <img src="https://cf.shopee.vn/file/28d11974d7901d151277509d593cf760" alt="" />
                        <div className="name">
                            <a href="">
                                <span>Áo Hoodie</span> <br />
                                <span>300.000VND</span>
                            </a>
                        </div>
                    </div>
                    <div className="imgmoi imgmoi_1 ">
                        <img src="https://cf.shopee.vn/file/28d11974d7901d151277509d593cf760" alt="" />
                        <div className="name">
                            <a href="">
                                <span>Áo Hoodie</span> <br />
                                <span>300.000VND</span>
                            </a>
                        </div>
                    </div>
                    <div className="imgmoi imgmoi_1 ">
                        <img src="https://cf.shopee.vn/file/28d11974d7901d151277509d593cf760" alt="" />
                        <div className="name">
                            <a href="">
                                <span>Áo Hoodie</span> <br />
                                <span>300.000VND</span>
                            </a>
                        </div>
                    </div>
                    <div className="imgmoi imgmoi_1 ">
                        <img src="https://cf.shopee.vn/file/28d11974d7901d151277509d593cf760" alt="" />
                        <div className="name">
                            <a href="">
                                <span>Áo Hoodie</span> <br />
                                <span>300.000VND</span>
                            </a>
                        </div>
                    </div>
                    <div className="imgmoi imgmoi_1 ">
                        <img src="https://cf.shopee.vn/file/28d11974d7901d151277509d593cf760" alt="" />
                        <div className="name">
                            <a href="">
                                <span>Áo Hoodie</span> <br />
                                <span>300.000VND</span>
                            </a>
                        </div>
                    </div>
                    <div className="imgmoi imgmoi_1 ">
                        <img src="https://cf.shopee.vn/file/28d11974d7901d151277509d593cf760" alt="" />
                        <div className="name">
                            <a href="">
                                <span>Áo Hoodie</span> <br />
                                <span>300.000VND</span>
                            </a>
                        </div>
                    </div>
                    <div className="imgmoi imgmoi_1 ">
                        <img src="https://cf.shopee.vn/file/28d11974d7901d151277509d593cf760" alt="" />
                        <div className="name">
                            <a href="">
                                <span>Áo Hoodie</span> <br />
                                <span>300.000VND</span>
                            </a>
                        </div>
                    </div>
                    <div className="imgmoi imgmoi_1 ">
                        <img src="https://cf.shopee.vn/file/28d11974d7901d151277509d593cf760" alt="" />
                        <div className="name">
                            <a href="">
                                <span>Áo Hoodie</span> <br />
                                <span>300.000VND</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="Paginationn">
                    <Pagination>
                        <Pagination.First />
                        <Pagination.Prev />
                        <Pagination.Item>{1}</Pagination.Item>
                        <Pagination.Ellipsis />

                        <Pagination.Item>{10}</Pagination.Item>
                        <Pagination.Item>{11}</Pagination.Item>
                        <Pagination.Item active>{12}</Pagination.Item>
                        <Pagination.Item>{13}</Pagination.Item>
                        <Pagination.Item disabled>{14}</Pagination.Item>

                        <Pagination.Ellipsis />
                        <Pagination.Item>{20}</Pagination.Item>
                        <Pagination.Next />
                        <Pagination.Last />
                    </Pagination>
                </div>
            </div>

        </div>
    )
}

export default shop