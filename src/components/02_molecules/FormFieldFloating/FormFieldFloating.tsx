import { Input } from '../../01_atoms/Input';
import { LabelFlotating } from '../../01_atoms/LabelFlotating';

export default function FormFieldFloating() {
  return (
    <div className="relative flex h-[46px] flex-col justify-end border">
      <Input id="input-text" name="user-name" placeholder="Elige un usuario" type="text" />
      <LabelFlotating floating text="Elige un usuario" />
    </div>
  );
}