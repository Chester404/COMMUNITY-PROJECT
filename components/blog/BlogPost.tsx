import React from 'react';
import BlogContent from './BlogContent';
import LoadData from "./LoadData";



export default function BlogPost () {
    const article = BlogContent.find(article => article.name);

    if (!article)
    return <h1>Article does not exist!</h1>;

    return (
            
        <section style={{ marginTop: 20 }}>

        {BlogContent.map((blog) => (
            <div className="content-margin" style={{ marginBottom: 30 }}>

                <img className="image-content lazy-load float-left" style={{marginRight: 90 }} src={blog.img_url}></img>
                <div className="card-body text-wrap" >
                    <p style={{marginBottom: 35 }}> {blog.date}  |  {blog.likes}  |  {blog.votes}</p >
                    <h1 className="card-title text-uppercase font-weight-bolder">{blog.title}</h1>
                    <p className="card-text" style={{marginBottom: 32 }}>{blog.content[0].substring(0, 230)}...</p>

                {/* Imported LoadData from Components      */}
                <LoadData />
                    
                </div>
            </div>
        )
    )
        }
        
    </section>
    )
    }