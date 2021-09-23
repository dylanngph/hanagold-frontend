import PropTypes from 'prop-types';
import DIPOAcitive from 'views/DIPO/components/DIPOTabBtn/Acitive';
import DIPODetails from 'views/DIPO/components/DIPOTabBtn/Upcoming';
import DIPOFinished from 'views/DIPO/components/DIPOTabBtn/Finished';
DIPOController.propTypes = {
    List: PropTypes.string
  };
  DIPOController.defaultProps={
    List:"Upcoming"
  };
function DIPOController(props) {
    const List=props;
    if(List.data==="Upcomning"){
        return(
            <DIPODetails></DIPODetails>
        );
    } else if(List.data==="Active"){
      return (
        <DIPOAcitive></DIPOAcitive>
      );
    } else if(List.data==="Finished"){
      return(
       <DIPOFinished></DIPOFinished>
      );
    }
    
}
export default DIPOController;