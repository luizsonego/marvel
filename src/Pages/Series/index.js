import React, { useEffect, useState } from 'react'
import Card from '../../Components/Card';
import api from '../../services/api';

function Series() {
  const [series, setSeries] = useState([]);
  useEffect(() => {
    try {
      api.get("series").then((response) => {
        setSeries(response.data.data.results);
      });
    } catch (error) {
      console.log(error);
    }
  }, [setSeries]);
  console.log(series)
  return (
    <div>
      {
        series.map((serie => (
          <Card key={serie.id} serie={serie} />
        )))
      }
    </div>
  )
}

export default Series
