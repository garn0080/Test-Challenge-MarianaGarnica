import React from 'react'
import Divider from '@mui/material/Divider';
import {Avatar} from '@mui/material';
import './Post.css'

function PostCard({name, email, text}) {

    console.log(name);
    console.log(email);
    console.log(text);

    // UI for each Post
    return (
        <section id="card">
        <div className="container">
            <Avatar id="avatar" src={`https://avatars.dicebear.com/api/croodles/${name}.svg?scale=150`}/>
            <div>
                <div className="contactInfo">
                    <h4>{name}</h4>
                    <Divider variant="middle" orientation="vertical" flexItem/>
                    <p>{email}</p>
                </div>
                <p>{text}</p> 
            </div>
        </div>
        <Divider variant="middle"/>
        </section>
    )
}

export default PostCard
