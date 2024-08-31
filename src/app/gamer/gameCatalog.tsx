import { Card } from '@/components/ui/card'
import { GAMES_PLAYED } from '@/lib/meInfo'
import Image from 'next/image'

export default function GameCatalog() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {GAMES_PLAYED.map((game) => {
        return (
          <Card
            key={game.id}
            className="flex justify-center items-center p-6 h-24 w-24 md:h-30 md:w-30 lg:h-40 lg:w-40"
          >
            <Image alt={`${game.title} icon`} src={game.icon} />
          </Card>
        )
      })}
    </div>
  )
}
