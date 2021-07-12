import React from 'react';
import userPhoto from './../../../images/as.jpg';
import styles from './Users.module.css';
import s from './Users.module.css';
import Preloader from "../../Preloader/Preloader";
import {NavLink} from "react-router-dom";
import axios from "axios";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsers / props.onOnePage);

    let pages = []
    for (let i = 1; i < pagesCount + 1; i++) {
        pages.push(i)
    }

    props.users.map( e => {
        console.log(e)
    });
    return <div>
        <div>
            {props.isFetching ? <Preloader/> : null}
        </div>
        {pages.map(p => {
            return <span key={p} className={props.currentPage === p ? styles.currentPage : ''}
                         onClick={() => {
                             props.onPageChanged(p)
                         }}>{p}</span>
        })}
        {props.users.map(
            e => <div key={e.id}>
                <NavLink to={'/profile/' + e.id}>
                    <img src={e.photos.small != null ? e.photos.small : userPhoto} className={s.zxc}/>
                </NavLink>
                <div>{e.name}</div>
                <div>{"e.place.country"}</div>
                <div>{"e.place.city"}</div>
                <div>
                    {e.followed
                        ?
                        <button disabled={props.isFollowingInProgress.some(id => id===e.id)} onClick={() => {
                            props.setIsFollowingInProgress(true, e.id)
                            axios.delete('https://social-network.samuraijs.com/api/1.0/follow/' + e.id, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "082e0500-bc8e-4f04-bb83-bc60d207e620"
                                }
                            })
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.unfollow(e.id)
                                    }
                                    props.setIsFollowingInProgress(false, e.id)

                                });

                        }}>
                            unfollow
                        </button>

                        :
                        <button disabled={props.isFollowingInProgress.some(id => id===e.id)} onClick={() => {
                            props.setIsFollowingInProgress(true, e.id)
                            axios.post('https://social-network.samuraijs.com/api/1.0/follow/' + e.id, {},{
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "082e0500-bc8e-4f04-bb83-bc60d207e620"
                                }
                            })
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(e.id)
                                    }
                                    props.setIsFollowingInProgress(false, e.id)

                                });

                        }}>
                            follow
                        </button>
                    }
                </div>
                <br/>
            </div>
        )}
    </div>
}

export default Users;