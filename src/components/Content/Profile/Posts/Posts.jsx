import React from 'react';
import Post from './Post/Post';

const Posts = (props) => {
    let addPost = () => {
        props.addPost()
    }

    let onChange = (e) => {
        let text = e.target.value;
        props.onChange(text)
    }

    return (
        <div>
            <div>My Posts</div>
            <textarea
                onChange={onChange}
                value={props.newPostText}
            />
            <button onClick={addPost}>Add text</button>
            {props.posts.map(
                e => <Post msg={e.post}/>
            )}

        </div>
    )
}

export default Posts;