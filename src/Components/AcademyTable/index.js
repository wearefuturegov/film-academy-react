import React, { useEffect, useState }  from 'react';
import * as contentful from 'contentful';
import { Link } from 'react-router-dom'
require('dotenv').config()

var moment = require('moment');

var client = contentful.createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN
})

export default function AcademyTable (props) {

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
    <table>
      <tbody>
        <tr>
          <th>Location</th>
          <th>Organisation</th>
          <th>Enquiries</th>
          <th>Application closing date</th>
          <th>Course start date</th>
          <th>Course end date</th>
          <th>Apply</th>
        </tr>
        {academies.map(academy =>
          <tr>
            <td>{academy.fields.location}</td>
            <td>{academy.fields.organisation}</td>
            <td>{academy.fields.contactEmail}</td>
            <td>{moment(academy.fields.deadline).format("Do MMM YYYY")}</td>
            <td>{moment(academy.fields.startDate).format("Do MMM YYYY")}</td>
            <td>{moment(academy.fields.endDate).format("Do MMM YYYY")}</td>
            <Link to={'/academies/' + academy.sys.id + '/apply'}>Apply</Link>
          </tr>
        )}
      </tbody>
    </table>
  );
}