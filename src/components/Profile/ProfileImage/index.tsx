import { Avatar } from 'antd'
import React from 'react'

type Image = {
  image: string
  size?: string
}
const ImageProfile: React.FC<Image> = ({ image, size }) => {
  return (
    <Avatar
      style={{
        width: size,
        height: size,
        borderRadius: '100%',
      }}
      src={image}
      alt="image profile"
    />
  )
}
export default ImageProfile
