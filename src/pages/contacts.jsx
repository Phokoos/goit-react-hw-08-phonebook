import { setToken } from 'api/axiosConfigApi';
import ContactForm from 'components/ContactForm/contactForm';
import ContactList from 'components/ContactList/contactList';
import Filter from 'components/Filter/filter';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { accessToken } from 'redux/auth/selectors';

export const Contacts = () => {
  const isAuth = useSelector(accessToken);
  const navigate = useNavigate();

  useEffect(() => {
    setToken(isAuth);
    !isAuth && navigate('/login');
  }, [isAuth, navigate]);

  return (
    <>
      <ContactForm />
      <Filter />
      <ContactList />
    </>
  );
};
