export type FieldType = 'text' | 'textarea' | 'email' | 'number' | 'select' | 'checkbox' | 'radio';

export interface Field {
  id: string;
  type: FieldType;
  label: string;
  placeholder?: string;
  required: boolean;
  validation?: string;
  options?: string[];
  value?: string | number | boolean | string[];
}

export interface FormState {
  fields: Field[];
  selectedField: string | null;
  addField: (field: Omit<Field, 'id'>) => void;
  removeField: (id: string) => void;
  updateField: (id: string, updates: Partial<Field>) => void;
  setSelectedField: (id: string | null) => void;
  reorderFields: (startIndex: number, endIndex: number) => void;
  clearForm: () => void;
}
