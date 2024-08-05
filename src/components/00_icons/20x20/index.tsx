import Icon20x20ArrowDown from './Icon20x20ArrowDown';
import Icon20x20ArrowUp from './Icon20x20ArrowUp';

type Props = {
  iconName: 'icon-arrow-down' | 'icon-arrow-up';
};

export default function AppIcon20x20({ iconName = 'icon-arrow-down' }: Props) {
  switch (iconName) {
    case 'icon-arrow-down': {
      return <Icon20x20ArrowDown />;
    }
    case 'icon-arrow-up': {
      return <Icon20x20ArrowUp />;
    }
  }
}
