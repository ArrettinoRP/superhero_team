import React, {useState} from 'react';
import {View, Image} from 'react-native';
import {superHeroImageCardStyles} from './superHeroImageCardStyles';

interface SuperHeroImagePropsTypes {
  uri: string;
}

export const SuperHeroImageCard: React.FC<SuperHeroImagePropsTypes> = ({
  uri,
}) => {
  const [imageSize, setImageSize] = useState({width: 0, height: 0});
  Image.getSize(uri, (width, height) => {
    setImageSize({width, height});
  });
  return (
    <View style={superHeroImageCardStyles.imageContainer}>
      <Image
        source={{uri}}
        style={{width: imageSize.width, height: imageSize.height}}
      />
    </View>
  );
};
