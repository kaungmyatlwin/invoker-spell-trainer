import { InvokeSpell, InvokeSpells } from "./spells.types";

export const spells: InvokeSpells = {
  'qqq': {
    name: 'Cold Snap',
    description: '',
  },
  'qqw': {
    name: 'Ghost Walk',
    description: '',
  },
  'qqe': {
    name: 'Ice Wall',
    description: ''
  },
  'qwe': {
    name: 'Deafening Blast',
    description: ''
  },
  'www': {
    name: 'EMP',
    description: ''
  },
  'wwq': {
    name: 'Tornado',
    description: ''
  },
  'wwe': {
    name: 'Alacrity',
    description: ''
  },
  'eeq': {
    name: 'Forge Spirit',
    description: ''
  },
  'eew': {
    name: 'Chaos Meteor',
    description: '',
  },
  'eee': {
    name: 'Sun Strike',
    description: '',
  }
}

export const defaultKeyBindings = ['q', 'w', 'e', 'r']

export const initialSpells: InvokeSpell[] = [
  {
    name: 'Quas',
    description: `Allows manipulation of ice elements. Passively grants +1.0 Strength per level. Each Quas instance imbues Invoker's spells with Spell Lifesteal.`,
    icon: require('../assets/invoker_quas.png'),
  },
  {
    name: 'Wex',
    description: `Allows manipulation of storm elements. Passively grants +1.0 Agility per level. Each Wex instance provides increased cooldown reduction and movement speed.`,
    icon: require('../assets/invoker_wex.png'),
  },
  {
    name: 'Exort',
    description: `Allows manipulation of fire elements. Passively grants +1.0 Intelligence per level. Each Exort instance imbues Invoker's spells with Spell Amplification.`,
    icon: require('../assets/invoker_exort.png'),
  }
]

export const ultSpell: InvokeSpell = {
    name: 'Invoke',
    description: `Combines the properties of the elements currently being manipulated to create a new spell for Invoker to use. Invoke cooldown is reduced by 0.3 seconds for each orb level.`,
    icon: require('../assets/invoker_invoke.png'),
}
