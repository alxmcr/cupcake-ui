import { Icon20x20 } from '../../00_icons/Icon20x20';

export default function WrapperIconFloating() {
  return (
    <div className="absolute right-4 top-[9px] size-[20px] text-gray-500 duration-300 peer-focus:peer-placeholder-shown:rotate-180 peer-focus:peer-placeholder-shown:text-gray-600">
      <Icon20x20 iconName="icon-arrow-down" />
    </div>
  );
}
