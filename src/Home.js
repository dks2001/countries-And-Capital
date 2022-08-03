import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";
import { Link } from "react-router-dom";

const baseURL = "https://restcountries.com/v2/all";

const Home = () => {

    const [data, setData] = useState([]);
    const [searchData, setSearchData] = useState([]);
    const [term, setTerm] = useState('');

    const arr = [];

    useEffect(() => {
        onFormSubmit();
    },[term]);

    const onFormSubmit = () => {
        
        console.log("term",term);
        let newData = data.filter((item) => {
            
            let lc = item?.name?.toLowerCase()
            return lc?.includes(term);
        });
        

        setSearchData(newData);
    }

    useEffect(() => {

        axios.get(baseURL).then((response) => response.data.map(obj => (
            arr.push({
                name: obj['name'],
                capital: obj['capital'],
                currency: obj['currencies'] ? obj['currencies'][0].name : undefined
            })

        )));


        setTimeout(() => {
            setData(arr);
            setSearchData(arr);
        }, 2000);


        console.log("data", data);
        localStorage.setItem(data, JSON.stringify(data));


    }, [])

    return (
        <div className="container-div">

            <div className="input-div">
                <div className="labels">
                    <label>Search Capital By Country</label>
                    <Link className="logout" to="/">Logout</Link>
                </div>
                
                <br />
                <div className="form">
                    <input className="search" type="text" value={term} onChange={(e) => setTerm(e.target.value)}></input>
                </div>
            </div>


            <div className="heading">
                <div className="mg">Name</div>
                <div className="mg">Capital</div>
                <div className="mg">Currency</div>

            </div>
            <div className="content">
                {

                    searchData.map((item, index) => (
                        <div>
                            <div key={index} className="con">

                                <div className="mg size">{item.name}</div>
                                <div className="mg size">{item.capital}</div>
                                <div className="mg size">{item.currency}</div>

                            </div>
                            <hr />
                        </div>
                    ))

                }

            </div>
        </div>
    );
};

export default Home;