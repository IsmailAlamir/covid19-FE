import React, { useState } from 'react';
import "./card.css";
import Button from 'react-bootstrap/Button';

export default function CountryStatistic() {

    const [data, setData] = useState([]);

    const [country, setCountry] = useState("");
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");


    async function fetchData(country, start, end) {
        let url = `https://api.covid19api.com/country/${country}/status/confirmed?from=${start}T00:00:00Z&to=${end}T00:00:00Z`;
        const response = await fetch(url);
        const jsonData = await response.json();

        setData(jsonData);
    }
    const handleSearch = (event) => {
        event.preventDefault();
        const country = event.target.country.value;
        const start = event.target.start.value;
        const end = event.target.end.value;
        setCountry(country);
        setStart(start);
        setEnd(end);
        fetchData(country, start, end);
    }

    return (
        <div>
            <h1>Get Statistics for a specific country</h1>

            <div>
                <form onSubmit={handleSearch}>

                    <input type="text" id="country" name="country" />
                    <input type="date" id="start" name="start" />
                    <input type="date" id="end" name="end" />
                    <Button type="submit" variant="primary">Search </Button>

                </form>
            </div>
            {data.length ? (<div>
                {data.map((result) => {
                    return (
                        <div class="card">
                            <div class="cardContainer">
                                <h4><b>Date: {result.Date}</b></h4>
                                <p>Number of Confirmed Cases: {result.Cases}</p>
                                <hr />
                            </div>
                        </div>
                    );
                })}

            </div>
            ) : (
                <h3> </h3>
            )}


        </div>
    )
}
