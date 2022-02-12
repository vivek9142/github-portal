import { Button,withWidth } from "@material-ui/core";

const ButtonComp  = ({width,children,...props}) =>{
  const size = width === 'xs' ? 'small':'medium';

  return (
    <Button size={size} {...props}>{children}</Button>
  )
}

export default withWidth()(ButtonComp);