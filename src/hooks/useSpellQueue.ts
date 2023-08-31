import { useState } from "react"

export default function useSpellQueue() {
  const [spellQueue, setSpellQueue] = useState<string>('')

  const queue = (spellKey: string) => {
    const spellQueueArr = spellQueue.split('')

    if (spellQueueArr.length > 2) {
      spellQueueArr.shift()
    }

    spellQueueArr.push(spellKey)

    setSpellQueue(spellQueueArr.join(''))
  }

  return { spellQueue, queue }
}