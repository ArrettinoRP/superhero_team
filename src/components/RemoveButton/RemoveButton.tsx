import React from 'react';
import {View, Pressable} from 'react-native';
import Svg, {Path} from 'react-native-svg';

interface RemoveButtonPorpsType {
  onPress: () => void;
}

export const RemoveButton: React.FC<RemoveButtonPorpsType> = ({onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <View
        style={{
          backgroundColor: 'red',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 360,
        }}>
        <Svg
          style={{width: '58%', height: '58%'}}
          viewBox="0 0 348.333 348.334"
          fill="none">
          <Path
            d="M336.559 68.611L231.016 174.165l105.543 105.549c15.699 15.705 15.699 41.145 0 56.85-7.844 7.844-18.128 11.769-28.407 11.769-10.296 0-20.581-3.919-28.419-11.769L174.167 231.003 68.609 336.563c-7.843 7.844-18.128 11.769-28.416 11.769-10.285 0-20.563-3.919-28.413-11.769-15.699-15.698-15.699-41.139 0-56.85l105.54-105.549L11.774 68.611c-15.699-15.699-15.699-41.145 0-56.844 15.696-15.687 41.127-15.687 56.829 0l105.563 105.554L279.721 11.767c15.705-15.687 41.139-15.687 56.832 0 15.705 15.699 15.705 41.145.006 56.844z"
            fill="#000"
          />
        </Svg>
      </View>
    </Pressable>
  );
};