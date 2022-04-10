import React from 'react'
import Header from '../../pages/admin/header'
import { Outlet } from 'react-router-dom'
import Cate from '../../pages/admin/cate'


type Props = {}

const WebsiteAdmin = (props: Props) => {
  return (
    <div>
      <div>
        <div className="headeradmin">
          <Header />
        </div>
        <div className="cate_list">
          <div className="cateadmin">
            <Cate />
          </div>
          <Outlet />

        </div>


      </div>

    </div>
  )
}

export default WebsiteAdmin