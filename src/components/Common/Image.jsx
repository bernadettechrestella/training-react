import PropTypes from 'prop-types'

export const Avatar = ({ src, name, size }) => {
    return (
        <>
            <img
                className="avatar"
                src={src}
                alt={name}
                width={size}
                height="auto"
            />
        </>
    )
}

Avatar.propTypes = {
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
}

const Image = ({ src, auto, cs, width }) => {
    const imageHost = 'https://images.pexels.com'
    const params = new URLSearchParams({ auto, cs, w: width })
    const imageUrl = `${imageHost}${src}?${params}`
    return <img src={imageUrl} />
}

Image.propTypes = {
    src: PropTypes.string.isRequired,
    auto: PropTypes.string.isRequired,
    cs: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
}

export default Image
