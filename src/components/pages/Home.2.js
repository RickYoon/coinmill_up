import React, { useState, useEffect } from "react";
// import React from "react";
import styled from 'styled-components'
import coindata from 'asset/database/db.json'
// import IMAGES from 'asset/images/index'
// import eklipse from 'asset/images/eklipse.png'
// import { Link } from "react-router-dom";
// import axios from "axios";

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

    // const loadUsers = async () => {
    //     const result = await axios.get("http://localhost:3003/users");
    //     setUser(result.data.reverse());
    //     console.log(result.data)
    // };

    // const deleteUser = async id => {
    //     await axios.delete(`http://localhost:3003/users/${id}`);
    //     loadUsers();
    // };


    const halfrowL = {
        width: "80px",
        height: "80px",
        marginLeft: "15px"
    }

    const halfrowLL = {
        width: "80px",
        height: "10px",
        marginLeft: "15px",

    }



    return (
        <div className="pt-5">
            <h1 className="text-center"> DeFi-Scout</h1>
            <div className="text-center"> * beta version (klaytn only)</div>
            <div className="d-flex justify-content-center mt-1">
                <button type="button" className="btn text-center btn-warning" onClick={() => location.href = 'https://efp5iwhnp8i.typeform.com/to/rvvi5K4V'}>제보하기</button>
            </div>
            <div className="mt-3">
                <Rrow>
                    <div style={halfrowLL}>coin</div>
                    <Containerr>
                        <Itemm>project </Itemm>
                        <Itemm>mainnet</Itemm>
                        <Itemm>startdate</Itemm>
                        <Itemm>intro</Itemm>
                    </Containerr>
                </Rrow>
                <div>
                    {coindata.coins.map((arr, index) => (
                        <div key={index}>
                            <Row onClick={() => { location.href = arr.website }}>
                                <img style={halfrowL} src={`${arr.coinsourceURL}`} alt="" />
                                <Containerr>
                                    <Itemm>{arr.projname} </Itemm>
                                    <Itemm>{arr.mainnet}</Itemm>
                                    <Itemm>{arr.startdate}</Itemm>
                                    <Itemm>{arr.shortintro}</Itemm>
                                </Containerr>

                            </Row>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Containerr = styled.div`
        display: flex;
        justify-content: space-between;
        vertical-align:center;
        align-items: stretch;
        flex-wrap: wrap;
        width: 100%;
    
`

const Itemm = styled.div`
        align-self: center;
        flex-grow: 1;

    &:nth-child(1){
        margin-left: 20px;
        width: 50px;
    }
    &:nth-child(2){
        flex-grow: 1;
    }
    &:nth-child(3){
        flex-grow: 1;
    }

`
const Rrow = styled.div`
    border: 1px solid palevioletred;
    border-radius: 12px;
    cursor: pointer;
    max-width: 800px;
    min-height: 30px;
    margin-top: 50px;
    margin: 10px auto;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 4px;
    padding-right: 4px;
    background-color: white;
    display: flex;
    flex-direction: row;
    @media (max-width: 768px) {
        display:none;
  }
`;

const Row = styled.div`
    border: 1px solid palevioletred;
    border-radius: 12px;
    cursor: pointer;
    max-width: 800px;
    min-height: 80px;
    margin-top: 50px;
    margin: 10px auto;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 4px;
    padding-right: 4px;
    background-color: white;
    display: flex;
    flex-direction: row;
    @media (max-width: 768px) {
        display: inline-block;
        flex-direction: column;
  }
`;



export default Home;