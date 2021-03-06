import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
        console.log("aa")
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3003/users");
        setUser(result.data.reverse());
        console.log(result.data)
    };

    const deleteUser = async id => {
        await axios.delete(`http://localhost:3003/users/${id}`);
        loadUsers();
    };

    return (
        <div className="container">
            <div className="py-4">
                <table className="table border shadow">
                    <thead className="thead-dark">
                        <tr className="bg-Secondary">
                            <th scope="col"># </th>
                            <th scope="col">Name</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index}>
                                <th scope="row" valign="middle">{index + 1}</th>
                                <td valign="middle">{user.name}</td>
                                <td valign="middle">{user.username}</td>
                                <td valign="middle">{user.email}</td>
                                <td valign="middle">
                                    <Link className="btn btn-primary" to={`/users/${user.id}`}>
                                        View
                                    </Link>
                                    <Link
                                        className="btn btn-outline-primary m-2"
                                        to={`/users/edit/${user.id}`}
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => deleteUser(user.id)}
                                    >
                                        Delete
                                    </button>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;