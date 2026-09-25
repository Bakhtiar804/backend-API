import express from "express"

 const commentsRoute = express.Router();


const comments = [
  {
    id: 1,
    body: "This is some awesome thinking!",
    postId: 242,
    likes: 3,
    username: "emmac"
  },
  {
    id: 2,
    body: "What terrific math skills you're showing!",
    postId: 46,
    likes: 4,
    username: "cameronp"
  },
  {
    id: 3,
    body: "You are an amazing writer!",
    postId: 235,
    likes: 2,
    username: "emilys"
  },
  {
    id: 4,
    body: "Wow! You have improved so much!",
    postId: 31,
    likes: 1,
    username: "braydenf"
  },
  {
    id: 5,
    body: "Nice idea!",
    postId: 212,
    likes: 1,
    username: "wyattp"
  },
  {
    id: 6,
    body: "You are showing excellent understanding!",
    postId: 184,
    likes: 5,
    username: "danielt"
  },
  {
    id: 7,
    body: "This is clear, concise, and complete!",
    postId: 172,
    likes: 1,
    username: "jamesd"
  },
  {
    id: 8,
    body: "What a powerful argument!",
    postId: 233,
    likes: 0,
    username: "lukec"
  },
  {
    id: 9,
    body: "I knew you could do it!",
    postId: 207,
    likes: 3,
    username: "jaces"
  },
  {
    id: 10,
    body: "Wonderful ideas!",
    postId: 87,
    likes: 0,
    username: "noram"
  }
];



commentsRoute.get('/' , (req , res ) => {
    res.status(200).json(comments);

})

commentsRoute.use(express.json());
commentsRoute.post('/' , (req , res ) => {
    const comment = req.body ; 
    comment.id = comments.length + 1;
    comments.push(comment);
    res.status(200).send({status : 200 , message : "Comment added successfully"})
})

commentsRoute.put('/:id' , (req , res ) => {
    const id = Number(req.params.id);
    const comment  = comments.find(comment => comment.id === id);
    if(!comment){
        res.status(404).send({status : 404 , message : "comment not found"})
    }
    comment.body = req.body.body ?? comment.body;
    comment.body = req.body.body ?? comment.body;
    comment.postId = req.body.postId ?? comment.postId;
    comment.likes = req.body.likes ?? comment.likes;

    res.status(200).send({status : 200 , message : "comment updated successfully"})
});

commentsRoute.delete('/:id' , (req , res ) => {
    const id = Number(req.params.id);
    const index = comments.findIndex(comment => comment.id === id);
    if(index === -1 ){
        res.status(404).send({status : 404 , message : "comment not found"})
    }
    comments.splice(index , 1);
    res.status(200).send({status : 200 , message : "comment delete successfully"})
})


 export default commentsRoute;