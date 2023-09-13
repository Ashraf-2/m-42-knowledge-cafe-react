import { useEffect, useState } from "react";

const Blogs = () => {
    const [blogs,setBlogs] = useState([]);

    useEffect(() => {
        fetch("./src/Components/Blogs/blogs.json")
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(data => setBlogs(data))
    },[])


    return (
        <div className="w-2/3">
            <h1 className="text-4xl">Blogs: {blogs.length}</h1>
            
        </div>
    );
};

export default Blogs;