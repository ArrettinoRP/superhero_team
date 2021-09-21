import {useTranslation} from 'react-i18next';
import {ModalErrorMessage} from '../../components/ErrorModal/ErrorModal';

interface ErrorMessagesInterface {
  invalidLogIn: ModalErrorMessage;
}

type useErrorsMessagesType = () => ErrorMessagesInterface;

export const useErrorsMessages: useErrorsMessagesType = () => {
  const {t} = useTranslation();

  return {
    invalidLogIn: {
      title: t('Invalid username or password'),
      description: t(
        'The password or email you entered is incorrect. Try another password or email.',
      ),
      closeText: t('Try Again'),
    },
  };
};
