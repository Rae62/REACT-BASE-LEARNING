import React from "react";

export default (props) => {
    const users = props.users
    console.log(users);
    return (
        <div className="w-100 d-flex flex-wrap justify-content-center my-3">
            {users && users.length ? (
                users.map((user, index) => (
                    <div key={user.id} onClick={() => { props.selectUser(index) }} className="card m-2" style={{ width: "300px" }} >
                        <div className="card-header">{user.name}</div>
                             <img src={props.photo[index]} alt="" />
                        <div className="card-body">
                            <ul className="list-group">
                                <li className="list-group-item">{user.username}</li>
                                <li className="list-group-item">{user.email}</li>
                            </ul>
                            <button className='btn btn-small btn-danger' onClick={() => props.deleteUser(user.id)}>Delete</button>
                        </div>
                    </div>
                ))

            ) : (
                <h1 className="text-center">No users...</h1>
            )}

        </div>
    )
}