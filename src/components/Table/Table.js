import styled from 'styled-components';

const Wrapper = styled.table`
  width: 100%;
  font-size: 18px;
  border-radius: 20px;
  background: rgba(16, 17, 51, 1);
  
  th {
    padding: 30px;
    color: white;

  }

  th:first-child {
    border-radius: 20px 0 0 0;
    text-align: left;
  }

  th:last-child {
    border-radius: 0 20px 0 0;
  }

  th {
    text-align: right;
  }

  td:first-child {
    text-align: left;
  }

  td {
    text-align: right;
    padding: 20px 30px;
    color: white;
  }

  tr:nth-child(odd) {
    background: linear-gradient(90.49deg, rgba(255, 255, 255, 0.06) 6.72%, rgba(255, 255, 255, 0.01) 77.46%);
  }

  tr:nth-child(even) {
    background: rgba(16, 17, 51, 1);
  }

  tr:last-child {
    td:first-child {
      border-radius: 0 0 0 20px;
    }

    td:last-child {
      border-radius: 0 0 20px 0 ;
    }
  }
`;

const Table = ({children, ...props}) => {
  return (
      <Wrapper {...props}>
        {children}
      </Wrapper>
  );
};

export default Table;