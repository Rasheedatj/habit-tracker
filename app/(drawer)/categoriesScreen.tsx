import CategpryGridTile from '@/components/CategpryGridTile';
import { CATEGORIES } from '@/data/dummy-data';
import { Category } from '@/utils/UI.types';
import React from 'react';
import { FlatList, useWindowDimensions } from 'react-native';

function renderCategory(item: Category) {
  return (
    <CategpryGridTile color={item.color} title={item.title} id={item.id} />
  );
}

const CategoriesScreen = () => {
  const { width } = useWindowDimensions();
  const numColumns = width > 500 ? 3 : 2;
  return (
    <FlatList
      key={numColumns}
      data={CATEGORIES}
      renderItem={(itemData) => renderCategory(itemData.item)}
      keyExtractor={(item) => item.id}
      numColumns={numColumns}
      style={{
        marginLeft: width > 500 ? 50 : 0,
        marginRight: width > 500 ? 10 : 0,
      }}
    />
  );
};

export default CategoriesScreen;
