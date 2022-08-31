import React, { useEffect, useState } from "react";
// import { Button } from 'antd';


function App() {


  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'b2a8de55cbmsh084a90b25fbb2f1p1e6472jsneb8d24decee4',
      'X-RapidAPI-Host': 'netflix-weekly-top-10.p.rapidapi.com'
    }
  };

  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://netflix-weekly-top-10.p.rapidapi.com/api/othermovie', options)
	.then(response => response.json())
	.then(response => setData(response))
	.catch(err => console.error(err));
  }, [])

  // const jsonString = data.replace(/<\/?pre>/g, '');
  // data.replace(/<\/?pre>/g, '')




  return (
    <div className="App">
      <pre>{JSON.stringify(data, null, 2)}</pre>
      {/* <Button type="primary">Primary Button</Button>
      <Button>Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <br />
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button> */}
    </div>
  );
}

export default App;
