import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { read } from '../../../fontend/api/product';
import { ProductType } from '../../../fontend/types/Product';

type ProductEditProps = {
    onUpdate: (product: ProductType) => void
}
type FormInputs = {
    name: string,
    price: number,
    image: string,
    description: string,
}
const ProductEdit = (props: ProductEditProps) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>();
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const getProduct = async () => {
            const { data } = await read(id);
            reset(data);
        }
        getProduct();
    }, [])

    const onSubmit: SubmitHandler<FormInputs> = data => {
        console.log(data)
        props.onUpdate(data);
        navigate("/admin/index")
        // bắn data ra ngoài app.js
        // redirect sang trang product
    }
    return (
        <form style={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
            <h2>Cập nhật sản phẩm</h2>
            <div>
                <label htmlFor="">Tên sản phẩm</label><br />
                <input style={{ width: '40%' }} type="text"  {...register('name', { required: true })} />
            </div>
            <div>
                <label htmlFor="">Giá sản phẩm</label><br />
                <input style={{ width: '40%' }} type="number"  {...register('price')} />
            </div>
            <div>
                <label htmlFor="">Ảnh sản phẩm</label><br />
                <input style={{ width: '40%' }} type="text"  {...register('image')} />
            </div>
            <div>
                <label htmlFor="">Mô tả sản phẩm</label><br />
                <textarea style={{ width: '40%' }}  {...register('description' , {required:true})} id="" cols="30" rows="8"></textarea> <br />
            </div>
            <button>Update</button>
        </form>
    )
}

export default ProductEdit