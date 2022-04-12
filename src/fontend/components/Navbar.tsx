import React from 'react'
import { Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import '../App.css'

type Props = {}

function Navbar({ }: Props) {
  return (
    <div>
      <div className="logo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjdgOyWUy4LP1HywQ30AxxCF15LrVd-KbdAA&usqp=CAU" width="8%" alt="" />
        <div className="login">
          <Nav.Link>
            <NavLink className="login1 NavLink" to="/signin">Đăng nhập</NavLink>
            <NavLink className="login1 NavLink" to="/signup">Đăng kí</NavLink>
            <img src="https://img.icons8.com/ios/2x/shopping-cart-loaded--v2.gif" width="1.5%" alt="" />
          </Nav.Link>
        </div>
      </div>
      <Nav className="nav">
        <Nav.Item>
          <Nav.Link>
            <NavLink to="/" className="NavLink">Trang chủ</NavLink>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <NavLink to="/product" className="NavLink">Sản phẩm</NavLink>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <NavLink to="/introduce" className="NavLink">Giới thiệu</NavLink>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <NavLink to="/news" className="NavLink">Tin tức</NavLink>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>

  )
}

export default Navbar