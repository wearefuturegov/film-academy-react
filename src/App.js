import React, {useState, useEffect} from 'react';
import './App.css';
import * as contentful from 'contentful';
require('dotenv').config()

var client = contentful.createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN
})

var moment = require('moment');

function App() {
  const [academies, setAcademies] = useState([])

  useEffect(() => {
    client.getEntries({
      content_type: 'filmAcademy',
      order: 'fields.location'
    }).then(entries => {
      setAcademies(entries.items)
    })

  })

  return (
    <div className="App">
      <table>
        <tbody>
          <tr>
            <th>Location</th>
            <th>Organisation</th>
            <th>Enquiries</th>
            <th>Application closing date</th>
            <th>Course start date</th>
            <th>Course end date</th>
          </tr>
          {academies.map(academy =>
            <tr>
              <td>{academy.fields.location}</td>
              <td>{academy.fields.organisation}</td>
              <td>{academy.fields.contactEmail}</td>
              <td>{moment(academy.fields.deadline).format("Do MMM YYYY")}</td>
              <td>{moment(academy.fields.startDate).format("Do MMM YYYY")}</td>
              <td>{moment(academy.fields.endDate).format("Do MMM YYYY")}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
