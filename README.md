# FormKit - Visual Form Builder

A modern, type-safe visual form builder built with Next.js 15 and React 19. Create beautiful forms with an intuitive drag-and-drop interface, real-time preview, and extensive customization options.

## 🚀 Tech Stack

- **Framework:** [Next.js 15.3](https://nextjs.org) with App Router
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **State Management:** [Zustand](https://github.com/pmndrs/zustand)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com)
- **Icons:** [Lucide Icons](https://lucide.dev)

## 📁 Project Structure

### 🎨 Visual Design & Polish
- **Modern, cohesive design system** with consistent spacing, typography, and color palette
- **Smooth animations and transitions** with hover states and micro-interactions
- **Responsive layout** that works beautifully across different screen sizes
- **Beautiful component library** with icons and descriptions for each field type

### 🖱️ Interaction Design & UX
- **Intuitive drag-and-drop** from sidebar to canvas with visual feedback
- **Click-to-add functionality** as an alternative to drag and drop
- **Real-time preview mode** to see forms as users will see them
- **Field selection and editing** with visual indicators
- **Smooth visual feedback** during drag operations with color changes

### 🛠️ Form Components
- **Text Input** - Single line text input
- **Text Area** - Multi-line text input  
- **Email Input** - Email address input with validation
- **Number Input** - Numeric input with min/max validation
- **Select Dropdown** - Dropdown with customizable options
- **Checkbox** - Single checkbox option
- **Radio Group** - Multiple choice options

### ⚙️ Component Configuration
- **Property panel** for editing field settings
- **Label and placeholder** customization
- **Required/optional** field status
- **Options management** for select and radio components
- **Validation rules** for number and text fields
- **Real-time updates** as you edit properties

### 🎯 Advanced Features
- **Form state management** with Zustand
- **Field reordering** and deletion
- **Clear form** functionality
- **Export-ready** form structure
- **TypeScript** throughout for type safety

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd design-exercise-main
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎮 How to Use

### Building Forms
1. **Navigate to the builder** - Click "Start Building" from the home page
2. **Add components** - Drag components from the sidebar or click to add them
3. **Configure fields** - Select any field to edit its properties in the right panel
4. **Preview your form** - Click the "Preview" button to see how users will see it
5. **Customize options** - For select and radio fields, add/edit options in the property panel

### Key Interactions
- **Drag & Drop**: Drag components from the sidebar to the canvas
- **Click to Add**: Click any component in the sidebar to add it instantly
- **Field Selection**: Click any field on the canvas to select and edit it
- **Property Editing**: Use the right panel to modify field properties
- **Preview Mode**: Toggle between builder and preview modes

## 🏗️ Architecture

```
src/
├── app/                      # Next.js App Router pages
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── builder/
│       └── page.tsx         # Form builder page
├── components/
│   ├── ui/                  # Reusable UI components
│   └── form-builder/        # Form builder specific components
│       ├── canvas.tsx       # Form builder canvas
│       ├── sidebar.tsx      # Component sidebar
│       ├── property-panel.tsx # Property editor
│       └── form-field.tsx   # Form field component
├── lib/
│   ├── store.ts            # Zustand store
│   ├── utils.ts            # Utility functions
│   ├── constants/          # Constants and configurations
│   ├── hooks/              # Custom React hooks
│   └── types/              # TypeScript type definitions
└── styles/
    └── globals.css         # Global styles
```

## ✨ Features

### Visual Form Building
- 🎨 Modern design system with consistent styling
- 🖱️ Intuitive drag-and-drop interface
- 👁️ Real-time form preview
- ⚡ Instant field updates
- 🎯 Multiple field types with custom configurations
│   ├── page.tsx            # Beautiful home page
│   └── builder/
│       └── page.tsx        # Three-panel builder interface
├── components/
│   ├── canvas.tsx          # Main form canvas with drag & drop
│   ├── sidebar.tsx         # Component library sidebar
│   ├── property-panel.tsx  # Field configuration panel
│   ├── form-field.tsx      # Individual form field component
│   ├── header.tsx          # Builder header with actions
│   └── ui/                 # Complete UI component library
└── lib/
    └── store.ts            # Zustand store for form state
```

### State Management
The application uses Zustand for state management with the following key features:
- **Field management** (add, update, remove, reorder)
- **Selection state** (currently selected field)
- **Preview mode** (toggle between builder and preview)
- **Form data** (all field configurations)

## 🎨 Design Decisions

### Visual Design
- **Color Palette**: Blue and purple gradients for a modern, trustworthy feel
- **Typography**: Clean, readable fonts with proper hierarchy
- **Spacing**: Consistent 4px grid system throughout
- **Shadows**: Subtle shadows for depth and visual separation
- **Animations**: Smooth transitions for all interactive elements

### User Experience
- **Progressive Disclosure**: Show complexity only when needed
- **Visual Feedback**: Clear indicators for all user actions
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **Performance**: Efficient rendering with React best practices

### Component Architecture
- **Reusable Components**: All UI components follow design system principles
- **Type Safety**: Full TypeScript coverage for better development experience
- **Modular Design**: Each component has a single responsibility
- **Extensible**: Easy to add new field types and features

## 🚀 Future Enhancements

### Planned Features
- **Drag & Drop Reordering**: Reorder fields within the canvas
- **Form Templates**: Pre-built form layouts
- **Export Functionality**: Export forms as JSON or React components
- **Validation Preview**: Real-time validation feedback
- **Undo/Redo**: Command history for form changes
- **Keyboard Shortcuts**: Power-user features
- **Dark Mode**: Theme switching capability

### Technical Improvements
- **Performance Optimization**: Virtual scrolling for large forms
- **Accessibility**: Enhanced screen reader support
- **Testing**: Comprehensive unit and integration tests
- **Documentation**: API documentation and usage examples

## 🤝 Contributing

This is a design engineering exercise showcasing the ability to blend visual design with technical excellence. The code demonstrates:

- **Clean Architecture**: Well-organized, maintainable code
- **Design System Thinking**: Consistent patterns and reusable components
- **Performance Considerations**: Efficient rendering and state management
- **User-Centered Design**: Intuitive interactions and beautiful interfaces

## 📝 License

This project is part of a design engineering take-home exercise.

---

**Built with ❤️ using Next.js, React, TypeScript, and Tailwind CSS**
