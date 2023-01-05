import { Spinner } from '@chakra-ui/react';
import React from 'react';

const Loading = () => {
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading..</span>
    </Spinner>
  );
};

export default Loading;
