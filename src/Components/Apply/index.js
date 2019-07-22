import React, { useEffect, useState }  from 'react';

export default function ApplicationForm () {
  //const [academy, setAcademy] = useState[null]

  // useEffect(() => {
  //   client.getEntry(props.entry_id).then(entry => {
  //     setAcademy(entry)
  //   })
  return (
    <form>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}