import Icon20x20ArrowDown from '../20x20/Icon20x20ArrowDown';
import Icon20x20ArrowUp from '../20x20/Icon20x20ArrowUp';

type Props = {
  iconName: 'icon-arrow-down' | 'icon-arrow-up';
  className?: string;
};

export default function Icon20x20({ iconName = 'icon-arrow-down', className = '' }: Props) {
  switch (iconName) {
    case 'icon-arrow-down': {
      return <Icon20x20ArrowDown className={className} />;
    }
    case 'icon-arrow-up': {
      return <Icon20x20ArrowUp className={className} />;
    }
  }
}
