import React from 'react'
import Row from './Row'
import requests from '../requests/requests'

const MoviesCategory = () => {
  return (
    <>
        <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals} isLargeRow/>
        <Row title="Trending Now" fetchURL={requests.fetchTrending}/>
        <Row title="Top Rated" fetchURL={requests.fetchTopRated}/>
        <Row title="Action Movies" fetchURL={requests.fetchActionMovies}/>
        <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies}/>
        <Row title="Horror Movies" fetchURL={requests.fetchAHorrorMovies}/>
        <Row title="Romance Movies" fetchURL={requests.fetchARomanceMovies}/>
        <Row title="Documentries" fetchURL={requests.fetchDocumentries}/>

    </>
  )
}

export default MoviesCategory