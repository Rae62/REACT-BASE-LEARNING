import * as axios from 'axios'

const apiSerie = axios.create({
    baseURL : 'http://api.themoviedb.org/4'
})

apiSerie.interceptors.request.use(req => {
    req.headers['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZGFhMTNjMzA5ODI4YjgzZGFjNTEzMTE4ODM1ZmIwNyIsInN1YiI6IjYyM2IxNGRkZTk0MmJlMDA1Yzg2NTE4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8btiMsn6aWomJ628lzt1sM8Y1PvoVztNUaiDX4NI8rs'
    return req
})

export default apiSerie

export const apiSerieMap = (s) => ({
    img: "https://image.tmdb.org/t/p/w500" + s.poster_path,
    title: s.name,
    details: `${s.first_air_date} | ${s.vote_average}/10 | ${s.vote_count} `,
    description: s.overview
})

