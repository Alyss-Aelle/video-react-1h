export function Tweet({id,name,content,like, onDelete}) {
    

    const onLike = () => {
        console.log("like",name)
    }
    
    return (
        <div className="tweet">
            <button onClick={() => onDelete(id)} className="delete">❌</button>
            <h3>{name}</h3>
            <p>{content}</p>
            <button onClick={() => onLike()}>{like} ❤️</button>
        </div>
    )
}
