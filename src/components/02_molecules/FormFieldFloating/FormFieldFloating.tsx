import { Input } from '../../01_atoms/Input';
import WrapperLabelFloating from '../WrapperLabelFloating/WrapperLabelFloating';

export default function FormFieldFloating() {
  return (
    <div className="relative flex h-[46px] flex-col justify-end border">
      <Input id="input-text" name="user-name" placeholder="Elige un usuario" type="text" />
      <WrapperLabelFloating text="Elige un usuario" />
    </div>
  );
}
