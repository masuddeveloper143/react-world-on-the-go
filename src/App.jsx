
import { Suspense } from 'react';
import './App.css'
import Countries from './components/countries'

const countriesPromise = fetch("https://restcountries.com/v3.1/all?fields=name,capital,currencies")
  .then(res => res.json());

function App() {

  return (

    <>
      <h1>react + vite</h1>
      <Suspense fallback={<h1> nadir on the go....</h1>}>
        <Countries countriesPromise={countriesPromise} ></Countries>
      </Suspense>

    </>
  )
}

export default App
