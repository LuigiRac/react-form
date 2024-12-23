
import posts from "../data/posts"

function CardContent() {
    const postsList = [...posts];
    const image = "/img/polmoni.png"

    return (
        <>
            <div className="d-flex justify-content-center gap-3 m-4">
                {
                    postsList.map((posts) => posts.published && (
                        <div className="card" style={{ width: '18rem' }} key={posts.id}>
                            <img className="card-img-top" src={image} alt={posts.title}></img>
                            <div className="card-body">
                                <h5 className="card-title">{posts.title}</h5>
                                <p className="card-text">{posts.content}</p>
                                <a href="#" className="btn btn-primary" >Leggi di più</a>
                            </div>
                        </div>
                    ))
                }

            </div>
        </>
    )
};

export default CardContent