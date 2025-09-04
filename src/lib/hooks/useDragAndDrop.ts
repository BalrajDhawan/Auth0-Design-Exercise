import { useState } from 'react';
import { FieldType } from '../types/form';

interface UseDragAndDrop {
  isDragging: boolean;
  draggedFieldType: FieldType | null;
  handleDragStart: (fieldType: FieldType) => void;
  handleDragEnd: () => void;
}

export const useDragAndDrop = (): UseDragAndDrop => {
  const [isDragging, setIsDragging] = useState(false);
  const [draggedFieldType, setDraggedFieldType] = useState<FieldType | null>(null);

  const handleDragStart = (fieldType: FieldType) => {
    setIsDragging(true);
    setDraggedFieldType(fieldType);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    setDraggedFieldType(null);
  };

  return {
    isDragging,
    draggedFieldType,
    handleDragStart,
    handleDragEnd,
  };
};
