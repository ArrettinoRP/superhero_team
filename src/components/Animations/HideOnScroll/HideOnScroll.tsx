import React, {ReactNode} from 'react';
import {Animated} from 'react-native';

interface HideOnScrollPropsType {
  children?: ReactNode;
  scrollY: number;
  height: number;
}

export const HideOnScroll: React.FC<HideOnScrollPropsType> = ({
  scrollY,
  height,
  children,
}) => {
  const diffClamp = Animated.diffClamp(scrollY, 0, height);
  const translateY = diffClamp.interpolate({
    inputRange: [0, height],
    outputRange: [0, -height],
  });
  return (
    <Animated.View
      style={{
        zIndex: 100,
        transform: [{translateY: translateY}],
        position: 'absolute',
        width: '100%',
      }}>
      {children}
    </Animated.View>
  );
};
