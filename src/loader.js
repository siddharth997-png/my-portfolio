import { useState } from 'react';
import Spinner from './components/spinner/spinner.component';
import App from './App';

const Loader = () => {
  const [loading, setloading] = useState(false)
  return (
    <>
      {
        (loading ? <Spinner/> : <App/>)
      }
    </>
  )
}

export default Loader
