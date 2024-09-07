import ProductsList from '../../components/ProductsList'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starwars from '../../assets/images/star_wars.png'
import { Game } from '../Home'
import { useEffect, useState } from 'react'

import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery,
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: sportGames } = useGetSportGamesQuery()

  // const [gamesAcao, setGamesAcao] = useState<Game[]>([])
  // const [gamesEsportes, setGamesEsportes] = useState<Game[]>([])
  // const [gamesSimulacao, setGamesSimulacao] = useState<Game[]>([])
  // const [gamesLuta, setGamesLuta] = useState<Game[]>([])
  // const [gamesRpg, setGamesRpg] = useState<Game[]>([])

  // useEffect(() => {
  //   fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
  //     .then((res) => res.json())
  //     .then((res) => setGamesAcao(res))
  // }, [])

  // useEffect(() => {
  //   fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
  //     .then((res) => res.json())
  //     .then((res) => setGamesEsportes(res))
  // }, [])

  // useEffect(() => {
  //   fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
  //     .then((res) => res.json())
  //     .then((res) => setGamesSimulacao(res))
  // }, [])

  // useEffect(() => {
  //   fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
  //     .then((res) => res.json())
  //     .then((res) => setGamesLuta(res))
  // }, [])

  // useEffect(() => {
  //   fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
  //     .then((res) => res.json())
  //     .then((res) => setGamesRpg(res))
  // }, [])

  if (actionGames && fightGames && rpgGames && simulationGames && sportGames) {
    return (
      <>
        <ProductsList games={actionGames} title="Ação" background="black" />
        <ProductsList games={sportGames} title="Esportes" background="gray" />
        <ProductsList
          games={simulationGames}
          title="Simulação"
          background="black"
        />
        <ProductsList games={fightGames} title="Luta" background="gray" />
        <ProductsList games={rpgGames} title="RPG" background="black" />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Categories
