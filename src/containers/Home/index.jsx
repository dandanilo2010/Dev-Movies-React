import Button from "../../components/Header/Button"
import Slider from "../../components/Header/Slider"
import api from "../../services/api"
import { getImages } from "../../utils/getImages"
import { Background, Info, Poster, Container, ContainerButtons } from "./styles"
import { useState, useEffect } from "react"



function Home() {
    const [movie, SetMovie] = useState()
    const [topMovies, setTopMovies] = useState()
    const [topSeries, setTopSeries] = useState()
    const [popularSeries, setPopularSeries] = useState()
    const [personPopular, setPersonPopular] = useState()

    useEffect(() => {
        async function getMovies() {
            const {
                data: { results }
            } = await api.get('/movie/popular')

            SetMovie(results[3])

        }

        async function getTopMovies() {
            const {
                data: { results }
            } = await api.get('/movie/top_rated')

            console.log(results);

            setTopMovies(results)

        }

        async function getTopSeries() {
            const {
                data: { results }
            } = await api.get('/tv/top_rated')

            console.log(results);

            setTopSeries(results)

        }

        async function getPopularSeries() {
            const {
                data: { results }
            } = await api.get('/tv/popular')

            console.log(results);

            setPopularSeries(results)

        }

        async function personPopular() {
            const {
                data: { results }
            } = await api.get('/person/popular')

            console.log(results);

            setPersonPopular(results)

        }


        getMovies()
        getTopMovies()
        getTopSeries()
        getPopularSeries()
        personPopular()

    }, [])


    return (
        <>
            {movie && (
                <Background img={getImages(movie.backdrop_path)}>

                    <Container>
                        <Info>
                            <h1>{movie.title}</h1>
                            <p>{movie.overview}</p>

                            <ContainerButtons>
                                <Button red={true}>Assista Agora</Button>
                                <Button red={false}>Assista o Trailer</Button>
                            </ContainerButtons>
                        </Info>
                        <Poster>

                            <img src={getImages(movie.poster_path)} />

                        </Poster>
                    </Container>
                </Background>
            )}
            {topMovies && <Slider info={topMovies} title={'Top Filmes'} />}
            {topSeries && <Slider info={topSeries} title={'Top Series'} />}
            {popularSeries && <Slider info={popularSeries} title={'Séries Populares'} />}
            {personPopular && <Slider info={personPopular} title={'Artista Populares'} />}
        </>
    )

}



export default Home