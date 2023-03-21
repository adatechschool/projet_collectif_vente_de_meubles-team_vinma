export default function MyPublications(){
    return (
        <>
        <div className="space-x-4 space-y-2 rounded border-gray-100 shadow-sm bg-white py-4 px-4">
                    <button className="text-lime-500 font-bold text-xl px-4">my publications</button>
                    <p>No order placed with this account.</p>
                    <button className="text-white border border-cyan bg-cyan-400 font-semibold py-2 px-6">Publish</button> 
        </div>

        <div className="space-x-4 space-y-2  py-4 px-4 flex flex-col">
            <div className="bg-white py-4 flex justify-between rounded border-gray-100 shadow-sm bg-gray">
                <img className="w-[200px] h-[200px] object-cover pl-4" 
                        src="https://static.tikamoon.com/product_photos/835__HD_002/1200-1200-table-en-teck-massif-coffee-tek-6-8-pers.webp?t=1665819563"
                        alt="img"/>

                <div className="flex w-4/5 mr-4">
                    <div className=" w-4/5 flex flex-col pl-2 justify-between">
                        <p className="p-1 font-bold text-2xl">Set de table et chaises en bois</p>
                        <p className="p-1 text-1xl">Category : Table</p>
                        <p className=" p-1 text-1xl">Price : 20€</p>
                        <p className="p-1 break-words">Description : {'\n'}
                                Ce canapé d'angle en polyester gris vous offre une assise profonde et accueillante. 
                                La méridienne réversible vous permettra d'agencer votre espace salon à votre guise. 
                                Ce canapé d'angle moderne séduira le petits espaces avec ses proportions étudiées.
                        </p>
                    </div>
                    <div className=" w-1/5 flex flex-col justify-evenly p-4">
                        <button className="text-white bg-red-500 font-semibold py-2 px-6 hover:bg-gray-500">DELETE</button>
                        <button className="text-white border-cyan bg-cyan-400 font-semibold py-2 px-6 hover:bg-gray-500">MODIFY</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}   