import './SpellButton.scss'

type Props = {
  name: string
  description: string
  icon?: string
  disabled?: boolean
}

export default function SpellButton(props: Props) {
  return (
    <button
      className="SpellButton"
      disabled={props.disabled}
      style={{ backgroundImage: `url(${props.icon})` }} />
  )
}