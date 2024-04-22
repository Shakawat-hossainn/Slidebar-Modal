import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isSideOpen, setIsSideOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openSide = () => {
    setIsSideOpen(true);
  };
  const closeSide = () => {
    setIsSideOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <AppContext.Provider
        value={{
          isSideOpen,
          isModalOpen,
          openSide,
          closeSide,
          openModal,
          closeModal,
        }}
      >
        {children}
      </AppContext.Provider>
    </>
  );
};
export const useGlobalContext = ()=>{
    return useContext(AppContext)
}

export {AppContext,AppProvider};