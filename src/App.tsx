import _ from 'lodash';
import { useEffect, useMemo, useState } from 'react'
import useSpellQueue from './hooks/useSpellQueue'
import { defaultKeyBindings, initialSpells, spells, ultSpell } from './types/constants'
import { InvokeSpell } from './types/spells.types'
import SpellButton from './components/SpellButton.react';

function App() {
  const { spellQueue, queue } = useSpellQueue()
  const [spell, setSpell] = useState<InvokeSpell | undefined>()

  const ultDisabled = useMemo(() => spellQueue.length < 3, [spellQueue])

  useEffect(() => {
    const handleKeyDown = (evt: KeyboardEvent) => {
      if (defaultKeyBindings.includes(evt.key)) {
        if (evt.key.toLowerCase() === 'r' && !ultDisabled) {
          return onClickUlt()
        }
        queue(evt.key)
      }
    }

    document.addEventListener('keypress', handleKeyDown)

    return () => {
      document.removeEventListener('keypress', handleKeyDown)
    }
  }, [queue, ultDisabled])

  const getSpellMapping = (spell: string) => {
    return spell.split('').reduce((acc, current) => {
      !acc[current] ? acc[current] = 1 : acc[current] += 1


      return acc
    }, {} as Record<string, number>)
  }

  const allSpellMappings = useMemo(() => {
    return Object
      .keys(spells)
      .map((spell) => getSpellMapping(spell))
  }, [])

  const onClickOrbCast = () => {}
  const onClickUlt = () => {
    if (!spells[spellQueue]) {
      // Perform fuzzy search
      const currentSpellMap = getSpellMapping(spellQueue)

      const foundSpellMap = allSpellMappings
        .find((spellMap) => _.isEqual(currentSpellMap, spellMap))

      const spellKey = Object.entries(foundSpellMap ?? {})
        .reduce((acc, [randomSpellKey, spellOccurrence]) => {
          let loopIterations = 0

          while (spellOccurrence > loopIterations) {
            acc = acc.concat(randomSpellKey)

            loopIterations += 1
          }
          return acc
        }, '')

        return setSpell(spells[spellKey])
    }

    return setSpell(spells[spellQueue])
  }

  return (
    <div className="App">
      <div className="App__SpellButtonWrapper">
        {
          initialSpells.map((spell) => <SpellButton key={spell.name} {...spell} />)
        }
        <SpellButton {...ultSpell} disabled={ultDisabled} />
      </div>
    </div>
  );
}

export default App;
