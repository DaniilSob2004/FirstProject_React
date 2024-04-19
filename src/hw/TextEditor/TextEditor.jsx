import { React, useState } from 'react'
import classes from './TextEditor.module.css'

function TextEditor() {
    const [isBold, setIsBold] = useState(false);
    const [isItalic, setIsItalic] = useState(false);
    const [isUnderline, setIsUnderline] = useState(false);
    const [isUppercase, setIsUppercase] = useState(false);

    function boldClick() {
        setIsBold(isBold => !isBold);
    }

    function italicClick() {
        setIsItalic(isItalic => !isItalic);
    }

    function underlineClick() {
        setIsUnderline(isUnderline => !isUnderline);
    }

    function uppercaseClick() {
        setIsUppercase(isUppercase => !isUppercase);
    }

    return (
        <div className={classes.container}>
            <div className={classes.panelBlock}>
                <button
                    onClick={boldClick}
                    className={`${isBold && classes.bold}`}>B
                </button>
                <button
                    onClick={italicClick}
                    className={`${isItalic && classes.italic}`}>I
                </button>
                <button
                    onClick={underlineClick}
                    className={`${isUnderline && classes.underline}`}>U
                </button>
                <button
                    onClick={uppercaseClick}
                    className={`${isUppercase && classes.uppercase}`}>t
                </button>
    
                <select>
                    <option value="12">12</option>
                    <option value="24">24</option>
                    <option value="32">32</option>
                    <option value="64">64</option>
                </select>
    
                <select>
                    <option value="Arial">Arial</option>
                    <option value="Times New Roman">Times New Roman</option>
                    <option value="Helvetica">Helvetica</option>
                    <option value="Verdana">Verdana</option>
                </select>
    
                <input type="color" />
            </div>
            <textarea
                rows="5"
                className={`${classes.texteditor} 
                            ${isBold ? classes.bold : ''} 
                            ${isItalic ? classes.italic : ''}
                            ${isUnderline && classes.underline}
                            ${isUppercase && classes.uppercase}`}>
            </textarea>
        </div>
    )
}

export default TextEditor
