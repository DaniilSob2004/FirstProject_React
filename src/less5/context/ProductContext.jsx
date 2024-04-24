import React, { createContext, useContext } from 'react';

// создаем контекст
const ProductContext = createContext();

// компонент-провайдер контекста
export const ProductProvider = ({ children }) => {
  // извлекается свойство children из props.
  // Когда компонент MyProvider будет использ. в другом месте приложения, все дочерние
  // компоненты, переданные этому компоненту, будут доступны через свойство children

  const products = [
    {
      title: 'Сумка',
      price: 600,
      id: 0
    },
    {
      title: 'Барсетка',
      price: 800,
      id: 1
    },
    {
      title: 'Саквояж',
      price: 1800,
      id: 2
    }
  ];

  return (
    // контекст для дочерних компонентов {children} внутри него
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  return useContext(ProductContext);
};
