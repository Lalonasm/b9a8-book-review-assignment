

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-slate-100 rounded-lg">
            <div className="hero-content flex-col lg:flex-row-reverse gap-4">
                <img src="https://i.ibb.co/hBgGdgn/pngwing-1.png" className="max-w-sm rounded-lg shadow-2xl" />
                <div className="lg:justify-items-start">
                    <h1 className="lg:text-6xl text-3xl font-bold">Books to freshen up <br /> your bookshelf</h1>
                    
                    <button className="btn bg-green-500 text-white">View This List</button>
                </div>
            </div>
        </div>)
};

export default Banner;