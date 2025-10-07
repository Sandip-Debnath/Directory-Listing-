"use client";
import { useEffect, useMemo, useRef, useState } from "react";

export default function TagPicker({ options = [], value = [], onChange, placeholder = "Add tag…" }) {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  const add = (item) => {
    const tag = typeof item === "string" ? { name: item.trim(), __new: true } : item;
    if (!tag?.name) return;
    const exists = tag.id
      ? value.some(v => v.id === tag.id)
      : value.some(v => v.name.toLowerCase() === tag.name.toLowerCase());
    if (exists) return;
    onChange?.([...value, tag]);
    setQ("");
    setOpen(false);            // close after picking/creating
  };

  const removeAt = (i) => onChange?.(value.filter((_, idx) => idx !== i));

  const filtered = useMemo(() => {
    const taken = new Set(value.map(v => v.id ?? v.name.toLowerCase()));
    const qq = q.trim().toLowerCase();
    if (!qq) return [];        // <- don't show list when query empty
    return options.filter(o => !taken.has(o.id) && o.name.toLowerCase().includes(qq));
  }, [options, value, q]);

  const onKeyDown = (e) => {
    if ((e.key === "Enter" || e.key === ",") && q.trim()) {
      e.preventDefault();
      add(q);
    } else if (e.key === "Backspace" && !q && value.length) {
      removeAt(value.length - 1);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  // close on outside click
  useEffect(() => {
    const onDoc = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  return (
    <div className="form-control p-2 position-relative" ref={rootRef}>
      <div className="d-flex flex-wrap gap-2">
        {value.map((t, i) => (
          <span key={(t.id ?? t.name) + i} className="badge bg-primary d-flex align-items-center">
            {t.name}
            <button type="button" className="btn btn-sm btn-link text-white ms-2 p-0"
                    onClick={() => removeAt(i)} aria-label="Remove tag">×</button>
          </span>
        ))}
        <input
          className="border-0 flex-grow-1 p-1"
          style={{ outline: "none", minWidth: 120 ,background :"none" }}
          value={q}
          onChange={(e) => { setQ(e.target.value); setOpen(true); }}
          onFocus={() => setOpen(true)}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
        />
      </div>

      {open && filtered.length > 0 && (
        <div className="position-absolute bg-white border rounded w-100 mt-1"
             style={{ zIndex: 10, maxHeight: 180, overflowY: "auto" }}>
          {filtered.map(opt => (
            <button type="button" key={opt.id} className="dropdown-item text-wrap" onClick={() => add(opt)}>
              {opt.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
