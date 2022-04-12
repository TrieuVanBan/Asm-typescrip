import { Button, Form } from 'react-bootstrap';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { CategoryType } from '../../../fontend/types/category';
import { ProductType } from '../../../fontend/types/Product';

type ProductAddProps = {
    name: string,
    onAdd: (product: ProductType) => void,
    categorys: CategoryType
};
type TypeInputs = {
    name: string,
    price: number,
    image: string,
    description: string,
}

const ProductAdd = (props: ProductAddProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm<ProductType>();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<ProductType> = data => {
        alert("Thêm thành công");
        props.onAdd(data);
        navigate("/admin/index")

    }
    return (
        <form style={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
            <h2>Thêm sản phẩm</h2>
            <Form.Select {...register('cateId')} aria-label="Default select example" style={{ width: '12%' }}>
                {props.categorys?.map((item, index) => {
                    return <option  value={item._id}>{item.name}</option>
                })};
            </Form.Select>
            <div>
                <label htmlFor="">Tên sản phẩm</label><br />
                <input style={{ width: '40%' }} type="text"  {...register('name', { required: true, minLength: 6 })} /> <br />
                {errors.name && errors.name.type === "required" && <span className="validate">Tên sản phẩm không được để trống</span>}
                {errors.name && errors.name.type === "minLength" && <span className="validate">Tên sản phẩm ít nhất 6 kí tự</span>}
            </div> <br />
            <div>
                <label htmlFor="">Giá sản phẩm</label><br />
                <input style={{ width: '40%' }} type="number"  {...register('price', { required: true })} /> <br />
                {errors.name && errors.name.type === "required" && <span className="validate">Giá sản phẩm không được để trống</span>}
            </div> <br />
            <div>
                <label htmlFor="">Ảnh sản phẩm</label><br />
                <input style={{ width: '40%' }} type="text" {...register('image')} /> <br />
            </div><br />
            <div>
                <label htmlFor="">Mô tả</label><br />
                <textarea style={{ width: '40%' }}  {...register('description', { required: true })} id="" cols="30" rows="8"></textarea> <br />
                {errors.name && errors.name.type === "required" && <span className="validate">Mô tả sản phẩm không được để trống</span>}
            </div>
            <button className="btn-primaryy">
                Thêm
            </button>
        </form>
    )
}

export default ProductAdd