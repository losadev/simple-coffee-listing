import '../styles/Link.css'
import { LinkProps } from '../types/coffee.type';

const Link = ({name, handleClick}:LinkProps) => {
  return (
    <a onClick={handleClick}>{name}</a>
  )
}
export default Link;