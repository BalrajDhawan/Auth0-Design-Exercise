"use client";

import { useFormStore } from "@/lib/store";
import { Field } from "@/lib/types/form";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { 
  Settings, 
  Trash2, 
  Plus, 
  GripVertical,
  Eye,
  EyeOff,
  Sparkles,
  AlertCircle,
  CheckCircle
} from "lucide-react";

export const PropertyPanel = () => {
  const { 
    fields, 
    selectedFieldId, 
    updateField, 
    removeField, 
    selectField 
  } = useFormStore();

  const selectedField = fields.find(field => field.id === selectedFieldId);

  if (!selectedField) {
    return (
      <aside className="w-80 border-l border-[var(--border-color)] flex flex-col"
      // below needs to be change in case there in any animation in it?
      // style={{ background: 'linear-gradient(to bottom, #f9fafb, #ffffff)', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}
      >
        <h2 className="px-2 text-lg font-semibold tracking-tight m-4">Components</h2>

        <div className="flex items-center justify-between bg-white/80 backdrop-blur-sm text-gray-900 p-6 border-b border-gray-200 h-20 hidden">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
              <Settings className="w-4 h-4 text-gray-400" />
            </div>
            <div>
              <h2 className="font-bold text-lg">Properties</h2>
              <p className="text-xs text-gray-500">Select a field to edit</p>
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="text-center">
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6" 
            // check if you need some animation here?
            // style=
            // {{ background: 'linear-gradient(135deg, #f3f4f6, #e5e7eb)' }}
            >
              <Settings className="w-10 h-10 text-gray-300" />
            </div>
            <h3 className="text-lg font-semibold text-[var(--text-secondary)] mb-2">No Field Selected</h3>
            <p className="text-sm text-gray-500 max-w-48">
              Click on any field in the canvas to edit its properties and configuration
            </p>
          </div>
        </div>
      </aside>
    );
  }

  const handleUpdateField = (updates: Partial<Field>) => {
    updateField(selectedField.id, updates);
  };

  const handleAddOption = () => {
    const newOption = {
      id: `opt-${Date.now()}`,
      label: `Option ${(selectedField.options?.length || 0) + 1}`,
      value: `option${(selectedField.options?.length || 0) + 1}`,
    };
    
    handleUpdateField({
      options: [...(selectedField.options || []), newOption],
    });
  };

  const handleUpdateOption = (optionId: string, updates: Partial<{ label: string; value: string }>) => {
    const updatedOptions = selectedField.options?.map(option =>
      option.id === optionId ? { ...option, ...updates } : option
    );
    handleUpdateField({ options: updatedOptions });
  };

  const handleRemoveOption = (optionId: string) => {
    const updatedOptions = selectedField.options?.filter(option => option.id !== optionId);
    handleUpdateField({ options: updatedOptions });
  };

  const handleDeleteField = () => {
    removeField(selectedField.id);
  };

  return (
    <aside className="w-80 border-l border-[var(--border-color)] flex flex-col" 
    // style={{ background: 'linear-gradient(to bottom, #f9fafb, #ffffff)', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}
    >
      <h2 className="px-2 text-lg font-semibold tracking-tight m-4">Properties</h2>
      <div className="flex items-center justify-between bg-white/80 backdrop-blur-sm text-gray-900 p-6 border-b border-gray-200 h-20 hidden">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center shadow-sm" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <div>
            <h2 className="font-bold text-lg">Field Properties</h2>
            <p className="text-xs text-gray-500">{selectedField.type} field</p>
          </div>
        </div>
        <Button
          size="sm"
          variant="ghost"
          onClick={handleDeleteField}
          className="text-red-600 hover:text-red-700 hover:bg-red-50 transition-all duration-200"
        >
          <Trash2 className="w-4 h-4" />
        </Button>
      </div>
      
      <div className="flex-1 overflow-y-auto p-6 space-y-8">
        {/* Basic Properties */}
        <div className="space-y-6">
          {/* <div className="flex items-center space-x-2">
            <div className="w-1 h-4 rounded-full" style={{ background: 'linear-gradient(to bottom, #3b82f6, #8b5cf6)' }}></div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Basic Settings</h3>
          </div> */}
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="field-label" className="text-sm font-medium text-[var(--text-secondary)] mb-2 block">
                Field Label
              </Label>
              <Input
                id="field-label"
                value={selectedField.label}
                onChange={(e) => handleUpdateField({ label: e.target.value })}
                placeholder="Enter field label"
                className="w-full bg-white/80 !bg-[#1f262e]"
              />
            </div>
            
            <div>
              <Label htmlFor="field-placeholder" className="text-sm font-medium text-[var(--text-secondary)] mb-2 block">
                Placeholder Text
              </Label>
              <Input
                id="field-placeholder"
                value={selectedField.placeholder || ""}
                onChange={(e) => handleUpdateField({ placeholder: e.target.value })}
                placeholder="Enter placeholder text"
                className="w-full bg-white/80 !bg-[#1f262e]"
              />
            </div>
            
            <div className="flex items-center justify-between p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-gray-200 !bg-[#1f262e] border-0">
              <div>
                <Label htmlFor="field-required" className="text-sm font-medium text-[var(--text-secondary)]">
                  Required Field
                </Label>
                <p className="text-xs text-gray-500 mt-1">Make this field mandatory</p>
              </div>
              <Switch
                id="field-required"
                checked={selectedField.required}
                onChange={(e) => handleUpdateField({ required: e.target.checked })}
              />
            </div>
          </div>
        </div>

        <Separator className="bg-[var(--border-color)]" />

        {/* Field Type Specific Options */}
        {(selectedField.type === "select" || selectedField.type === "radio") && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-1 h-4 rounded-full" style={{ background: 'linear-gradient(to bottom, #10b981, #3b82f6)' }}></div>
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Options</h3>
              </div>
              <Button
                size="sm"
                variant="outline"
                onClick={handleAddOption}
                className="text-blue-600 border-blue-200 hover:bg-blue-50 transition-all duration-200"
              >
                <Plus className="w-3 h-3 mr-1" />
                Add Option
              </Button>
            </div>
            
            <div className="space-y-3">
              {selectedField.options?.map((option, index) => (
                <Card key={option.id} className="p-4 bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-gray-300 transition-all duration-200 !bg-[#1f262e] border-0">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-lg flex items-center justify-center text-blue-600 text-xs font-semibold" style={{
                      // background: 'linear-gradient(135deg, #dbeafe, #e9d5ff)'
                      }}>
                      {index + 1}
                    </div>
                    <div className="flex-1 space-y-2">
                      <Input
                        value={option.label}
                        onChange={(e) => handleUpdateOption(option.id, { label: e.target.value })}
                        placeholder="Option label"
                        className="text-sm bg-white/60 backdrop-blur-sm border-gray-200 focus:border-blue-500 focus:ring-blue-500 !bg-[#1f262e] border-0"
                      />
                      <Input
                        value={option.value}
                        onChange={(e) => handleUpdateOption(option.id, { value: e.target.value })}
                        placeholder="Option value"
                        className="text-sm bg-white/60 backdrop-blur-sm border-gray-200 focus:border-blue-500 focus:ring-blue-500 !bg-[#1f262e] border-0"
                      />
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleRemoveOption(option.id)}
                      className="text-red-600 hover:text-red-700 hover:bg-red-50 transition-all duration-200 !bg-[#1f262e]"
                    >
                      <Trash2 className="w-3 h-3" />
                    </Button>
                  </div>
                </Card>
              ))}
              
              {(!selectedField.options || selectedField.options.length === 0) && (
                <div className="text-center py-8 bg-white/60 backdrop-blur-sm rounded-lg border-2 border-dashed border-gray-300 ">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Plus className="w-6 h-6 text-gray-400" />
                  </div>
                  <p className="text-sm text-gray-500 mb-1">No options added yet</p>
                  <p className="text-xs text-gray-400">Click "Add Option" to get started</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Validation Rules */}
        {(selectedField.type === "number" || selectedField.type === "text") && (
          <>
            <Separator className="bg-[var(--border-color)]" />
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-1 h-4 rounded-full" style={{ background: 'linear-gradient(to bottom, #f59e0b, #ef4444)' }}></div>
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Validation</h3>
              </div>
              
              {selectedField.type === "number" && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="field-min" className="text-sm font-medium text-[var(--text-secondary)] mb-2 block">
                      Min Value
                    </Label>
                    <Input
                      id="field-min"
                      type="number"
                      value={selectedField.validation?.min || ""}
                      onChange={(e) => handleUpdateField({
                        validation: {
                          ...selectedField.validation,
                          min: e.target.value ? Number(e.target.value) : undefined,
                        }
                      })}
                      placeholder="Min"
                      className="w-full bg-white/80 backdrop-blur-sm border-gray-200 focus:border-blue-500 focus:ring-blue-500 !bg-[#1f262e]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="field-max" className="text-sm font-medium text-[var(--text-secondary)] mb-2 block">
                      Max Value
                    </Label>
                    <Input
                      id="field-max"
                      type="number"
                      value={selectedField.validation?.max || ""}
                      onChange={(e) => handleUpdateField({
                        validation: {
                          ...selectedField.validation,
                          max: e.target.value ? Number(e.target.value) : undefined,
                        }
                      })}
                      placeholder="Max"
                      className="w-full bg-white/80 backdrop-blur-sm border-gray-200 focus:border-blue-500 focus:ring-blue-500 !bg-[#1f262e]"
                    />
                  </div>
                </div>
              )}
              
              {selectedField.type === "text" && (
                <div>
                  <Label htmlFor="field-pattern" className="text-sm font-medium text-[var(--text-secondary)] mb-2 block">
                    Pattern (Regex)
                  </Label>
                  <Input
                    id="field-pattern"
                    value={selectedField.validation?.pattern || ""}
                    onChange={(e) => handleUpdateField({
                      validation: {
                        ...selectedField.validation,
                        pattern: e.target.value,
                      }
                    })}
                    placeholder="Regular expression pattern"
                    className="w-full bg-white/80 !bg-[#1f262e]"
                  />
                  <p className="text-xs text-gray-500 mt-2">
                    Enter a regular expression to validate the input format
                  </p>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </aside>
  );
};
