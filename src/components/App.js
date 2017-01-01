import React from 'react';

export defaut class App extends React.Component
{
    render() 
    {
        const users=[];
        for (let i=1, i<=10,i++) {
            users.push(
                {
                    id:i,
                    username : 'John'+i,
                    job : 'Employee'+i,
                }
            );
        }

        return(
            <table>
              <thead>
                <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Job</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                (users.map((user,index=>
                return(
                    <tr key={user.id}>
                        <td># {user.id}</td>
                        <td>{user.username}</td>
                        <td>{user.job}</td>
                        <td>
                            <a href={'/user-edit/'+{user.id}}>
                                Edit
                            </a>
                        </td>
                        <td>
                            <button data-id={user.id}>Delete</button>
                        </td>
                    </tr>
                );
                )))
              </tbody>
            </table>
        )
    }
}