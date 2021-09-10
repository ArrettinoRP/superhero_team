import React from 'react';
import {useDispatch} from 'react-redux';
import {SettingsScreen} from './SettingsScreen';
import {LOG_OUT} from '../../redux/actions/authActionsTypes';

export const SettingsContainer: React.FC = () => {
  const dispatch = useDispatch();
  const onPressLogOut = () => dispatch({type: LOG_OUT});
  return <SettingsScreen onPressLogOut={onPressLogOut} />;
};
