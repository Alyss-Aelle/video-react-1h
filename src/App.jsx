import { useState } from "react";
import { Tweet } from "./Tweet";
const DEFAULT_TWEET = 
    [
      {
        id: 1,
        name: "Camille",
        content: "je vais bien",
        like:1000,
      },
      {
        id: 2,
        name: "Capucine",
        content: "je vais bien",
        like:40,
      },
      {
        id: 3,
        name: "Coline",
        content: "je vais bien",
        like:667,
      },
      {
        id: 4,
        name: "Clara",
        content: "je vais bien",
        like:5,
      },
    ];


  function App() {

    const [tweets, setTweets] = useState(DEFAULT_TWEET);

    const nameRef =useRef(); 

    const handleSubmit = (event) =>{
      event.preventDefault();
      console.log(event);

      const name = nameRef.current.value;
      const content = event.target.content.value;

      const newTweet = {
        id: tweets[tweets.length - 1]?.id + 1 ?? 0,
        name,
        content,
        like: 0
      };
      setTweets([...tweets, newTweet]);
      

      
    };

    const onDelete = (tweetId) => {
      setTweets((curr) =>curr.filter((tweet) => tweet.id !== tweetId));
    };

  return (
    <div>
      <form onSubmit ={handleSubmit}  className="tweet-form">
        <h1>New tweet</h1>
        <input ref={nameRef} placeholder="name" type="text" name="name"/>
        <input placeholder="content" type="content" name="content" />
        <input type="submit" />
      </form>
      <div className="tweet-container">
        { tweets.map((tweet) => {

return(
   <Tweet
   key={tweet.id}
   id={tweet.id}
    name={tweet.name} 
   content={tweet.content} 
   like={tweet.like}
   onDelete={(id) => {
    onDelete(id);
   }}
   />
);
})}
      
      </div>
    </div>
  )
}
export default App;