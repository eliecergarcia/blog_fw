import { iconsList } from './iconsList';

interface Props {
  name: string;
  className?: string;
}

export const Icon: React.FC<Props> = ({ name, className }) => {
  const iconInfo = iconsList.find((icon) => icon.name === name);
  return <div className={className}>{iconInfo?.icon}</div>;
};
