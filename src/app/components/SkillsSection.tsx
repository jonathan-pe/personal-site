import React from 'react'
import { SKILLS } from '@/lib/meInfo'
// import Image from 'next/image'
// import BronzeMedal from '@/images/BronzeMedal.svg'
// import SilverMedal from '@/images/SilverMedal.svg'
// import GoldMedal from '@/images/GoldMedal.svg'

interface SkillBadgeProps {
  level: number
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ level }) => {
  // Define styles for each level
  const levelImages: { [key: number]: string } = {
    // TODO: look into getting some custom badges
    // 1: <Image alt="bronze medal" src={BronzeMedal} />,
    // 2: <Image alt="silver medal" src={SilverMedal} />,
    // 3: <Image alt="gold medal" src={GoldMedal} />,
    1: '🥉',
    2: '🥈',
    3: '🥇',
  }

  return <div className="w-10 h-10 text-2xl flex items-center justify-center relative">{levelImages[level]}</div>
}

const SkillsSection: React.FC = () => {
  return (
    <div className="flex flex-col w-full flex-1 lg:mx-0 mb-10 max-w-lg">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>
      {SKILLS.map((skill) => (
        <div key={skill.id} className="flex justify-between items-center gap-6">
          <h3 className="text-xl">{skill.name}</h3>
          <SkillBadge level={skill.level} />
        </div>
      ))}
    </div>
  )
}

export default SkillsSection
