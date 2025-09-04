import { FieldType } from '../types/form';
import { Type, AlignLeft, Mail, Hash, List, CheckSquare, Radio } from 'lucide-react';

export const FIELD_TYPES: { type: FieldType; label: string; icon: any; description: string }[] = [
  {
    type: 'text',
    label: 'Text Input',
    icon: Type,
    description: 'Single line text input for short answers'
  },
  {
    type: 'textarea',
    label: 'Text Area',
    icon: AlignLeft,
    description: 'Multi-line text input for longer answers'
  },
  {
    type: 'email',
    label: 'Email',
    icon: Mail,
    description: 'Email input with validation'
  },
  {
    type: 'number',
    label: 'Number',
    icon: Hash,
    description: 'Numeric input with optional validation'
  },
  {
    type: 'select',
    label: 'Select',
    icon: List,
    description: 'Dropdown selection with custom options'
  },
  {
    type: 'checkbox',
    label: 'Checkbox',
    icon: CheckSquare,
    description: 'Single checkbox for boolean input'
  },
  {
    type: 'radio',
    label: 'Radio Group',
    icon: Radio,
    description: 'Multiple choice selection'
  }
];
