import { Redirect } from 'expo-router';
import React from 'react';

const index = () => {
  return <Redirect href={'/(tabs)/Recent'} />;
};

export default index;
