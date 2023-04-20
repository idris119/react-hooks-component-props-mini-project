import blogData from "../data/blog";

function ArticleList(props){
    const list =props.list
    return(    
        <main>
            {list.map((blogData)=>(<div>
                <p></p>
            </div>))}

        </main>
    )
}
export default ArticleList;