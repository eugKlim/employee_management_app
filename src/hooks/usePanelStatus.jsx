import { useState } from 'react';

const usePanelStatus = () => {
  const [isStatusPaneOpen, setIsStatusPaneOpen] = useState(false);

  const openPanel = () => {
    setIsStatusPaneOpen(true);
  };
  const closePanel = () => {
    setIsStatusPaneOpen(false);
  };
  return { isStatusPaneOpen, openPanel, closePanel };
};

export default usePanelStatus;
