import React, { useState, useEffect } from 'react';
import './card.css';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default function MyRecords() {


    const [recordsData, setRecordsData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            let url ="";
            const response = await axios.get(url);
            setRecordsData(response.Countries);
        }
        fetchData();
    }, []);


    const handleDelete = async (e) => {
        e.preventDefault();
        let url=``;
        let id =``;
        try {
            const res = await axios.delete(`${url}/${id}/`);
            console.log(res);
        } catch (err) {
            console.log(err);
        }
    };


    return (
        <div>
            <h1>COVID19 Statistics for All countries</h1>

            {recordsData.length ? (<div>
                {recordsData.map((card) => {
                    return (
                        <div class="card">
                            <div class="cardContainer">
                                <h4><b>Country: {card.Country}</b></h4>
                                <p>Date: {card.Date} </p>
                                <hr />
                                <Button variant="primary" onClick={handleDelete}>Delete</Button>

                            </div>
                        </div>
                    );
                })}

            </div>
            ) : (
                <h3>No Available Records ¯\_(ツ)_/¯</h3>
            )}


        </div>
    )
}
