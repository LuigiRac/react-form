import { useState } from "react";

function Form() {
    const [userPosts, setUserPosts] = useState('Inserisci nuovo post')
    return (

        <section className="input-group my-4">
            <input type="text" className="form-control" value={userPosts} onChange={(e) => setUserPosts(e.target.value)} />
            <button className="btn btn-outline-secondary" type="button">Insert</button>
            <button className="btn btn-outline-secondary" type="button">Delete</button>
        </section>
    )
}

export default Form