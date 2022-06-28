import * as axios from 'axios';

const apiSerie = axios.create({
    baseURL : 'https://api.themoviedb.org/4'
})

apiSerie.interceptors.request.use( req => {
    req.headers['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjhjZWI1ZDU2OWEwNjRhMDU3MTA5Nzg1MTI1Y2MzNSIsInN1YiI6IjVlOTRjOTNkMTU2Y2M3MDAxYTNiM2UyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uydI7ekwBffpMN6iLrM3evFHRIAGe6HfuGF5-zqYeT0'
    return req
})

export default apiSerie


export const apiSerieMap = (s) => ({
    img: 'https://image.tmdb.org/t/p/w500' + s.poster_path,
    title: s.name,
    details: `${ s.first_air_date } | ${ s.vote_average }/10 | ${ s.vote_count }`,
    description: s.overview
})