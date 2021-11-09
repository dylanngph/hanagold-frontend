import styled from 'styled-components'
import Text from 'components/Text/Text'
import PropTypes from 'prop-types'

const Banner = ({ title, description, backgroundImage, ...props }) => {
    return(
        <div className="p-5 mb-5">
            <BannerWrap {...props} backgroundImage={backgroundImage}>
                <div className="text-primary text-xl md:text-3xl font-bold mb-3">{ title }</div>
                <div className="text-gray-400 text-md md:text-lg leading-5 md:w-2/3">{ description }</div>
            </BannerWrap>
        </div>
    )
}

const BannerWrap = styled.div`
    ${({ backgroundImage }) => backgroundImage ? `background-image: url(${backgroundImage})` : null};
    background-color: #000000;
    min-height: 260px;
    width: 100%;
    border-radius: 14px;
    box-shadow: 0 10px 15px -3px rgb(165 165 165 / 3%), 0 4px 6px -2px rgb(165 165 165 / 3%);
    background-repeat: no-repeat;
    background-size: cover;
    padding: 24px;
    ${({ theme }) => theme.mediaQueries.lg} {
        padding: 48px;
    }
`

Banner.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    backgroundImage: PropTypes.string
};

export default Banner