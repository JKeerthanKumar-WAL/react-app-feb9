import { useState } from "react";
const Comment = () => {
    let [comment, setComment] = useState([]);
    const addComment = (event) => {
        event.preventDefault();
        let commentOb = {
            author_name: event.target.author.value,
            comment_title: event.target.title.value,
            submission_date: event.target.date.value,
            comment_body: event.target.body.value
        }
        let newComments = [...comment, commentOb];
        setComment(newComments);
    }
    const deleteComment = (indexForDeleting) => {
        let newComments = comment.filter(function (val, index) {
            if (indexForDeleting == index) {
                return false;
            }
            return true;
        });
        setComment(newComments);
    }
    return (
        <div className="App-div">
            <h1>Comments Form</h1>
            <form onSubmit={addComment} className="App-form">
                <b>Author : </b><input type="text" name="author" /><br /><br />
                <b>Title : </b><input type="text" name="title" /><br /><br />
                <b>Date : </b><input type="date" name="date" /><br /><br />
                <b>Body : </b><textarea name="body"></textarea><br /><br />
                <button><b>Submit</b></button><br />
            </form>
            {comment.map((val, index) => {
                return (
                    <div className="divone">
                        <h2>Comment {index+1}</h2>
                        <b>Author Name : </b>{val.author_name}<br /><br />
                        <b>Comment Title : </b>{val.comment_title}<br /><br />
                        <b>Submission Date : </b>{val.submission_date}<br /><br />
                        <b>Comment Body : </b>{val.comment_body}<br /><br />
                        <button onClick={() => { deleteComment(index); }}><b>Delete Comment</b></button><br /><br />
                    </div>
                );
            })}
        </div>
    )
}
export default Comment;