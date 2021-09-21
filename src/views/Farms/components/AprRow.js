import Text from 'components/Text/Text';
import styled from 'styled-components';
import { formatNumber } from 'utils/formatBalance';
import PropTypes from 'prop-types';

const StyledApr = styled.div`
  margin: 9px 0;
  border-radius: 43px;
  padding: 15px 21px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  cursor: pointer;
`;

const AprRow = ({onPresentApyModal, weeklyAPR, monthlyAPR, yearlyAPR}) => {
  return (
      <StyledApr onClick={onPresentApyModal}>
        <Text>APR (week - month - year)</Text>
        <Text>
          {weeklyAPR
              ? `${weeklyAPR === '0' ? '???' : formatNumber(+weeklyAPR)}% - ${
                  monthlyAPR === '0' ? '???' : formatNumber(+monthlyAPR)
              }% - ${yearlyAPR === '0' ? '???' : formatNumber(+yearlyAPR)}%`
              : '...'}
        </Text>
      </StyledApr>
  );
};

AprRow.propTypes = {
  onPresentApyModal: PropTypes.func,
};

export default AprRow;