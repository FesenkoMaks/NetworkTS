import React from "react";
import s from './Post.module.css';

type PostPropstype = {
    text: string
    like: number
}

function Post(props: PostPropstype) {
    return (
        <div className={s.post}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4bkPT14o4_n_lnU-3DNyZol1LE0vParolHN-kXQTD8exgO4-8&usqp=CAU" alt=""/>
            <span className={s.item}>
                {props.text}

            </span>
            <div className={s.like}>Like {props.like} </div>
        </div>
    )
}

export default Post;