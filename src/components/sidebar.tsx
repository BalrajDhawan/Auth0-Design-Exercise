"use client";

import { useFormStore, FieldType } from "@/lib/store";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Type, 
  AlignLeft, 
  List, 
  CheckSquare, 
  CircleDot, 
  Hash, 
  Mail,
  Plus,
  Sparkles,
  Search
} from "lucide-react";

interface ComponentItem {
  type: FieldType;
  label: string;
  icon: React.ReactNode;
  description: string;
  category: string;
  defaultOptions?: { label: string; value: string }[];
}

const componentLibrary: ComponentItem[] = [
  {
    type: "text",
    label: "Text",
    icon: <Type className="w-4 h-4" />,
    description: "",
    category: "Basic Inputs",
  },
  {
    type: "textarea",
    label: "Text Area",
    icon: <AlignLeft className="w-4 h-4" />,
    description: "",
    category: "Basic Inputs",
  },
  {
    type: "email",
    label: "Email",
    icon: <Mail className="w-4 h-4" />,
    description: "",
    category: "Basic Inputs",
  },
  {
    type: "number",
    label: "Number",
    icon: <Hash className="w-4 h-4" />,
    description: "",
    category: "Basic Inputs",
  },
  {
    type: "select",
    label: "Dropdown",
    icon: <List className="w-4 h-4" />,
    description: "",
    category: "Choice Inputs",
    defaultOptions: [
      { label: "Option 1", value: "option1" },
      { label: "Option 2", value: "option2" },
      { label: "Option 3", value: "option3" },
    ],
  },
  {
    type: "checkbox",
    label: "Checkbox",
    icon: <CheckSquare className="w-4 h-4" />,
    description: "",
    category: "Choice Inputs",
  },
  {
    type: "radio",
    label: "Radio Group",
    icon: <CircleDot className="w-4 h-4" />,
    description: "",
    category: "Choice Inputs",
    defaultOptions: [
      { label: "Option 1", value: "option1" },
      { label: "Option 2", value: "option2" },
      { label: "Option 3", value: "option3" },
    ],
  },
];

const categories = ["Basic Inputs", "Choice Inputs"];

export const Sidebar = () => {
  const { addField } = useFormStore();

  const handleAddField = (component: ComponentItem) => {
    const fieldData = {
      type: component.type,
      label: component.label,
      placeholder: `Enter ${component.label.toLowerCase()}`,
      required: false,
      options: component.defaultOptions?.map((opt, index) => ({
        id: `opt-${index}`,
        label: opt.label,
        value: opt.value,
      })),
    };

    addField(fieldData);
  };

  const handleDragStart = (e: React.DragEvent, component: ComponentItem) => {
    e.dataTransfer.setData('application/json', JSON.stringify(component));
    e.dataTransfer.effectAllowed = 'copy';
  };

  const handleDragEnd = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <aside className="w-80 border-r border-[var(--border-color)] flex flex-col" >
      <h2 className="px-2 text-lg font-semibold tracking-tight m-4">Components</h2>
      {/* <div className="flex items-center justify-between bg-white/80 backdrop-blur-sm text-gray-900 p-6 border-b border-gray-200 h-20">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center shadow-sm" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <div>
            <h2 className="font-bold text-lg">Form Components</h2>
            <p className="text-xs text-gray-500">Drag or click to add</p>
          </div>
        </div>
        <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
          <Plus className="w-4 h-4 text-blue-600" />
        </div>
      </div>
       */}
      <div className="flex-1 overflow-y-auto p-6 space-y-2">
        {/* Search Bar */}
        {/* <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search components..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          />
        </div> */}
        
        {/* Component Categories */}
        {categories.map((category) => (
          <div key={category} className="space-y-3">
            {/* <div className="flex items-center space-x-2">
              <div className="w-1 h-4 rounded-full" style={{ background: 'linear-gradient(to bottom, #3b82f6, #8b5cf6)' }}></div>
              <h3 className="text-sm font-semibold uppercase tracking-wide">
                {category}
              </h3>
            </div>
             */}
            {/*
            I will try with AI ki eh ho skda c?
            Should learn orchestration and prompting for AI
             */}
            <div className="grid grid-cols-2 grid-rows-2 gap-2">
              {componentLibrary
                .filter(component => component.category === category)
                .map((component) => (
                  <Card
                    key={component.type}
                    className="text-card-foreground flex flex-col gap-2 border p-4 transition-all duration-300 cursor-pointer border border-transparent bg-[#1f262e] hover:border-[var(--primary-color)] hover:bg-[#2c3540] rounded-lg"
                    onClick={() => handleAddField(component)}
                    draggable
                    onDragStart={(e) => handleDragStart(e, component)}
                    onDragEnd={handleDragEnd}
                  >
                    <div className="flex flex-col items-center space-x-3">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center text-blue-600 group-hover:from-blue-100 group-hover:to-purple-100 transition-all duration-300" style={{ // shadow-sm
                        // background: 'linear-gradient(135deg, #dbeafe, #e9d5ff)'
                        }}>
                        {component.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-sm mb-1">
                          {component.label}
                        </h3>
                        <p className="text-xs leading-relaxed">
                          {component.description}
                        </p>
                      </div>
                      {/* <Button
                        size="sm"
                        variant="ghost"
                        className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                      >
                        <Plus className="w-3 h-3" />
                      </Button> */}
                    </div>
                  </Card>
                ))}
            </div>
          </div>
        ))}
      </div>

        {/* I removed below component  */}
      <div className="p-6 border-t border-gray-200 bg-white/80 backdrop-blur-sm hidden">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 text-xs mb-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full" style={{ animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}></div>
            <span>Ready to build</span>
          </div>
          <p className="text-xs ">
            Drag components to the canvas or click to add instantly
          </p>
        </div>
      </div>
    </aside>
  );
};
