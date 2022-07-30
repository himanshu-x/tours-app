import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'

function App() {
  const [tours, setTours] = useState([])
  const [loading, setLoading] = useState(true)

  function removeTour(id) {
    // console.log(id);
    setTours(tours.filter((tour) => tour.id !== id))


  }

  function fetchTours() {


    fetch(url)
      .then((data) => data.json())
      .then((data) => {
        setTours(data)
        setLoading(false)

      })
  }

  useEffect(() => {
    fetchTours()
  }, [])

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  return (
    <main>
      {/* send tours here */}
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  )
}

export default App
