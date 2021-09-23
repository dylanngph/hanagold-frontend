import ButtonMenuItem from 'components/ButtonMenu/ButtonMenuItem';
import styled from 'styled-components';
import DIPOController from '../DIPOController/DIPOController';
import { useState } from 'react';
const DIPOTabBtn=()=>{
  const[ctl, setctl]=useState("Upcomning");
  function handleClick(evt) {
    var a=evt.target.value;
    setctl(a);
  }
  console.log(ctl);
  return (
    <div>
      <Wrapper>
        <div className="Cus_BtnDIPO">
        <ButtonMenuItem className="BtnActive" value="Upcomning" onClick={handleClick} >
            Upcoming
          </ButtonMenuItem >
          <ButtonMenuItem className="BtnActive" value="Active" onClick={handleClick} >
            Active
          </ButtonMenuItem>
          <ButtonMenuItem className="BtnActive" value="Finished" onClick={handleClick} >
            Finished
          </ButtonMenuItem>
        </div>
      </Wrapper>
      <DIPOController data={ctl}></DIPOController>
    </div>

    
  );
};
export default DIPOTabBtn;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top:5%;

  a {
    padding-left: 12px;
    padding-right: 12px;
  }

  ${({theme}) => theme.mediaQueries.sm} {
    margin-left: 16px;
  }
`;
