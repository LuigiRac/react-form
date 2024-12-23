import { useState } from "react";

function Form() {
    const [userPosts, setUserPosts] = useState('Inserisci nuovo post')
    function handleSubmit(e) {
        e.preventDefault();
        console.log(userPosts)
    }
    return (

        <section className="input-group my-4">
            <form className="d-flex " onSubmit={handleSubmit}>
                <input type="text" className="form-control" value={userPosts} onChange={(e) => setUserPosts(e.target.value)} />
                <button className="btn btn-outline-secondary" type="button">Insert</button>
                <button className="btn btn-outline-secondary" type="button">Delete</button>
            </form>
        </section>
    )
}

export default Form