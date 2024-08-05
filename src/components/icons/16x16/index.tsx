import Icon16x16Checkmark from './Icon16x16Checkmark';
import Icon16x16Profile from './Icon16x16Profile';

type Props = {
  iconName: string;
};

export default function AppIcon16x16({ iconName = '' }: Props) {
  switch (iconName) {
    case 'icon-checkmark': {
      return <Icon16x16Checkmark />;
    }
    case 'icon-profile': {
      return <Icon16x16Profile />;
    }
  }

  return null;
}
