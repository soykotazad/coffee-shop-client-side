import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({coffee, setCoffees , coffees}) => {
   

   const { _id, name, Available, Supplier, Taste, Categories, Details, photourl } =coffee; 
   
     const handleDelete= _id =>{

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
         

            fetch(`http://localhost:5000/coffee/${_id}`, {
                method : 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){

                         Swal.fire(
                 "Deleted!",
                 "Your COFFEE has been deleted.",
                 "success"
              )
              const remaining = coffees.filter(cof => cof._id !== _id)
              setCoffees(remaining);
                   
                }
            })

            }
           
          });

        console.log(_id)

     }

    return (
   <div className="card card-side bg-base-100 shadow-xl">
        <figure><img src={photourl}/></figure>
        <div className="card-body">


            <div className='flex justify-between'>
            <div>
                     <h2 className="card-title">Name :{name} </h2>
                      <p> Available : {Available } </p>
                      <p> Supplier: {Supplier} </p>
                      <p> Taste: {Taste} </p>
                      <p> Categories : {Categories} </p>
                      <p> Details {Details} </p>
                     </div>
         
           <div className="card-actions justify-end">
             <div className="join join-vertical gap-4">
               <button className="btn join-item">VIEW</button>
               <Link to={`/update/${_id}`} > <button className="btn join-item">EDIT</button></Link>
               <button onClick={()=>  handleDelete(_id)} className="btn join-item bg-red-400"> X</button> 
               
             </div>
           </div>
            </div>
                     
        </div>
     </div>   
    );
};

export default CoffeeCard;