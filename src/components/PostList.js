import React from 'react'
import Post from './Post'
import './PostList.css'

//Show dynamically all posts
function PostList({allPosts}) {
    console.log(allPosts)

    return (
        <div className="postsList">
            <p className="title">All quotes</p>
            <ul style={{margin: '0px', padding: '0px'}}>
                {
                    allPosts.map((post) => (
                        <Post name={post.userName} email={post.userEmail} text={post.userText} />
                    ))
                }
            </ul>
        </div>
    )
}

export default PostList
