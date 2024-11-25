
const CoffeeCard = ({coffee}) => {
    const{name,quantity,supplier,taste,category,details,photo}= coffee
    return (
        <div className="card card-side bg-base-100 shadow-xl">
  <figure>
    <img
      src={photo}
      alt="Movie" />
  </figure>
  <div className="flex justify-between w-full items-center ">
  <div>
  <h2 className="card-title">{name}</h2>
    <p>Quantity:{quantity}</p>
    <p>Supplier:{supplier}</p>
    <p>Taste:{taste}</p>
  </div>
    <div className="justify-end ">
    <div className="join join-vertical space-y-4 p-5">
  <button className="btn ">View</button>
  <button className="btn ">Update</button>
  <button className="btn ">X</button>
</div>
    </div>
  </div>
</div>
    );
};

export default CoffeeCard;