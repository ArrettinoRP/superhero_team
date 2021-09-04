import React from 'react';
import {View} from 'react-native';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const AddButton = (props: SvgProps) => {
  return (
    <View
      style={{
        backgroundColor: '#2196F3',
        width: 32,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 360,
      }}>
      <Svg
        style={{width: '65%', height: '65%'}}
        viewBox="0 0 492 492"
        fill="none"
        {...props}>
        <Path
          d="M465.064 207.566h.028-180.656V27.25c0-14.84-12.016-27.248-26.856-27.248h-23.116c-14.836 0-26.904 12.408-26.904 27.248v180.316H26.908c-14.832 0-26.908 12-26.908 26.844v23.248c0 14.832 12.072 26.78 26.908 26.78h180.656v180.968c0 14.832 12.064 26.592 26.904 26.592h23.116c14.84 0 26.856-11.764 26.856-26.592V284.438h180.624c14.84 0 26.936-11.952 26.936-26.78V234.41c0-14.844-12.096-26.844-26.936-26.844z"
          fill="#fff"
        />
      </Svg>
    </View>
  );
};