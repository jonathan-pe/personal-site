import { Card } from '@/components/ui/card'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { GAMES_PLAYED } from '@/lib/meInfo'
import Image from 'next/image'
import Link from 'next/link'

import './gameCatalog.css'

export default function GameCatalog() {
  return (
    <div className="flex flex-1 gap-4 flex-wrap justify-center items-center">
      {GAMES_PLAYED.map((game) => {
        return (
          <TooltipProvider key={game.id} delayDuration={0}>
            <Tooltip>
              <TooltipTrigger>
                <Link href={game.link} target="_blank" rel="noopener noreferrer">
                  <Card
                    id="game-card"
                    className="flex justify-center items-center p-6 h-28 w-28 md:h-30 md:w-30 xl:h-36 xl:w-36"
                  >
                    <Image alt={`${game.title} icon`} src={game.icon} />
                  </Card>
                </Link>
              </TooltipTrigger>
              <TooltipContent>{game.title}</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )
      })}
    </div>
  )
}
