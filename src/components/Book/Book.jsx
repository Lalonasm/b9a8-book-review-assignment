import Tag from "../Tag/Tag";


const Book = ({ book }) => {
    const { image, tags, bookName, author, category, rating } = book;
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img src={image} alt="book cover" /></figure>
            <div>
                {
                    tags.map((tag, idx) => <Tag key={idx}></Tag>)
                }
            </div>
            <div className="card-body">
                <h2 className="card-title text-center">{bookName}</h2>
                <p>By Name : {author}</p>
                <div className="flex justify-around">
                    <h4>{category}</h4>
                    <div className="flex gap-2">
                        <p>{rating}</p>
                        <img width={'16px'} src='https://i.ibb.co/6Z8nv2S/staricon.png'
                            alt="" />
                    </div>

                </div>
            </div>
        </div >
    );
};

export default Book;