import logo from './logo.svg';
import './App.css';

import {useState, useEffect} from 'react';
import axios from 'axios';
import Records from './components/Records.js'
import Pagination from './components/Pagination.js' 




function App() {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const [currentPage, setCurrentPage] = useState(1)
  const [recordsPerPage] = useState(10)

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res =>  {
        setData(res.data)
        setLoading(false);
      })
      .catch(() => {
          alert('Error while loading data')
      })
  }, [])

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage
  const currentRecords = data.slice(indexOfFirstRecord - indexOfLastRecord)
  const nPages = Math.ceil(data.length / recordsPerPage)  


  return (
    <div className='container mt-5'>
        <h2> Pagination Example in React</h2>
        <Records data={currentRecords} />
        <Pagintaion
          nPages={nPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
    </div>   
  )
}

export default App;
