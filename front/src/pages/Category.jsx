import Header from "../components/Header";

export default function Category({data, category}) {
    console.log(category);

    return (
        <>
        <div className="h-screen">
        <Header cart={[]} setCart={()=>{}} removeFromCart={()=>{}}/>
        <div className="global-container grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {data.map((post)=>{
                if (post.category === category){
          return (
            <div className="border-[1px] rounded-lg m-5 p-5 ">
            <img
              className="w-full h-[200px] object-cover rounded-lg mb-5"
              src={post.images[0].secure_url}
              alt="img"
            />
            <div className="flex justify-between items-end sm:flex-col sm:items-start">
              <h2 className="text-lg">{post.title}</h2>
              <h2 className="text-3xl font-bold">{post.price} €</h2>
            </div>
            <button
              type="submit"
              className="rounded-lg mt-5 py-4 px-14 w-full bg-amber-400 hover:bg-black duration-300 rounded-md text-white text-sm hover:transition hover:duration-300 hover:ease-in-out"
            >
              Add to cart
            </button>
          </div>
          )}
        })}
        </div>
        </div>
        </>
    )

}