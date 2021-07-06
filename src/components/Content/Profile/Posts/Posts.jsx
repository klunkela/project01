import React from 'react';
import Post from './Post/Post';

const Posts = (props) => {
    return (
        <div>
            <div>My Posts</div>
            <textarea
                onChange={props.changeNewPostText}
                value={props.textOfNewPost}
            />
            <button onClick={props.addPost}>Add text</button>
            {props.posts.map(
                e => <Post msg={e.post}/>
            )}

        </div>
    )
}

export default Posts;