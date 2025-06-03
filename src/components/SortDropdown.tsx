import type { SortOrder } from "./SortTodos";

type SortDropdownProps = {
  sortOrder: SortOrder;
  setSortOrder: (order: SortOrder) => void;
};

export const SortDropdown = ({ sortOrder, setSortOrder }: SortDropdownProps) => {
  return (
    <select
      value={sortOrder}
      onChange={(e) => setSortOrder(e.target.value as SortOrder)}
      className="w-48 p-2 border rounded "
    >
      <option value="incomplete-first">Incomplete First</option>
      <option value="complete-first">Complete First</option>
      <option value="alphabetical-asc">Alphabetical (A-Z)</option>
      <option value="alphabetical-desc">Alphabetical (Z-A)</option>
    </select>
  );
};
