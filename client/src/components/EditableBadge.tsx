import React, { useState } from "react";
import { Edit2, Check, X } from "lucide-react";

interface EditableBadgeProps {
  value: string;
  onSave?: (newValue: string) => void;
  className?: string;
  isPlaceholder?: boolean;
}

export const EditableBadge: React.FC<EditableBadgeProps> = ({
  value: initialValue,
  onSave,
  className = "",
  isPlaceholder = true,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [val, setVal] = useState(initialValue);

  const handleSave = () => {
    setIsEditing(false);
    if (onSave) onSave(val);
  };

  const handleCancel = () => {
    setVal(initialValue);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-blue-950 border border-blue-500/50 text-blue-200 text-xs font-mono shadow-sm">
        <input
          type="text"
          value={val}
          onChange={(e) => setVal(e.target.value)}
          className="bg-transparent text-blue-100 outline-none w-28 text-xs font-mono px-1 py-0.5"
          autoFocus
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSave();
            if (e.key === "Escape") handleCancel();
          }}
        />
        <button
          onClick={handleSave}
          className="hover:text-emerald-400 p-0.5 transition-colors"
          title="Save badge"
        >
          <Check className="w-3 h-3" />
        </button>
        <button
          onClick={handleCancel}
          className="hover:text-rose-400 p-0.5 transition-colors"
          title="Cancel"
        >
          <X className="w-3 h-3" />
        </button>
      </span>
    );
  }

  const isDashed = val.startsWith("[Add") || val.startsWith("[");

  return (
    <span
      onClick={() => setIsEditing(true)}
      title="Click to edit badge"
      className={`group cursor-pointer inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono transition-all duration-150 ${
        isDashed
          ? "bg-blue-950/40 border border-dashed border-blue-500/40 text-blue-300 hover:border-blue-400 hover:bg-blue-900/40"
          : "bg-slate-900/80 border border-slate-700/60 text-slate-200 hover:border-blue-500/50 hover:text-blue-200"
      } ${className}`}
    >
      <span>{val}</span>
      <Edit2 className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 text-blue-400 transition-opacity" />
    </span>
  );
};
