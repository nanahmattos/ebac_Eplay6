import { Game } from "../pages/Home"

export const parseToBrl = (amount = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount)
}

const getTotalPrice = (items: Game[]) => {
  return items.reduce((acumulator, currentItem) => {
    if (currentItem.prices.current) {
      return (acumulator += currentItem.prices.current)
    }
    return 0
  }, 0)
}
