import { create } from "zustand";

export type FieldType = 
  | "text" 
  | "textarea" 
  | "select" 
  | "checkbox" 
  | "radio" 
  | "number" 
  | "email";

export interface FieldOption {
  id: string;
  label: string;
  value: string;
}

export interface Field {
  id: string;
  type: FieldType;
  label: string;
  placeholder?: string;
  required: boolean;
  options?: FieldOption[]; // For select and radio fields
  validation?: {
    min?: number;
    max?: number;
    pattern?: string;
  };
}

export interface FormState {
  fields: Field[];
  formName: string;
  selectedFieldId: string | null;
  isPreviewMode: boolean;
  addField: (field: Omit<Field, 'id'>) => void;
  updateField: (id: string, updates: Partial<Field>) => void;
  removeField: (id: string) => void;
  reorderFields: (fromIndex: number, toIndex: number) => void;
  selectField: (id: string | null) => void;
  togglePreviewMode: () => void;
  clearForm: () => void;
  setFormName: (name: string) => void;
}

const generateId = () => Math.random().toString(36).substr(2, 9);

export const useFormStore = create<FormState>((set, get) => ({
  fields: [],
  formName: "Untitled Form",
  selectedFieldId: null,
  isPreviewMode: false,
  
  addField: (fieldData) => set((state) => ({
    fields: [...state.fields, { ...fieldData, id: generateId() }],
  })),
  
  updateField: (id, updates) => set((state) => ({
    fields: state.fields.map(field => 
      field.id === id ? { ...field, ...updates } : field
    ),
  })),
  
  removeField: (id) => set((state) => ({
    fields: state.fields.filter(field => field.id !== id),
    selectedFieldId: state.selectedFieldId === id ? null : state.selectedFieldId,
  })),
  
  reorderFields: (fromIndex, toIndex) => set((state) => {
    const newFields = [...state.fields];
    const [movedField] = newFields.splice(fromIndex, 1);
    newFields.splice(toIndex, 0, movedField);
    return { fields: newFields };
  }),
  
  selectField: (id) => set({ selectedFieldId: id }),
  
  togglePreviewMode: () => set((state) => ({ 
    isPreviewMode: !state.isPreviewMode,
    selectedFieldId: null, // Deselect when switching modes
  })),
  
  clearForm: () => set({ 
    fields: [], 
    selectedFieldId: null,
    isPreviewMode: false,
    formName: "Untitled Form"
  }),

  setFormName: (name) => set({ formName: name
  }),
}));
