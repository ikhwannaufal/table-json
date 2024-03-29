import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";

function App() {
  const [column, setColumn] = useState([])
  const [records, setRecords] = useState([])

  useEffect(() => {
    fetch('https://phenomenal-clafoutis-123631.netlify.app/data.json')
    .then(res => res.json())
    .then(data => {
      setColumn(Object.keys(data.users[0]))
      setRecords(data.users)
    })
  }, [])

  return (
    <div className="App">
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              {column.map((col,i) => (
                <th key={i}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {
              records.map((record, i) => (
                <tr key={i}>
                  <td>{record.id}</td>
                  <td>{record.name}</td>
                  <td>{record.email}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
