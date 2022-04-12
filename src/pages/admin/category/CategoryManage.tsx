import axios from 'axios'
import { Button, Table } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import { CategoryType } from '../../../fontend/types/category'

type CategoryManage = {
  categorys: CategoryType,
  onRemovee: (category: CategoryType) => void
}
const category = (props: CategoryManage) => {
  return (
    <div className="listadmin1">
      <NavLink to='create'><Button variant="primary">Thêm Danh Mục</Button></NavLink>
      <Table striped bordered hover className='table'>
        <thead>
          <tr>
            <th>#</th>
            <th>Tên</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {props.categorys?.map((item, index) => {
            return <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>
                <Button style={{ marginLeft: '10px' }} onClick={() => props.onRemovee(item._id)} variant="primary">Xóa</Button>
                <Link to={`/admin/category/${item._id}/update`}><Button variant="warning">Sửa</Button></Link>
              </td>
            </tr>
          })}
        </tbody>
      </Table>
    </div>
  )
}

export default category