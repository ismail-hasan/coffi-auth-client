import React from 'react';
import Swal from 'sweetalert2'

const AddCoffi = () => {


    const coffleFormHandle = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const quantity = form.quantity.value
        const suplier = form.suplier.value
        const taste = form.taste.value
        const catagory = form.catagory.value
        const details = form.details.value

        const addCoffi = { name, quantity, suplier, taste, catagory, details }


        // data post to server 
        fetch('http://localhost:5000/coffi', {
            method: 'POST',
            headers: {
                'content-type': "application/json",
            },
            body: JSON.stringify(addCoffi)
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire({
                    title: 'Add Coffi Done!',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'Done'
                })
            })
    }





    return (
        <div>
            <h3 className='text-center py-5 mt-7 text-5xl text-blue-800 capitalize'>add a  coffi</h3>
            <div className='w-9/12 mx-auto pt-5'>
                <form onSubmit={coffleFormHandle} className='flex flex-col gap-10'>
                    <div className='flex gap-10'>
                        <input name='name' type="text" placeholder="Coffi Name" className="input input-md w-1/2" />
                        <input name='quantity' type="text" placeholder="Available Quantity" className="input input-md w-1/2" />

                    </div>
                    <div className='flex gap-10'>
                        <input name='suplier' type="text" placeholder="Suplier" className="input input-md w-1/2" />
                        <input name='taste' type="text" placeholder="Taste" className="input input-md w-1/2" />

                    </div>
                    <div className='flex gap-10'>
                        <input name='catagory' type="text" placeholder="Catagory Name" className="input input-md w-1/2" />
                        <input name='details' type="text" placeholder="Details" className="input input-md w-1/2" />

                    </div>
                    <button className="btn btn-neutral block">Add A Coffi</button>
                </form>
            </div>
        </div>
    );
};

export default AddCoffi;