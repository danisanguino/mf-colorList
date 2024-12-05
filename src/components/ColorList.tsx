import React from 'react';

interface ColorListProps {
  colorsList?: string[]; 
}

export const ColorList: React.FC<ColorListProps> = ({ colorsList = [] }) => {
  return (
    <div className="list-group text-center">
      {colorsList.length === 0 ? (
        <b>No hay colores disponibles.</b>
      ) : (
        colorsList.map((color, index) => (
          <button
            key={index}
            type="button"
            title="Copiar"
            aria-current="true"
            style={{
              backgroundColor: color,
              color: '#fff',
              padding: '10px',
              margin: '3px',
              border: 'none',
              borderRadius: '5px',
            }}
          >
            {color}
          </button>
        ))
      )}
    </div>
  );
};
