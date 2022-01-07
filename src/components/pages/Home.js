import React, { useState, useEffect } from "react";
// import React from "react";
import styled from 'styled-components'
import coindata from 'asset/database/db.json'
import { LineChart, Line, YAxis, XAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import IMAGES from 'asset/images/index'
// import eklipse from 'asset/images/eklipse.png'
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { BsFileEarmarkText } from "react-icons/bs";

const Home = () => {
    const [users, setUser] = useState(coindata.coins);
    const array = [1, 2, 3, 4, 5];

    useEffect(() => {
        setUser(coindata.coins)
        console.log(users)
        array.map((arr) => {
            console.log(arr)
        })

    }, []);
    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];


    return (
        <div className="pt-2">
            <h1 style={{ color: "white", fontSize: "20px" }} className="text-center">DeFi-project</h1>
            <div style={{ color: "white", fontSize: "15px" }} className="text-center"> * beta version</div>
            {/* <div className="d-flex justify-content-center mt-1">
                <button type="button" className="btn text-center btn-warning" onClick={() => location.href = 'https://efp5iwhnp8i.typeform.com/to/rvvi5K4V'}>제보하기</button>
            </div> */}
            <div style={{ maxWidth: "600px" }} className="mx-auto">
                <ResponsiveContainer width="99%" height={300}>
                    <LineChart
                        className="mx-auto"
                        width={500}
                        height={300}
                        data={data}
                    >
                        <XAxis dataKey="name" />
                        <YAxis axisLine={false} tickLine={false} mirror={true} tick={{ stroke: 'gray', strokeWidth: 1 }} />
                        <Tooltip />
                        <Legend />
                        {/* <CartesianGrid vertical={false} strokeDasharray="1" /> */}
                        <Line YAxis="right" type="monotone" dataKey="pv" stroke="#8884d8" dot={false} />
                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" dot={false} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div className="container py-4">
                <Table style={{ borderCollapse: "seperate", backgroundColor: "#423D33", fontSize: "14px", minWidth: "315px", borderRadius: "10px" }} className="table w-50 m-auto">
                    <thead className="text-center">
                        <tr style={{ color: "white" }}>
                            <th className="col-2">Name</th>
                            <th className="col-1">TVL</th>
                            <th className="col-1">7d chg</th>
                            <th className="col-1">Share</th>
                            <th className="col-2">Purpose</th>
                            {/* <Th>Price</Th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr style={{ color: "white", fontSize: "13px" }} className="text-center border border-dark" key={index}>
                                <td style={{ textAlign: "left", paddingLeft: "10px" }} valign="middle"><img className={"rounded-circle"} style={{ height: "30px", width: "30px", marginRight: "10px" }} src={`${user.coinsourceURL}`} alt="" />{user.projname}(KSP)</td>
                                <td valign="middle">$18.22b</td>
                                <td valign="middle">+7%</td>
                                <td valign="middle">25%</td>
                                <td valign="middle">stable swap</td>
                                {/* <Td valign="middle">
                                    <Link className="btn btn-outline-warning" to={`/users/${user.id}`}>
                                        <BsZoomIn />
                                    </Link>
                                </Td> */}
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <Footer>Copyright 2022 KlayLabs</Footer>
            </div>
        </div>
    );
};

// const Th = styled.th`
//   @media (max-width: 768px) {
//     display: none;
//   }
// `

// const Td = styled.td`
//   @media (max-width: 768px) {
//     display: none;
//   }
// `

const Footer = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    color: white;
    text-align: center;
`

const Table = styled.div`
    overflow-x :auto;
`

export default Home;