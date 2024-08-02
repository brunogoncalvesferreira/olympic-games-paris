import { useEffect, useState } from "react"
import { CountriesProps, LinksProps } from "../types/interface"
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react"

export function Home() {
  const [countries, setContries] = useState<CountriesProps[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [total, setTotal] = useState(0)
  const [links, setLinks] = useState({} as LinksProps)

  async function fetchData(page: number) {
    const response = await fetch(
      `https://apis.codante.io/olympic-games/countries?page=${page}`
    )
    const ordens = await response.json()
    setContries(ordens.data)
    setLinks(ordens.links)
    setTotal(ordens.meta.last_page)
  }

  function handleNextPage() {
    if (links.next) {
      setCurrentPage(currentPage + 1)
    }
  }

  function handlePrevPage() {
    if (links.prev) {
      setCurrentPage(currentPage - 1)
    }
  }

  function goToFirstPage() {
    setCurrentPage(1)
  }

  function goToLastPage() {
    setCurrentPage(total)
  }

  useEffect(() => {
    fetchData(currentPage)
  }, [currentPage])

  return (
    <div className="pb-10">
      <div className="space-y-4 py-4">
        <h1 className="text-3xl">
          Quadro de medalhas das Olimpíadas 2024 em Paris
        </h1>
        <p>Confira o quadro de medalhas abaixo</p>
      </div>

      <div className="border border-gray-200 rounded overscroll-auto overflow-x-auto">
        <table className="w-full ">
          <thead>
            <tr className="text-left border-b border-gray-200">
              <th className="p-4">Posição</th>
              <th className="p-4">País</th>
              <th className="p-4">Ouro</th>
              <th className="p-4">Prata</th>
              <th className="p-4">Bronze</th>
              <th className="p-4">Total</th>
            </tr>
          </thead>

          <tbody>
            {countries.map((countries) => (
              <tr
                key={countries.id}
                className="text-left border-b border-gray-200"
              >
                <td className="p-4">{countries.rank}</td>
                <td className="p-4 flex items-center gap-2">
                  <img
                    className="size-8"
                    src={countries.flag_url}
                    alt={countries.name}
                  />
                  <span>{countries.name}</span>
                </td>
                <td className="p-4">{countries.gold_medals}</td>
                <td className="p-4">{countries.silver_medals}</td>
                <td className="p-4">{countries.bronze_medals}</td>
                <td className="p-4">{countries.total_medals}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center gap-2 mt-4">
        <span>
          Página {currentPage} de {total}
        </span>
        <button
          disabled={currentPage === 1}
          onClick={goToFirstPage}
          className="p-2 bg-gray-100 border rounded disabled:opacity-60"
        >
          <ChevronsLeft />
        </button>
        <button
          disabled={currentPage === 1}
          onClick={handlePrevPage}
          className="p-2 bg-gray-100 border rounded disabled:opacity-60"
        >
          <ChevronLeft />
        </button>
        <button
          disabled={currentPage === total}
          onClick={handleNextPage}
          className="p-2 bg-gray-100 border rounded disabled:opacity-60"
        >
          <ChevronRight />
        </button>
        <button
          disabled={currentPage === total}
          onClick={goToLastPage}
          className="p-2 bg-gray-100 border rounded disabled:opacity-60"
        >
          <ChevronsRight />
        </button>
      </div>
    </div>
  )
}
