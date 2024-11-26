import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {
    const coffee = useLoaderData()
    const {_id, name, quantity, supplier, taste, category, details, photo } = coffee

    const handleUpdateCoffee = e =>{
        e.preventDefault()

        const form = e.target
        const name = form.name.value
        const quantity = form.quantity.value
        const supplier = form.supplier.value
        const taste = form.taste.value
        const category = form.category.value
        const details = form.details.value
        const photo = form.photo.value

        const updateCoffee = {name,quantity,supplier,taste,category,details,photo}
        console.log(updateCoffee);
        
        // send data to server
        fetch(`http://localhost:5000/coffee/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(updateCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount>0){
                Swal.fire({
                    title: "Good job!",
                    text: "Update the Coffee",
                    icon: "success"
                  });
            }
        })
    }

    return (
        <div>
            <h2 className="text-4xl text-center font-bold mb-5">Update Coffee:{name}</h2>

            <form onSubmit={handleUpdateCoffee} className="w-9/12 mx-auto">
      {/* Row-1 */}
        <div className="md:flex gap-5 justify-center items-center">
         <div className="md:w-1/2">
         <label className=" w-full max-w-xs">
            <div className="label">
              <span className="label-text font-bold text-2xl">Name</span>
            </div>
            <input
              type="text"
              name="name" 
              defaultValue={name}
              placeholder="Enter Coffee Name"
              className="input input-bordered w-full "
            />
          </label>
         </div>
         <div className="md:w-1/2">
         <label className=" w-full max-w-xs">
            <div className="label">
              <span className="label-text font-bold text-2xl">Available Quantity</span>
            </div>
            <input
              type="text"
              name="quantity"
              defaultValue={quantity}
              placeholder="quantity"
              className="input input-bordered w-full "
            />
          </label>
         </div>
        </div>
      {/* Row-2 */}
        <div className="md:flex gap-5 justify-center items-center">
         <div className="md:w-1/2">
         <label className=" w-full max-w-xs">
            <div className="label">
              <span className="label-text font-bold text-2xl">Supplier Name</span>
            </div>
            <input
              type="text"
              name="supplier"
              defaultValue={supplier}
              placeholder="Supplier Name"
              className="input input-bordered w-full "
            />
          </label>
         </div>
         <div className="md:w-1/2">
         <label className=" w-full max-w-xs">
            <div className="label">
              <span className="label-text font-bold text-2xl">Taste</span>
            </div>
            <input
              type="text"
              name="taste"
              defaultValue={taste}
              placeholder="Taste"
              className="input input-bordered w-full "
            />
          </label>
         </div>
        </div>
      {/* Row-3 */}
        <div className="md:flex gap-5 justify-center items-center">
         <div className="md:w-1/2">
         <label className=" w-full max-w-xs">
            <div className="label">
              <span className="label-text font-bold text-2xl">Category</span>
            </div>
            <input
              type="text"
              name="category"
              defaultValue={category}
              placeholder="Category"
              className="input input-bordered w-full "
            />
          </label>
         </div>
         <div className="md:w-1/2">
         <label className=" w-full max-w-xs">
            <div className="label">
              <span className="label-text font-bold text-2xl">Details</span>
            </div>
            <input
              type="text"
              name="details"
              defaultValue={details}
              placeholder="Details"
              className="input input-bordered w-full "
            />
          </label>
         </div>
        </div>
      {/* Row-4 */}
        <div className="">
         <div className="md:w-full">
         <label className=" w-full max-w-xs">
            <div className="label">
              <span className="label-text font-bold text-2xl">Photo URL</span>
            </div>
            <input
              type="text"
              name="photo"
              defaultValue={photo}
              placeholder="Photo URL"
              className="input input-bordered w-full "
            />
          </label>
         </div>
        </div>
       <div className="mt-4">
       <button className="w-full py-3 rounded-md font-bold text-xl bg-[#D2B48C]">Update Coffee</button>
       </div>
      </form>
        </div>
    );
};

export default UpdateCoffee;