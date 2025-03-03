import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const UpdateCoffi = () => {
    const updteData = useLoaderData()
    const navigate = useNavigate()
    console.log("rty", updteData.name)
    // const addCoffi = { name, quantity, suplier, taste, catagory, details } 


    const updateFormHandle = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const quantity = form.quantity.value
        const suplier = form.suplier.value
        const taste = form.taste.value
        const catagory = form.catagory.value
        const details = form.details.value

        const addCoffi = { name, quantity, suplier, taste, catagory, details }
        // console.log("ssssss", updteData._id)

        // data post to server 
        fetch(`http://localhost:5000/coffi/${updteData._id}`, {
            method: 'PUT',
            headers: {
                'content-type': "application/json",
            },
            body: JSON.stringify(addCoffi)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'update Coffi Done!',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    })
                    navigate("/")
                }
                console.log(data)
            })
    }


    return (
        <div>
            <h3 className='text-center py-5 mt-7 text-5xl text-blue-800 capitalize'>Update a  coffi</h3>
            <div className='w-9/12 mx-auto pt-5'>
                <form onSubmit={updateFormHandle} className='flex flex-col gap-10'>
                    <div className='flex gap-10'>
                        <input name='name' type="text" defaultValue={updteData.name} placeholder="Coffi Name" className="input input-md w-1/2" />
                        <input name='quantity' type="text" defaultValue={updteData.quantity} placeholder="Available Quantity" className="input input-md w-1/2" />

                    </div>
                    <div className='flex gap-10'>
                        <input name='suplier' defaultValue={updteData.suplier} type="text" placeholder="Suplier" className="input input-md w-1/2" />
                        <input name='taste' type="text" defaultValue={updteData.taste} placeholder="Taste" className="input input-md w-1/2" />

                    </div>
                    <div className='flex gap-10'>
                        <input name='catagory' defaultValue={updteData.catagory} type="text" placeholder="Catagory Name" className="input input-md w-1/2" />
                        <input name='details' defaultValue={updteData.details} type="text" placeholder="Details" className="input input-md w-1/2" />

                    </div>
                    <button className="btn btn-neutral block">Update A Coffi</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffi;