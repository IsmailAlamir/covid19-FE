import React, { useState, useEffect } from 'react';
import './card.css';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default function AllCountries() {

    const [data, setData] = useState([]);


    async function addToRecords(id) {
        const url = `https://my-api.com/records/${id}`;
        try {
            const response = await axios.post(url);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }


    useEffect(() => {
        async function fetchData() {
            const response = await axios.get("https://api.covid19api.com/summary");
            const jsonData = response.data;
            setData(jsonData.Countries);
        }
        fetchData();
    }, []);

    return (
        <div>
            <h1>COVID19 Statistics for All countries</h1>
            <div>
                {data.map((result) => {
                    return (
                        <div class="card">
                        <div class="cardContainer">
                            <h4><b>Country: {result.Country}</b></h4>
                            <p>Total Confirmed Cases: {result.TotalConfirmed}</p>
                            <p>Total Deaths Cases:  {result.TotalDeaths} </p>
                            <p>Total Recovered Cases:  {result.TotalRecovered} </p>
                            <p>Date:  {result.ID} </p>
        
                            <hr />
                            <Button variant="primary" onClick={() => addToRecords(result.ID)}>ADD TO MY RECORDS</Button>
                        </div>
                    </div>
                            );
                })}

            </div>
        </div >
    )
}
