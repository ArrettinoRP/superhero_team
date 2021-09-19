import React, {useEffect, useState} from 'react';
import {View, Image} from 'react-native';
import {superHeroImageCardStyles} from './superHeroImageCardStyles';

interface SuperHeroImagePropsTypes {
  uri: string;
}

export const SuperHeroImageCard: React.FC<SuperHeroImagePropsTypes> = ({
  uri,
}) => {
  const [imageSize, setImageSize] = useState({width: 0, height: 0});
  useEffect(() => {
    Image.getSize(uri, (width, height) => {
      setImageSize({width, height});
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={superHeroImageCardStyles.imageContainer}>
      <Image
        source={{uri}}
        style={{width: imageSize.width, height: imageSize.height}}
      />
    </View>
  );
};
