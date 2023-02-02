export const TODO_LIST_STORAGE_KEY = 'dataList';

export const FILTER_STORAGE_KEY = 'filterName';

export const getStoredTodos = () => {
  try {
    const storedItem = localStorage.getItem(TODO_LIST_STORAGE_KEY);
    const parsedItem = JSON.parse(storedItem);
    return parsedItem || [];
  } catch {
    return [];
  }
};

export const getStoredFilter = () => {
  try {
    const storedFilterName = localStorage.getItem(FILTER_STORAGE_KEY);
    return storedFilterName || 'All';
  } catch {
    return 'All';
  }
}