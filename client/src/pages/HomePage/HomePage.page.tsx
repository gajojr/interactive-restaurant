import { useEffect } from 'react';
import LogInForm from '../../components/HomePageComponents/LogInForm/LogInForm.component';

import { HomePageContainer } from './HomePage.style';

const HomePage = () => {
  useEffect(() => {
    if (sessionStorage.getItem('username') && sessionStorage.getItem('token')) {
      window.location.href = '/restaurant';
    }
  }, [])

  return (
    <HomePageContainer>
      <LogInForm />
    </HomePageContainer>
  )
}

export default HomePage;
