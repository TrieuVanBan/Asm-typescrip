import React from 'react'
import { Button, Form, ListGroup, Pagination } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ProductType } from '../types/Product'

type Props = {
    products: ProductType,
}

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
                <div> <br /><br /><br />
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
                {/* San pham */}
                <div className="spmoi spmoi_1">
                    {props.products?.map((item, index) => {
                        return <div key={index} className="imgmoi imgmoi_1">
                            <img src={item.image} alt="" />
                            <div className="name">
                                <Link to={`/product/${item._id}`}>
                                    <span>{item.name}</span> <br />
                                    <span>{item.price}</span>
                                </Link>
                            </div>
                        </div>
                    })}
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