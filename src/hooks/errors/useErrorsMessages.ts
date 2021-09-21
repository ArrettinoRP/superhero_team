import {useTranslation} from 'react-i18next';
import {ModalErrorMessage} from '../../components/ErrorModal/ErrorModal';

interface ErrorMessagesInterface {
  invalidLogIn: ModalErrorMessage;
  emailAlreadyInUse: ModalErrorMessage;
}

type useErrorsMessagesType = () => ErrorMessagesInterface;

export const useErrorsMessages: useErrorsMessagesType = () => {
  const {t} = useTranslation();

  return {
    invalidLogIn: {
      title: t('Invalid email or password'),
      description: t(
        'The password or email you entered is incorrect. Try another password or email.',
      ),
      closeText: t('Try Again'),
    },
    emailAlreadyInUse: {
      title: t('This email is used in another account'),
      description: t(
        'You can log in using this email or use another email to register.',
      ),
      closeText: t('Close'),
    },
  };
};
