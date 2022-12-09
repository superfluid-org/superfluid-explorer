import Blockies from 'react-blockies';

const Block = (props: any) => {
  return (
    <Blockies
      seed={props.address}
      size={12}
      scale={3}
      color="#dfe"
      bgColor="#ffe"
      spotColor="#abc"
      className="identicon"
    />
  )
}

export default Block;
