import { React, useState } from 'react'
import classes from './TextEditor.module.css'

function TextEditor() {
    const [editorState, setEditorState] = useState({
        isBold: false,
        isItalic: false,
        isUnderline: false,
        isUppercase: false,
        fontSize: 12,
        color: '',
        font: 'Arial'
    });
    const fontSizeArr = [12, 24, 32, 64];
    const fontArr = [
        'Arial',
        'Times New Roman',
        'Helvetica',
        'Verdana'
    ];

    const toggleStyle = style => {
        setEditorState(prevState => ({
            ...prevState,  // копируем состояние
            [style]: !prevState[style]  // меняем bool значение
        }));
    };
    
    const handleChange = e => {
        setEditorState(prevState => ({
            ...prevState,  // копируем состояние
            [e.target.name]: e.target.value  // меняем значение
        }));
    };

    return (
        <div className={classes.container}>
            <div className={classes.panelBlock}>
                <button
                    onClick={() => toggleStyle('isBold')}
                    className={`${editorState.isBold && classes.bold}`}>B
                </button>
                <button
                    onClick={() => toggleStyle('isItalic')}
                    className={`${editorState.isItalic && classes.italic}`}>I
                </button>
                <button
                    onClick={() => toggleStyle('isUnderline')}
                    className={`${editorState.isUnderline && classes.underline}`}>U
                </button>
                <button
                    onClick={() => toggleStyle('isUppercase')}
                    className={`${editorState.isUppercase && classes.uppercase}`}>t
                </button>
    
                <select
                  onChange={handleChange}
                  name="fontSize"
                  value={editorState.fontSize}>
                    { fontSizeArr.map(value => <option key={value} value={value}>{value}</option>) }
                </select>
    
                <select
                  onChange={handleChange}
                  name="font"
                  value={editorState.font}>
                    { fontArr.map(value => <option key={value} value={value}>{value}</option>) }
                </select>
    
                <input
                    type="color"
                    onChange={handleChange}
                    name="color"
                    value={editorState.color} />
            </div>
            <textarea
                rows="5"
                className={`${classes.texteditor} 
                            ${editorState.isBold && classes.bold} 
                            ${editorState.isItalic && classes.italic}
                            ${editorState.isUnderline && classes.underline}
                            ${editorState.isUppercase && classes.uppercase}`}
                style={{
                    fontSize: `${editorState.fontSize}px`,
                    color: `${editorState.color}`,
                    fontFamily: `${editorState.font}`,
                }}>
            </textarea>
        </div>
    );
}

export default TextEditor
