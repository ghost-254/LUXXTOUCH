'use client';

import React, { useEffect } from 'react';
import Modal from 'react-modal';

const ClientModalSetup: React.FC = () => {
  useEffect(() => {
    Modal.setAppElement('#__next');
  }, []);

  return null;
};

export default ClientModalSetup;
