import '../styles/Link.css'

interface Props {
  name: string
  handleClick: ()=> void
}

const Link = ({name, handleClick}:Props) => {
  return (
    <a onClick={handleClick}>{name}</a>
  )
}
export default Link;