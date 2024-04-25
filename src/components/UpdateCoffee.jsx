import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {




    const coffee = useLoaderData();

    const { _id, name, Available, Supplier, Taste, Categories, Details, photourl } =coffee; 
   

    const handleUpdate = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const Available = form.Available.value;
        const Supplier = form.Supplier.value;
        const Taste = form.Taste.value;
        const Categories = form.Categories.value;
        const Details = form.Details.value;
        const photourl = form.photourl.value;

        const updatedCoffee = { name, Available, Supplier, Taste, Categories, Details, photourl };

        console.log(updatedCoffee);

        //send data to server
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(updatedCoffee) 
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Update info successfully',
                        icon: 'success',
                        confirmButtonText: 'HOT'
                      })
                }
            })
          
        

    }
    return (
        <div className='bg-red-300'>

            <h1 className='text-2xl'>Update Coffee Name : {name} </h1>

        <form onSubmit={handleUpdate}>
            <div className="grid grid-cols-2">
                <div>
                    <h1>Coffee Name</h1> <br />
                    <input className="input input-bordered" name='name'  defaultValue={name} placeholder="Coffee Name" />
                </div>

                <div className="">
                    <h1>Available Quantity</h1> <br />
                    <input className="input input-bordered" name='Available' defaultValue={Available} placeholder="Available Quantity" />
                </div>
            </div>

            {/* supplier row */}
            <div className="grid grid-cols-2">
                <div>
                    <h1>Supplier</h1> <br />
                    <input className="input input-bordered" name='Supplier' defaultValue={Supplier} placeholder="Supplier" />
                </div>
                <div>
                    <h1>Taste</h1> <br />
                    <input className="input input-bordered" name='Taste' defaultValue={Taste} placeholder="Taste" />
                </div>
                <div>
                    <h1>Categories</h1> <br />
                    <input className="input input-bordered" name='Categories' defaultValue={Categories} placeholder="Categories" />
                </div>
                <div>
                    <h1>Details</h1> <br />
                    <input className="input input-bordered" name='Details' defaultValue={Details} placeholder="Details" />
                </div>
            </div>

            {/* photo url */}
            <div>
                <div className='form-control w-full'>
                    <label className='label'>
                        <span>Photo-url</span>
                    </label>
                    <input className="input input-bordered" name='photourl' defaultValue={photourl} placeholder="photourl" />
                </div>
            </div>

            <input type="submit" value='UpdateCoffee' className="mt-4 mb-8 btn btn-block" />
        </form>
    </div>
    );
};

export default UpdateCoffee;