import './App.scss'
import _ from 'lodash';
import { useEffect, useMemo, useState } from 'react'
import useSpellQueue from './hooks/useSpellQueue'
import { defaultKeyBindings, INITIAL_SPELLS, spells, ultSpell } from './types/constants'
import { InvokeSpell } from './types/spells.types'
import SpellButton from './components/SpellButton.react';

function App() {
  const { spellQueue, queue } = useSpellQueue()
  const [invokedSpells, setInvokedSpells] = useState<InvokeSpell[]>([])

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

    // Check if we are about to have same spells
    // TODO: refactor this logic into a hook?
    const hasSameSpell = invokedSpells.find((s) => s.name === spells[spellKey].name)
    if (hasSameSpell && invokedSpells.length === 1) {
      return
    }
    if (hasSameSpell && invokedSpells.length === 2) {
      if (invokedSpells[0] === spells[spellKey]) {
        return
      }

      return setInvokedSpells([
        invokedSpells[1],
        invokedSpells[0],
      ])
    }

    const invokeSpellsToSet = [spells[spellKey], ...invokedSpells]
    // Get rid of last spell if 2 slots are full
    if (invokedSpells.length === 2) {
      invokeSpellsToSet.pop()
    }

    return setInvokedSpells(invokeSpellsToSet)
  }

  return (
    <div className="App">
      <div className="App__playScene"></div>
      <div className="App__SpellButtonWrapper">
        {
          [...INITIAL_SPELLS, ...invokedSpells].map((spell) => spell && <SpellButton key={spell.name} {...spell} />)
        }
        <SpellButton {...ultSpell} disabled={ultDisabled} />
      </div>
    </div>
  );
}

export default App;
