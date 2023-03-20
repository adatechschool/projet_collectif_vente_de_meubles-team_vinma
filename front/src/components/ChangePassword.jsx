export default function ChangePassword() {
    return (
        <>
        <div className="flex flex-col rounded border-gray-100 shadow-sm bg-white py-4 px-4 ">
            
            <input type="text" placeholder="current password"/>
            <input type="text" placeholder="new password"/>
            <button className="text-white border border-cyan bg-cyan-400 font-semibold py-2 px-6">change password</button> 
        </div>
        </>
    )
}