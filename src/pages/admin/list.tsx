import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Table } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { ProductType } from '../../fontend/types/Product'
import { Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

type listProps = {
    products: ProductType[],
    onRemove: (product: ProductType) => void
}

const list = (props: listProps) => {

    const removeItem = (product: ProductType) => {
        props.onRemove(product)
    }

    return (
        <div>
            {/* <div className="headeradmin">
                <Header />
            </div> */}
            {/* <div className="cate_list"> */}
            {/* <div className="cateadmin">
                    <Cate />
                </div> */}
            <div className="listadmin1">
                <Nav.Link>
                    <NavLink to="/admin/products/add">
                        <Button variant="primary">Thêm sản phẩm</Button>{' '}
                    </NavLink>
                </Nav.Link>

                <Table striped bordered hover size="sm" className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Image</th>
                            <th>Description</th>
                            <th>Cate</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.products && props.products.map((item, index) => {
                            return <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td> <img width="100px" height="100px" src={item.image} alt="" /></td>
                                <td>{item.description}</td>
                                <td>{item.cateId}</td>
                                <td>
                                    <Button onClick={() => removeItem(item)} variant="primary">Xóa</Button>{' '}
                                        <NavLink to={`/admin/products/${item._id}/edit`} className="navedit">
                                            <Button variant="warning">Sửa</Button>{' '}
                                        </NavLink>

                                </td>
                            </tr>
                        })}

                    </tbody>
                </Table>
            </div>
        </div>
        // </div>
    )
}

export default list