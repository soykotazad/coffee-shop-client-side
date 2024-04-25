import React from 'react';
import Swal from 'sweetalert2';


const AddCoffee = () => {

    const handleAdd = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const Available = form.Available.value;
        const Supplier = form.Supplier.value;
        const Taste = form.Taste.value;
        const Categories = form.Categories.value;
        const Details = form.Details.value;
        const photourl = form.photourl.value;

        const newCoffee = { name, Available, Supplier, Taste, Categories, Details, photourl };

        console.log(newCoffee);

        //send data to server
        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(newCoffee) 
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedID){
                    Swal.fire({
                        title: 'Success!',
                        text: 'user added successfully',
                        icon: 'success',
                        confirmButtonText: 'HOT'
                      })
                }
            })
          
        

    }

    return (
        <div className='bg-red-300'>

            <form onSubmit={handleAdd}>
                <div className="grid grid-cols-2">
                    <div>
                        <h1>Coffee Name</h1> <br />
                        <input className="input input-bordered" name='name' placeholder="Coffee Name" />
                    </div>

                    <div className="">
                        <h1>Available Quantity</h1> <br />
                        <input className="input input-bordered" name='Available' placeholder="Available Quantity" />
                    </div>
                </div>

                {/* supplier row */}
                <div className="grid grid-cols-2">
                    <div>
                        <h1>Supplier</h1> <br />
                        <input className="input input-bordered" name='Supplier' placeholder="Supplier" />
                    </div>
                    <div>
                        <h1>Taste</h1> <br />
                        <input className="input input-bordered" name='Taste' placeholder="Taste" />
                    </div>
                    <div>
                        <h1>Categories</h1> <br />
                        <input className="input input-bordered" name='Categories' placeholder="Categories" />
                    </div>
                    <div>
                        <h1>Details</h1> <br />
                        <input className="input input-bordered" name='Details' placeholder="Details" />
                    </div>
                </div>

                {/* photo url */}
                <div>
                    <div className='form-control w-full'>
                        <label className='label'>
                            <span>Photo-url</span>
                        </label>
                        <input className="input input-bordered" name='photourl' placeholder="photourl" />
                    </div>
                </div>

                <input type="submit" value='AddCoffee' className="mt-4 mb-8 btn btn-block" />
            </form>
        </div>
    );
};

export default AddCoffee;
