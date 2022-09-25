import React from 'react'
import Row from './Row'
import requests from '../requests/requests'

const MoviesCategory = () => {
  return (
    <>
        <Row RowID='1' title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals} isLargeRow/>
        <Row RowID='2' title="Trending Now" fetchURL={requests.fetchTrending} wait={1000}/>
        <Row RowID='3' title="Top Rated" fetchURL={requests.fetchTopRated} wait={1300}/>
        <Row RowID='4' title="Action Movies" fetchURL={requests.fetchActionMovies} wait={1600}/>
        <Row RowID='5' title="Comedy Movies" fetchURL={requests.fetchComedyMovies} wait={1900}/>
        <Row RowID='6' title="Horror Movies" fetchURL={requests.fetchAHorrorMovies} wait={2200}/>
        <Row RowID='7' title="Romance Movies" fetchURL={requests.fetchARomanceMovies} wait={2500}/>
        <Row RowID='8' title="Documentries" fetchURL={requests.fetchDocumentries} wait={2800}/>

    </>
  )
}

export default MoviesCategory