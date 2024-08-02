export function Header() {
  return (
    <header className="py-4 flex md:flex-row flex-col gap-10 items-center justify-between">
      <img src="./logo-olympic.svg" alt="Logo das Olympic Games" />

      <div className="flex md:flex-row flex-col-reverse items-center gap-2">
        <span className="text-xs font-semibold md:text-right text-center">
          Atualizada em tempo real (5 minutos de atraso) com os dados dos jogos
          olímpicos de 2024.
        </span>
        <div className="animate-pulse bg-green-500 rounded-full w-5 h-5"></div>
      </div>
    </header>
  )
}
