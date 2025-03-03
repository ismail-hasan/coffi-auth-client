import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const CoffiCard = ({ coffi, cof, setCof }) => {
    const { _id, name, category, taste, image } = coffi;

    const deleteButton = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffi/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your item has been deleted.",
                                icon: "success"
                            });

                            console.log("Before update:", cof);
                            const updatedCoffiList = cof.filter(c => c._id !== id);
                            console.log("After update:", updatedCoffiList);

                            setCof(updatedCoffiList); // ✅ Ensure state is updated
                        }
                    })
                    .catch(error => console.error("Delete error:", error));
            }
        });
    };

    return (
        <div className="card card-side bg-base-100 shadow-sm flex">
            <figure>
                <img className="w-60 h-60" src={image} alt={name} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{category}</p>
                <p>{taste}</p>
            </div>
            <div className="flex flex-col gap-5">
                <Link to={`/updatecoffi/${_id}`} className="btn btn-primary">Edit</Link>
                <button className="btn btn-secondary">View</button>
                <button
                    className="cursor-pointer btn btn-error"
                    onClick={() => deleteButton(_id)}
                >
                    X
                </button>
            </div>
        </div>
    );
};

export default CoffiCard;
