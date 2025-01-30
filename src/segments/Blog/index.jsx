import "./Blog.css"
import { blogPost } from "../../data"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { useRef } from "react"
gsap.registerPlugin(ScrollTrigger)


const Blog = () => {
    const container = useRef()
    useGSAP(() => {
        gsap.timeline({
            delay: 0.5,
            scrollTrigger: {
                trigger: container.current,
                start: "20% bottom",
                end: "bottom top"
            }
        })
            .fromTo(["#blog .sectin-header h3","#blog .section-header h2","#blog .blog-card"],
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, stagger: 0.5 })

    }, { scope: container })
    return (
        <section id="blog" ref={container}>
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