import { HTMLProps } from 'react';

const Gradient: React.FC<HTMLProps<HTMLDivElement>> = ({ ...props }) => {
  return <div {...props} />;
};

export default Gradient;
