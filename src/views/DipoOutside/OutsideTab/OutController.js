import PropTypes from 'prop-types';
import SaleOptions from './SaleOptions';
import ProjectDetails from './ProjectDetails';
import YourApplication from './YourAllocation';
Outcontroller.propTypes = {
    List: PropTypes.string
  };
  Outcontroller.defaultProps={
    List:"Sale options"
  };
function Outcontroller(props) {
    const List=props;
    if(List.tmp==="Sale options"){
        return(
            <SaleOptions></SaleOptions>
        );
    } else if(List.tmp==="Project details"){
      return (
        <ProjectDetails></ProjectDetails>
      );
    } else if(List.tmp==="Your Allocation"){
      return(
        <YourApplication></YourApplication>
      );
    }
    
}
export default Outcontroller;