import React, { useEffect, useState }  from 'react';
import * as contentful from 'contentful';
import { Link } from 'react-router-dom'

require('dotenv').config()

var client = contentful.createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN
})

export default function ApplicationForm (props) {

  const [academy, setAcademy] = useState('')

  useEffect(() => {
    client.getEntry(props.match.params.id).then(entry => {
      setAcademy(entry)
      console.log(academy.fields)
    })
  })

  return (
    <div>
      <Link to={'/'}>Home</Link>
    </div>
  );
}