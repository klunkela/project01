import React from 'react';
import User from "./User/User";
import axios from "axios";
import userPhoto from './../../../images/as.jpg';

import s from './Users.module.css';

const Users = (props) => {

    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers(response.data.items);
            });
        }
    }


    return (
        <div>
            kkew
            <button onClick={getUsers}>g u</button>
            {props.users.map(
                e => <div>
                    <img src={e.photos.small != null ? e.photos.small : userPhoto} className={s.zxc}/>
                    <div>{e.name}</div>
                    <div>{"e.place.country"}</div>
                    <div>{"e.place.city"}</div>
                    <div>
                        {e.isFollowed
                            ?
                            <button onClick={() => {
                                props.unfollow(e.id)
                            }}>
                                unfollow
                            </button>

                            :
                            <button onClick={() => {
                                props.follow(e.id)
                            }}>
                                follow
                            </button>
                        }
                    </div>
                    <br/>
                </div>
            )}
        </div>
    )
}

export default Users;