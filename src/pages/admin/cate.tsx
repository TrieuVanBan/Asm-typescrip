import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

type Props = {}

const cate = (props: Props) => {
  return (
    <div>
      <div className="catee">
        <div className="cate">
          <ListGroup as="ul">
            <ListGroup.Item as="li" active>
              Dashboard
            </ListGroup.Item>
            <ListGroup.Item as="li">
              <Nav.Link>
                <NavLink to="/admin/category" className="NavLink">Danh mục</NavLink>
              </Nav.Link>
            </ListGroup.Item>
            <ListGroup.Item as="li">
              <Nav.Link>
                <NavLink to="/admin/" className="NavLink">Sản phẩm</NavLink>
              </Nav.Link>
            </ListGroup.Item>
            <ListGroup.Item as="li">
              <Nav.Link>
                <NavLink to="/admin/account" className="NavLink">Tài khoản</NavLink>
              </Nav.Link>
            </ListGroup.Item>
            <ListGroup.Item as="li">
              <Nav.Link>
                <NavLink to="/" className="NavLink">Thống kê</NavLink>
              </Nav.Link>
            </ListGroup.Item>
            <ListGroup.Item as="li">
              <Nav.Link>
                <NavLink to="/" className="NavLink">Đăng xuất</NavLink>
              </Nav.Link>
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    </div>
  )
}

export default cate