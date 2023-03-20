export default function ContactDetails({name, lastName, address, email}){
    return (
        <>
        <div className="space-x-4 space-y-4 shadow-sm bg-white py-4 px-4">
                    <div className="text-rose-700 font-extrabold text-xl rounded py-3 px-4">my contact details</div>
                    <div className="flex space-x-16">
                        <div className="space-y-2">
                            <h3 className="font-bold">My infos</h3>
                            <p>{email}</p>
                            <button className="font-semibold">Change your infos</button>
                        </div>
                        <div className="space-y-2">
                            <h3 className="font-bold">Billing address</h3>
                            <div>
                            <p>{name} {lastName}</p>
                            <p>{address}</p>
                            </div>
                            {/* <input type="text" placeholder="enter a new address" value={newAddress} onChange={(e)=> setNewAddress(e.target.value)}/> */}
                            <button className="font-semibold">Change your address</button>
                        </div> 
                    </div>         
                </div>
        </>
    )
}