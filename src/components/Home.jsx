import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';
import btc from '../assets/btc.png';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <Box bgColor={'blackAlpha.900'} w={'full'} h={'85vh'}>
      <motion.div
        style={{
          height: '80vh',
        }}
        animate={{
          translateY: '20px',
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      >
        <Image
          filter={'grayScale(1)'}
          src={btc}
          w={'full'}
          h={'full'}
          objectFit={'contain'}
        />
      </motion.div>

      <Text
        fontSize={'6xl'}
        textAlign={'center'}
        fontWeight={'thin'}
        color={'whiteAlpha.700'}
        mt={'-25'}
      >
        Xcrypto
      </Text>
    </Box>
  );
};

export default Home;
