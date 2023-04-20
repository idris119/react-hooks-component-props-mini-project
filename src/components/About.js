function About(props){
    return(
        <div>
            <aside>
                <img src = {props.picUrl}/>
                <p>{props.txt}</p>
            </aside>
        </div>
    );
}
export default About;