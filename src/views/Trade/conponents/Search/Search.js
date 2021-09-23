import {SearchIcon} from '@heroicons/react/solid';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: min-content;
    display: flex;
    align-items: center;
    color: white;
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  padding: 11px 16px;
  background: linear-gradient(90.49deg, rgba(255, 255, 255, 0.17) 6.72%, rgba(255, 255, 255, 0.07) 77.46%);
`;

const Input = styled.input`
  background: transparent;
  border: none;
  color: white;
  margin-left: 10px;
  
  &::placeholder{
    color: white;
  }
  
  &:focus{
    box-shadow: none;
    outline: none;
  }
`;

const Search = ({setSearch}) => {
    return (
        <Wrapper >
            <SearchIcon width={15}/>
            <Input
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Enter Symbol"
            />
        </Wrapper>
    );
};

export default Search;