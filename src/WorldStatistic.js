import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function WorldStatistic() {
  const [data, setData] = useState([]);


  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://api.covid19api.com/world/total");
      const jsonData = await response.json();
      setData(jsonData);
    }
    fetchData();
  }, []);

  return (
    <Container >
      <Row >
        <h4><b>World Total Statistic</b></h4>
      </Row>
      <Row style={{padding :"5%"}}>
        <Col>
          <p>Total Confirmed: {data["TotalConfirmed"]} </p>
        </Col>
        <Col>
          <p>Total Deaths: {data["TotalDeaths"]}</p>
        </Col>
        <Col>
          <p>Total Recovered: {data["TotalRecovered"]}</p>
        </Col>


      </Row>



    </Container>
  )
}
