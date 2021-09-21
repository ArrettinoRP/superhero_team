import React from 'react';
import Modal from 'react-native-modal';
import {View, Text, Pressable} from 'react-native';
import {errorModalStyles} from './errorModalStyles';

interface ErrorModalPropsTypes {
  onPressCloseButton: () => void;
  errorMessage: ModalErrorMessage;
  isVisible: boolean;
}

export interface ModalErrorMessage {
  title: string;
  description: string;
  closeText: string;
}

export const ErrorModal: React.FC<ErrorModalPropsTypes> = ({
  onPressCloseButton,
  errorMessage,
  isVisible,
}) => {
  return (
    <Modal isVisible={isVisible} style={errorModalStyles.errorModal}>
      <View style={errorModalStyles.errorModalCard}>
        <View style={errorModalStyles.titleContianer}>
          <Text style={errorModalStyles.titleText}>{errorMessage.title}</Text>
        </View>
        <View style={errorModalStyles.errorDescriptionContainer}>
          <Text style={errorModalStyles.errorDescriptionText}>
            {errorMessage.description}
          </Text>
        </View>
        <View style={errorModalStyles.closeButtonContainer}>
          <Pressable
            style={errorModalStyles.closeButton}
            onPress={onPressCloseButton}>
            <Text style={errorModalStyles.closeButtonText}>
              {errorMessage.closeText}
            </Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};
