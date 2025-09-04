"use client";

import { Header } from "@/components/header";
import { FormField } from "@/components/form-field";
import { useFormStore, FieldType } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Eye, 
  EyeOff, 
  Plus, 
  Trash2,
  FileText,
  Sparkles,
  Wand2,
  Layers
} from "lucide-react";
import { useState } from "react";

const FormBuilderCanvas = () => {
  const { 
    fields, 
    selectedFieldId, 
    isPreviewMode, 
    selectField, 
    removeField, 
    togglePreviewMode,
    clearForm,
    addField
  } = useFormStore();

  const [isDragOver, setIsDragOver] = useState(false);

  const handleFieldSelect = (fieldId: string) => {
    selectField(fieldId);
  };

  const handleFieldDelete = (fieldId: string) => {
    removeField(fieldId);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    try {
      const componentData = JSON.parse(e.dataTransfer.getData('application/json'));
      
      const fieldData = {
        type: componentData.type as FieldType,
        label: componentData.label,
        placeholder: `Enter ${componentData.label.toLowerCase()}`,
        required: false,
        options: componentData.defaultOptions?.map((opt: any, index: number) => ({
          id: `opt-${Date.now()}-${index}`,
          label: opt.label,
          value: opt.value,
        })),
      };

      addField(fieldData);
    } catch (error) {
      console.error('Error parsing dropped component:', error);
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* <Header /> */}
      
      <div 
        className="flex-1 overflow-auto transition-all duration-300"
        // below needs to change for showing appropriate animation?
        style={{ 
          // background: isDragOver 
          //   ? 'linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%)' 
          //   : 'linear-gradient(135deg, #f9fafb 0%, #e0e7ff 100%)'
        }}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="max-w-5xl mx-auto pt-4 pb-8 pl-8 pr-8">
          {/* Form Name Input */}
          <div className="mb-6">
            <input
              type="text"
              value={useFormStore.getState().formName}
              onChange={(e) => useFormStore.getState().setFormName(e.target.value)}
              className="text-xl font-bold text-[var(--text-primary)] bg-transparent border-none outline-none w-full px-2 py-1 rounded-md transition-colors duration-200 border-0"
              style={{ caretColor: '#4F46E5' }}
            />
          </div>

          {/* Canvas Header */}
          <div className="flex items-center justify-between mb-8">
            {/* <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg" style={{ 
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                  }}>
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    {isPreviewMode ? "Form Preview" : "Form Builder"}
                  </h1>
                  <p className="text-sm text-gray-500">
                    {isPreviewMode 
                      ? "See how your form will appear to users" 
                      : "Design and configure your form fields"
                    }
                  </p>
                </div>
              </div>
              
              {/* {!isPreviewMode && (
                <div className="flex items-center space-x-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200">
                  <Layers className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-gray-700">
                    {fields.length} field{fields.length !== 1 ? 's' : ''}
                  </span>
                </div>
              )} 
            </div> */}
            
            {/* <div className="flex items-center space-x-3">
              {!isPreviewMode && fields.length > 0 && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={clearForm}
                  className="text-red-600 border-red-200 hover:bg-red-50 transition-all duration-200"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Clear Form
                </Button>
              )}
              
              <Button
                variant={isPreviewMode ? "default" : "outline"}
                size="sm"
                onClick={togglePreviewMode}
                className="transition-all duration-200"
              //   style={isPreviewMode ? {
              //   //   background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              //   //   color: 'white',
              //   //   boxShadow: '0 0 20px rgba(59, 130, 246, 0.15)'
              //   // } : {
              //   //   borderColor: '#d1d5db',
              //   //   backgroundColor: 'rgba(255, 255, 255, 0.8)',
              //   //   backdropFilter: 'blur(8px)'
              //   // }
              // }
              >
                {isPreviewMode ? (
                  <>
                    <EyeOff className="w-4 h-4 mr-2" />
                    Exit Preview
                  </>
                ) : (
                  <>
                    <Eye className="w-4 h-4 mr-2" />
                    Preview
                  </>
                )}
              </Button>
            </div> */}
          </div>

          {/* Form Canvas */}
          <div className="space-y-6">
            {fields.length === 0 ? (
              <Card className="p-16 text-center border-2 border-dashed transition-all duration-300" style={{
                borderColor: isDragOver ? '#60a5fa' : '#d1d5db',
                // backgroundColor: isDragOver ? 'rgba(219, 234, 254, 0.5)' : 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(8px)',
                boxShadow: isDragOver ? '0 0 20px rgba(59, 130, 246, 0.15)' : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
              }}>
                <div className="max-w-md mx-auto">
                  <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-300" style={{
                    // check if you need some animation here?
                    // background: isDragOver 
                    //   ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                    //   : 'linear-gradient(135deg, #dbeafe, #e9d5ff)',
                    // boxShadow: isDragOver ? '0 0 20px rgba(59, 130, 246, 0.15)' : 'none',
                    // transform: isDragOver ? 'scale(1.1)' : 'scale(1)'
                  }}>
                    {isDragOver ? (
                      <Wand2 className="w-10 h-10 text-white" />
                    ) : (
                      <Plus className="w-10 h-10 text-blue-600" />
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--text-secondary)] mb-3">
                    {isDragOver 
                      ? "Drop to add component" 
                      : isPreviewMode 
                        ? "No form fields" 
                        : "Start building your form"
                    }
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {isDragOver 
                      ? "Release to add this component to your form and start customizing it"
                      : isPreviewMode 
                        ? "Add some fields to your form to see the preview here. Switch back to builder mode to add components."
                        : "Drag components from the sidebar or click to add them to your form. Build beautiful forms in minutes."
                    }
                  </p>
                  {!isPreviewMode && !isDragOver && (
                    <div className="flex items-center justify-center space-x-3 text-sm text-gray-500">
                      <div className="w-2 h-2 bg-blue-400 rounded-full" style={{ animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}></div>
                      <span>Form components available in the sidebar</span>
                      <div className="w-2 h-2 bg-purple-400 rounded-full" style={{ animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite', animationDelay: '0.5s' }}></div>
                    </div>
                  )}
                </div>
              </Card>
            ) : (
              <div className="space-y-6">
                {fields.map((field, index) => (
                  <div
                    key={field.id}
                    className={`transition-all duration-300 border-2 rounded-lg ${
                      selectedFieldId === field.id && !isPreviewMode
                        ? 'border-blue-600'
                        : 'border-transparent'
                    }`}
                    style={{
                      transform: selectedFieldId === field.id && !isPreviewMode 
                        ? 'scale(1.01)' 
                        : 'scale(1)'
                    }}
                  >
                    <FormField
                      field={field}
                      isSelected={selectedFieldId === field.id && !isPreviewMode}
                      isPreviewMode={isPreviewMode}
                      onSelect={() => handleFieldSelect(field.id)}
                      onDelete={() => handleFieldDelete(field.id)}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Preview Mode Footer */}
          {isPreviewMode && fields.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">
                      Form Preview Active
                    </p>
                    <p className="text-xs text-gray-500">
                      This is how your form will appear to users
                    </p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={togglePreviewMode}
                  className="border-gray-300 hover:border-gray-400 bg-white/80 backdrop-blur-sm transition-all duration-200"
                >
                  <EyeOff className="w-4 h-4 mr-2" />
                  Exit Preview
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { FormBuilderCanvas };
