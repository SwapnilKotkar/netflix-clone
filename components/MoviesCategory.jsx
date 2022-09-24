import React from 'react'
import Row from './Row'
import requests from '../requests/requests'

const MoviesCategory = () => {
  return (
    <>
        <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals} isLargeRow/>
        <Row title="Trending Now" fetchURL={requests.fetchTrending} wait={1000}/>
        <Row title="Top Rated" fetchURL={requests.fetchTopRated} wait={1300}/>
        <Row title="Action Movies" fetchURL={requests.fetchActionMovies} wait={1600}/>
        <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} wait={1900}/>
        <Row title="Horror Movies" fetchURL={requests.fetchAHorrorMovies} wait={2200}/>
        <Row title="Romance Movies" fetchURL={requests.fetchARomanceMovies} wait={2500}/>
        <Row title="Documentries" fetchURL={requests.fetchDocumentries} wait={2800}/>

    </>
  )
}

export default MoviesCategory