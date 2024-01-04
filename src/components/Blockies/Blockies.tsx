import { FC } from 'react'
import Blockies from 'react-blockies'

interface BlockProps {
  address: string
}

const Block: FC<BlockProps> = ({ address }) => {
  return <Blockies seed={address} size={12} scale={3} />
}

export default Block
