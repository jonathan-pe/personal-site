import React from 'react'
import { SKILLS } from '@/lib/constants'

const SkillBars: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl text-base-content font-bold mb-8">Skills</h2>
      {SKILLS.map((skill, index) => (
        <div key={skill.id} className="mb-1">
          <h3 className="text-lg mb-1">{skill.name}</h3>
          <div className="bg-base-300 h-3 w-96 rounded-xl">
            <div
              className={`${['bg-primary', 'bg-secondary', 'bg-accent'][index % 3]} h-full rounded-xl`}
              style={{ width: `${skill.level}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default SkillBars
