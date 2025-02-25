
export default function Hero(){
    return(
        
        <section className="container my-12">
           <h1 className="text-4xl bold text-center">Find your next dream job</h1>
           {/* <p className="text-center text-gray-600"> You will find your dream job if you visit here every day.
            You will find your dream job if you visit here every day.
            You will find your dream job if you visit here every day.
            You will find your dream job if you visit here every day.</p> */}

            <form className = "flex gap-2 mt-4 max-w-xl mx-auto">
                <input type= "search" 
                className="border border-gray-400 w-full py-2 px-3 rounded-md"
                placeholder="Search phrase"/>
                <button className="bg-blue-600 text-white py-2 px-4 rounded-md">Search</button>
            </form>
        </section>
        
    );
}