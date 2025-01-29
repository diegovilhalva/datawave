import "./Blog.css"
import { blogPost } from "../../data"


const Blog = () => {
    return (
        <section id="blog">
            <div className="container">
                <div className="section-header">
                    <h3>Publicações no Blog</h3>
                    <h2>Insights e Inovações</h2>
                </div>
                <div className="blogs-grid">
                    {blogPost.map((post, i) => (
                        <div className="blog-card" key={i}>
                            <div className="top">
                                <img src={post.image} alt="" />
                            </div>
                            <div className="bottom">
                                <h3 className="line-clamp-2">{post.title}</h3>
                                <p className="line-clamp-3 description">{post.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Blog