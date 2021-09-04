import React from 'react';
import {Text, View} from 'react-native';
import {tagStyles} from './tagStyles';

interface TagPropsTypes {
  text: string;
  color?: string;
  textColor?: string;
}

export const Tag: React.FC<TagPropsTypes> = ({text, color, textColor}) => {
  return (
    <View style={{...tagStyles.tag, backgroundColor: color || '#f2f2f2'}}>
      <Text
        style={{
          ...tagStyles.tagText,
          color: textColor || '#202020',
        }}>
        {text}
      </Text>
    </View>
  );
};
