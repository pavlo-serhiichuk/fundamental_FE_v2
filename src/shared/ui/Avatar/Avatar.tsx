import { type CSSProperties, type FC, useMemo } from 'react'

interface AvatarProps {
  src: string
  alt: string
  size: number
}

export const Avatar: FC<AvatarProps> = (props) => {
  const { src, alt, size } = props

  const styles = useMemo<CSSProperties>(() => ({
    minWidth: size,
    minHeight: size,
    maxWidth: size,
    maxHeight: size,
    borderRadius: '50%',
    objectFit: 'cover',
    backgroundColor: 'grey'
  }), [size])

  return (
    <div>
      {src
        ? <img style={styles} src={src} alt={alt} />
        : <div style={styles}/>}
    </div>
  )
}
