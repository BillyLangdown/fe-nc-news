

export default function Comments(){
    const [comments, setComments] = useState([])
    return(
        comments.map((comment)=>{
            <p>comment</p>
        })
    )
}