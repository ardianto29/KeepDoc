import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components";

export function UserTypeSelector({
  userType,
  setUserType,
  onClickHandler,
}: UserTypeSelectorParams) {
  const accessChangeHandler = (type: UserType) => {
    setUserType(type);
    onClickHandler && onClickHandler(type);
  };

  return (
    <Select
      value={userType}
      onValueChange={(type: UserType) => accessChangeHandler(type)}>
      <SelectTrigger className="shad-select">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent className="border-none bg-dark-200">
        <SelectItem value="viewer" className="shad-select-item">
          View
        </SelectItem>
        <SelectItem value="editor" className="shad-select-item">
          Edit
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
