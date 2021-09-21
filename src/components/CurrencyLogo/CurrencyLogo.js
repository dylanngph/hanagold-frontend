import classnames from 'classnames';

const CurrencyLogo = ({src, className}) => {
  return <img src={src} className={classnames(className, 'w-8 h-8 rounded-50 bg-white shadow-md p-1')} />;
};

export default CurrencyLogo;