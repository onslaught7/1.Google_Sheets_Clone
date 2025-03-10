import React, { useState, useRef, useEffect } from "react";
import "./Toolbar.scss";
import { BiBold, BiItalic, BiUnderline, BiStrikethrough } from "react-icons/bi";
import { IoMdRedo, IoMdUndo } from "react-icons/io";
import { MdFormatAlignLeft, MdFormatAlignCenter, MdFormatAlignRight, MdOutlineFormatColorFill } from "react-icons/md";
import { AiOutlineFontColors } from "react-icons/ai";

const Toolbar = () => {
  const [fontSize, setFontSize] = useState("12");
  const [fontFamily, setFontFamily] = useState("Arial");
  const [showTextColorDropdown, setShowTextColorDropdown] = useState(false);
  const [showFillColorDropdown, setShowFillColorDropdown] = useState(false);

  const textColorRef = useRef(null);
  const fillColorRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (textColorRef.current && !textColorRef.current.contains(event.target)) {
        setShowTextColorDropdown(false);
      }
      if (fillColorRef.current && !fillColorRef.current.contains(event.target)) {
        setShowFillColorDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="toolbar">
      {/* Undo/Redo */}
      <div className="toolbar-group">
        <button className="toolbar-btn"><IoMdUndo /></button>
        <button className="toolbar-btn"><IoMdRedo /></button>
      </div>

      {/* Font Family & Font Size */}
      <div className="toolbar-group">
        <select className="toolbar-select" value={fontFamily} onChange={(e) => setFontFamily(e.target.value)}>
          <option>Arial</option>
          <option>Verdana</option>
          <option>Times New Roman</option>
          <option>Courier New</option>
        </select>

        <select className="toolbar-select" value={fontSize} onChange={(e) => setFontSize(e.target.value)}>
          {[10, 12, 14, 16, 18, 20, 24, 28, 32].map(size => (
            <option key={size}>{size}</option>
          ))}
        </select>
      </div>

      {/* Bold, Italic, Underline, Strikethrough */}
      <div className="toolbar-group">
        <button className="toolbar-btn"><BiBold /></button>
        <button className="toolbar-btn"><BiItalic /></button>
        <button className="toolbar-btn"><BiUnderline /></button>
        <button className="toolbar-btn"><BiStrikethrough /></button>
      </div>

      {/* Text Color & Background Color */}
      <div className="toolbar-group">
        {/* Text Color */}
        <div className="dropdown-container" ref={textColorRef}>
          <button className="toolbar-btn" onClick={() => setShowTextColorDropdown(!showTextColorDropdown)}>
            <AiOutlineFontColors />
          </button>
          {showTextColorDropdown && (
            <div className="color-dropdown">
              {["#000000", "#FF0000", "#00FF00", "#0000FF", "#FFFF00"].map(color => (
                <div key={color} className="color-option" style={{ backgroundColor: color }}></div>
              ))}
            </div>
          )}
        </div>

        {/* Background Fill Color */}
        <div className="dropdown-container" ref={fillColorRef}>
          <button className="toolbar-btn" onClick={() => setShowFillColorDropdown(!showFillColorDropdown)}>
            <MdOutlineFormatColorFill />
          </button>
          {showFillColorDropdown && (
            <div className="color-dropdown">
              {["#FFFFFF", "#FFC0CB", "#90EE90", "#ADD8E6", "#FFD700"].map(color => (
                <div key={color} className="color-option" style={{ backgroundColor: color }}></div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Text Alignment */}
      <div className="toolbar-group">
        <button className="toolbar-btn"><MdFormatAlignLeft /></button>
        <button className="toolbar-btn"><MdFormatAlignCenter /></button>
        <button className="toolbar-btn"><MdFormatAlignRight /></button>
      </div>
    </div>
  );
};

export default Toolbar;
