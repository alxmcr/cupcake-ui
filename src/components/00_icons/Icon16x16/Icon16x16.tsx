import Icon16x16Checkmark from '../16x16/Icon16x16Checkmark';
import Icon16x16Profile from '../16x16/Icon16x16Profile';

type Props = {
  iconName: 'icon-checkmark' | 'icon-profile';
  className?: string;
};

export default function AppIcon16x16({ iconName = 'icon-checkmark', className = '' }: Props) {
  switch (iconName) {
    case 'icon-checkmark': {
      return <Icon16x16Checkmark className={className} />;
    }
    case 'icon-profile': {
      return <Icon16x16Profile className={className} />;
    }
  }
}
