import React from "react";
import Article from "./Article";


function ArticleList({posts}){
const postComps = posts.map((element)=>{
    return <Article 
        key={element.id} 
        title={element.title} 
        date={element.date} 
        preview={element.preview}/>
})
// console.log(postComps)
    return(
        <main>
            {postComps}
        </main>
    )
}

export default ArticleList;