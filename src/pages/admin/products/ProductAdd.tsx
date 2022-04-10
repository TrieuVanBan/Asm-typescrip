import { Button, Form } from 'react-bootstrap';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ProductType } from '../../../fontend/types/Product';

type ProductAddProps = {
    name: string,
    onAdd: (product: ProductType) => void
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
            <div>
                <label htmlFor="">Tên sản phẩm</label><br />
                <input style={{ width: '40%' }} type="text"  {...register('name')} />
            </div> <br />
            <div>
                <label htmlFor="">Giá sản phẩm</label><br />
                <input style={{ width: '40%' }} type="number"  {...register('price')} /> <br />
            </div> <br />
            <div>
                <label htmlFor="">Ảnh sản phẩm</label><br />
                <input style={{ width: '40%' }} type="text" {...register('image')} /> <br />
            </div><br />
            <div>
                <label htmlFor="">Mô tả</label><br />
                <textarea style={{ width: '40%' }}  {...register('description')} id="" cols="30" rows="8"></textarea>
            </div>
            <button className="btn-primaryy">
                Thêm
            </button>
        </form>
    )
}

export default ProductAdd