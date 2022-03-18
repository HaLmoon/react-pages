import React from 'react';

function User({user}){
    return (
        <div>
            <b>{user.username}</b> <span>{user.email}</span>
        </div>
    );

}

function UserList () {
    const user = [
        {
            id : 1 ,
            username : 'kaya',
            email : 'public1@test.com'
        },
        {
            id : 2 ,
            username : 'kaya4',
            email : 'public4@test.com'
        },
        {
            id : 3 ,
            username : 'kaya2',
            email : 'public2@test.com'
        },
        {
            id : 4 ,
            username : 'kaya3',
            email : 'public3@test.com'
        }
    ]

    const DomStyle = {
        marginTop : 15,
        display: 'block',
        textDecoration:'underline'
    }


    return (
        <div>
            <h3 style={DomStyle}>배열</h3>
            {user.map(user => (
                <User user={user} key={user.id}/>
            ))}
        </div>
    )
}   


export default UserList;