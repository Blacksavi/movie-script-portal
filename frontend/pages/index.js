import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
    const [scripts, setScripts] = useState([]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    useEffect(() => {
        axios.get("http://localhost:5000/api/scripts")
            .then(res => setScripts(res.data))
            .catch(err => console.error(err));
    }, []);

    const handleSubmit = async () => {
        await axios.post("http://localhost:5000/api/scripts", { title, content });
        setTitle(""); setContent("");
        window.location.reload();
    };

    return (
        <div>
            <h1>Movie Script Portal</h1>
            <input type="text" placeholder="Script Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <textarea placeholder="Write your script here..." value={content} onChange={(e) => setContent(e.target.value)} />
            <button onClick={handleSubmit}>Save Script</button>
            <h2>Saved Scripts</h2>
            <ul>
                {scripts.map(script => (
                    <li key={script._id}>{script.title}</li>
                ))}
            </ul>
        </div>
    );
}
