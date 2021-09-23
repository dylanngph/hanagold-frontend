import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline';
import Text from 'components/Text/Text';
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    fill: ${({ theme }) => theme.colors.secondary};
  }
`

const ExpandableSectionButton = ({ onClick, expanded, style }) => {
  const { t } = useTranslation()

  return (
    <Wrapper
        style={style}
        aria-label={t('Hide or show expandable content')} role="button" onClick={() => onClick()}>
      <Text color="secondary" bold>
        {expanded ? t('Hide') : t('Details')}
      </Text>
      {expanded ? <ChevronUpIcon
          width="16"/> : <ChevronDownIcon
          width="16"/>}
    </Wrapper>
  )
}

ExpandableSectionButton.defaultProps = {
  expanded: false,
}

ExpandableSectionButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  expanded: PropTypes.bool.isRequired,
  style: PropTypes.object,
};

export default ExpandableSectionButton
