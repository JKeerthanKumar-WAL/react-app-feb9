import { useState } from "react";
const Forum = (props) => {
    let [forum, setForum] = useState([]);
    const addForum = (event) => {
        event.preventDefault();
        let forumOb = {
            author_name: event.target.author.value,
            reply_message: event.target.message.value,
        }
        let newForum = [...forum, forumOb];
        setForum(newForum);
    }
    const deleteForum = (indexForDeleting) => {
        let newForum = forum.filter(function (val, index) {
            if (indexForDeleting == index) {
                return false;
            }
            return true;
        });
        setForum(newForum);
    }
    return (
        <div className="App-div">
            <h1>{props.topic}</h1>
            <form onSubmit={addForum}>
                <b>Name : </b><input type="text" name="author" /><br /><br />
                <b>Reply : </b><textarea name="message"></textarea> <br /><br />
                <button><b>Submit</b></button><br /><br />
            </form>
            <div className="divTwo">
                <table>
                    <tr>
                        <td><b>Serial No</b></td>
                        <td><b>Author Name</b></td>
                        <td><b>Reply Message</b></td>
                        <td><b>Button</b></td>
                    </tr>
                    {forum.map((val, index) => {
                        return (
                            <tr>
                                <td>{index+1}</td>
                                <td>{val.author_name}</td>
                                <td>{val.reply_message}</td>
                                <td><button onClick={() => { deleteForum(index); }}><b>Delete Details</b></button></td>
                            </tr>
                        );
                    })}
                </table>
            </div>
        </div>
    )
}
export default Forum;