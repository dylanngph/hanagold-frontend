import styled from 'styled-components';
import 'styles/index.css';
import PageHeader from 'components/PageHeader/PageHeader';
const HeaderDipo = () =>{
    return(
    <div>
        <div className="HeaderDIPOMB">
            <PageHeader className="HeaderDIPOMB"
            styleTitle={{
              maxWidth: 800,
              margin: '0 auto'
            }}
            fontSizeTitle="30px"
            logo="images/DIPO_logo.png"
            title="DIGITAL INITIAL PRIVATE OFFERING"
            subTitle="Valuable capital for productive projects"
            
        />
        </div>
        <div className="col-md-12 col-12 HeaderDIPOPC">
            <img src="images/BackgrounDIPO.png"></img>
        </div>
    </div>
        
    );
}
export default HeaderDipo;