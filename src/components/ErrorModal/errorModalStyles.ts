import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface erroModalStylesTypes {
  errorModal: ViewStyle;
  errorModalCard: ViewStyle;
  titleContianer: ViewStyle;
  titleText: TextStyle;
  errorDescriptionContainer: ViewStyle;
  errorDescriptionText: TextStyle;
  closeButtonContainer: ViewStyle;
  closeButton: ViewStyle;
  closeButtonText: TextStyle;
}

export const errorModalStyles = StyleSheet.create<erroModalStylesTypes>({
  errorModal: {alignItems: 'center', justifyContent: 'center'},
  errorModalCard: {
    position: 'absolute',
    backgroundColor: '#ffffff',
    width: '70%',
    minHeight: '50%',
    alignItems: 'center',
    borderRadius: 10,
  },
  titleContianer: {
    minHeight: 50,
    marginBottom: 10,
    marginTop: 10,
    justifyContent: 'center',
    width: '90%',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  errorDescriptionContainer: {width: '80%'},
  errorDescriptionText: {
    color: '#737373',
    textAlign: 'center',
  },
  closeButtonContainer: {
    height: 50,
    borderTopColor: '#000000',
    borderTopWidth: 0.5,
    width: '100%',
    marginTop: 20,
  },
  closeButton: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {fontSize: 15},
});
