import { Input } from '../../01_atoms/Input';
import { LabelFlotating } from '../../01_atoms/LabelFlotating';

export default function FormFieldFloating() {
  return (
    <div className="relative">
      <Input id="input-text" name="user-name" type="text" />
      <LabelFlotating htmlFor="input-user" text="Elige un usuario" />
    </div>
  );
}
