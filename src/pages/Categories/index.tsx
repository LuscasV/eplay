import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery,
} from '../../services/api'

const Categories = () => {
  const { data: actionGames, isLoading: isLoadingAction } =
    useGetActionGamesQuery()
  const { data: fightGames, isLoading: isLoadingFight } =
    useGetFightGamesQuery()
  const { data: rpgGames, isLoading: isLoadingRpg } = useGetRpgGamesQuery()
  const { data: simulationGames, isLoading: isLoadingSimulator } =
    useGetSimulationGamesQuery()
  const { data: sportGames, isLoading: isLoadingSport } =
    useGetSportGamesQuery()

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

  return (
    <>
      <ProductsList
        games={actionGames}
        title="Ação"
        background="black"
        id="action"
        isLoading={isLoadingAction}
      />
      <ProductsList
        games={sportGames}
        title="Esportes"
        background="gray"
        id="sports"
        isLoading={isLoadingSport}
      />
      <ProductsList
        games={simulationGames}
        title="Simulação"
        background="black"
        id="simulator"
        isLoading={isLoadingSimulator}
      />
      <ProductsList
        games={fightGames}
        title="Luta"
        background="gray"
        id="fight"
        isLoading={isLoadingFight}
      />
      <ProductsList
        games={rpgGames}
        title="RPG"
        background="black"
        id="rpg"
        isLoading={isLoadingRpg}
      />
    </>
  )
}

export default Categories
