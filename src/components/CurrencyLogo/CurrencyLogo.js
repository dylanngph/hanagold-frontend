import classnames from 'classnames';

const CurrencyLogo = ({src, className}) => {
  return <img src={src} className={classnames(className, 'w-6 h-6 rounded-50 shadow-md p-1')} />;
};

export default CurrencyLogo;