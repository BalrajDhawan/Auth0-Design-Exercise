"use client";

import { Field } from "@/lib/store";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { 
  GripVertical, 
  Trash2, 
  Settings,
  AlertCircle,
  Sparkles,
  Type,
  AlignLeft,
  List,
  CheckSquare,
  CircleDot,
  Hash,
  Mail
} from "lucide-react";

interface FormFieldProps {
  field: Field;
  isSelected: boolean;
  isPreviewMode: boolean;
  onSelect: () => void;
  onDelete: () => void;
}

const getFieldIcon = (type: Field['type']) => {
  switch (type) {
    case 'text': return <Type className="w-4 h-4" />;
    case 'textarea': return <AlignLeft className="w-4 h-4" />;
    case 'select': return <List className="w-4 h-4" />;
    case 'checkbox': return <CheckSquare className="w-4 h-4" />;
    case 'radio': return <CircleDot className="w-4 h-4" />;
    case 'number': return <Hash className="w-4 h-4" />;
    case 'email': return <Mail className="w-4 h-4" />;
    default: return <Type className="w-4 h-4" />;
  }
};

export const FormField = ({ 
  field, 
  isSelected, 
  isPreviewMode, 
  onSelect, 
  onDelete 
}: FormFieldProps) => {
  const renderField = () => {
    switch (field.type) {
      case "text":
        return (
          <Input
            type="text"
            placeholder={field.placeholder}
            disabled={isPreviewMode}
            className="w-full bg-white/80 backdrop-blur-sm border-gray-200 focus:border-blue-500 focus:ring-blue-500 border-0"
          />
        );
      
      case "email":
        return (
          <Input
            type="email"
            placeholder={field.placeholder}
            disabled={isPreviewMode}
            className="w-full bg-white/80 backdrop-blur-sm border-gray-200 focus:border-blue-500 focus:ring-blue-500 border-0"
          />
        );
      
      case "number":
        return (
          <Input
            type="number"
            placeholder={field.placeholder}
            disabled={isPreviewMode}
            min={field.validation?.min}
            max={field.validation?.max}
            className="w-full bg-white/80 backdrop-blur-sm border-gray-200 focus:border-blue-500 focus:ring-blue-500 border-0"
          />
        );
      
      case "textarea":
        return (
          <Textarea
            placeholder={field.placeholder}
            disabled={isPreviewMode}
            className="w-full min-h-[80px] resize-none bg-white/80 backdrop-blur-sm border-gray-200 focus:border-blue-500 focus:ring-blue-500 border-0"
          />
        );
      
      case "select":
        return (
          <Select>
            <SelectTrigger className={`w-full bg-white/80 backdrop-blur-sm border-gray-200 focus:border-blue-500 focus:ring-blue-500 border-0 ${
              isPreviewMode ? 'opacity-50 cursor-not-allowed' : ''
            }`}>
              <SelectValue placeholder={field.placeholder || "Select an option"} />
            </SelectTrigger>
            <SelectContent>
              {field.options?.map((option) => (
                <SelectItem key={option.id} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      
      case "checkbox":
        return (
          <div className="flex items-center space-x-3 p-3 bg-white/60 backdrop-blur-sm rounded-lg border border-gray-200 !bg-[#1f262e] border-0">
            <Checkbox disabled={isPreviewMode} />
            <Label className="text-sm text-gray-700 font-medium">
              {field.placeholder || "Check this option"}
            </Label>
          </div>
        );
      
      case "radio":
        return (
          <RadioGroup>
            <div className="space-y-3">
              {field.options?.map((option) => (
                <div key={option.id} className="flex items-center space-x-3 p-3 bg-white/60 backdrop-blur-sm rounded-lg border border-gray-200 !bg-[#1f262e] !border-[var(--border-color)]">
                  <RadioGroupItem 
                    value={option.value} 
                    id={option.id} 
                    disabled={isPreviewMode}
                  />
                  <Label htmlFor={option.id} className={`text-sm font-medium ${
                    isPreviewMode ? 'text-gray-400' : 'text-gray-700'
                  }`}>
                    {option.label}
                  </Label>
                </div>
              ))}
            </div>
          </RadioGroup>
        );
      
      default:
        return <Input placeholder="Unknown field type" disabled />;
    }
  };

  if (isPreviewMode) {
    return (
      <div className="space-y-3 p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200" style={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}>
        <Label className="text-sm font-semibold flex items-center space-x-2">
          <span>{field.label}</span>
          {field.required && <span className="text-red-500 text-lg">*</span>}
        </Label>
        {renderField()}
      </div>
    );
  }

  return (
    <Card
      className={`p-6 cursor-pointer transition-all duration-300 bg-[#1f262e] hover:bg-[#2c3540] rounded-lg ${
        isSelected ? 'border-2 border-blue-600' : 'border border-transparent hover:border-[var(--primary-color)]'
      }`}
      onClick={onSelect}
    >
      <div className="flex items-start space-x-4">
        {/* <div className="flex-shrink-0 pt-1">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 text-blue-600" style={{
            // background: isSelected 
            //   ? 'linear-gradient(135deg, #3b82f6, #8b5cf6)' 
            //   : 'linear-gradient(135deg, #dbeafe, #e9d5ff)',
            // color: isSelected ? 'white' : '#3b82f6',
            // boxShadow: isSelected ? '0 10px 15px -3px rgba(0, 0, 0, 0.1)' : 'none'
          }}>
            {getFieldIcon(field.type)}
          </div>
        </div> */}
        
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Label className="text-base font-semibold">
                {field.label}
              </Label>
              {field.required && (
                <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded-full">
                  Required
                </span>
              )}
              {field.validation && (
                <div className="flex items-center space-x-1 text-blue-600">
                  <AlertCircle className="w-3 h-3" />
                  <span>Validation</span>
                </div>
              )}
  
            </div>
            
            <div className="flex items-center space-x-2">
              <Button
                size="sm"
                variant="ghost"
                onClick={(e) => {
                  e.stopPropagation();
                  onSelect();
                }}
                className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-all duration-200"
              >
                <Settings className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete();
                }}
                className="text-red-500 hover:text-red-700 hover:bg-red-50 transition-all duration-200"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          <div className="space-y-3">
            {renderField()}
          </div>
          
        </div>
      </div>
    </Card>
  );
};


/**
 * 
 * border border-transparent bg-[#1f262e] hover:border-[var(--primary-color)] hover:bg-[#2c3540]
 * 
 */