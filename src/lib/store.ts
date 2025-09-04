import { create } from "zustand";
import { Field, FormState } from "./types/form";

const generateId = () => Math.random().toString(36).substr(2, 9);

export const useFormStore = create<FormState>((set) => ({
  fields: [],
  selectedField: null,
  
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
