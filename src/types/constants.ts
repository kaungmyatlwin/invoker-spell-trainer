import { InvokeSpell, InvokeSpells } from "./spells.types";

export const spells: InvokeSpells = {
  'qqq': {
    name: 'Cold Snap',
    description: '',
    icon: require('../assets/invoker_cold_snap.png'),
  },
  'qqw': {
    name: 'Ghost Walk',
    description: '',
    icon: require('../assets/invoker_cold_snap.png'),
  },
  'qqe': {
    name: 'Ice Wall',
    description: '',
    icon: require('../assets/invoker_ice_wall.png'),
  },
  'qwe': {
    name: 'Deafening Blast',
    description: '',
    icon: require('../assets/invoker_deafening_blast.png'),
  },
  'www': {
    name: 'EMP',
    description: '',
    icon: require('../assets/invoker_emp.png'),
  },
  'wwq': {
    name: 'Tornado',
    description: '',
    icon: require('../assets/invoker_tornado.png'),
  },
  'wwe': {
    name: 'Alacrity',
    description: '',
    icon: require('../assets/invoker_alacrity.png'),
  },
  'eeq': {
    name: 'Forge Spirit',
    description: '',
    icon: require('../assets/invoker_forge_spirit.png'),
  },
  'eew': {
    name: 'Chaos Meteor',
    description: '',
    icon: require('../assets/invoker_chaos_meteor.png'),
  },
  'eee': {
    name: 'Sun Strike',
    description: '',
    icon: require('../assets/invoker_sun_strike.png'),
  }
}

export const defaultKeyBindings = ['q', 'w', 'e', 'r']

export const INITIAL_SPELLS: InvokeSpell[] = [
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
