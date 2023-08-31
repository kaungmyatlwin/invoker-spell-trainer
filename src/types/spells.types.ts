export type InvokeSpell = {
  name: string
  description: string
  icon?: string
}

export type InvokeSpells = Record<string, InvokeSpell>

export enum SpellType {
  'q' = 'Quas',
  'w' = 'Wex',
  'e' = 'Exort',
}