import { LogInForm, Label, Input, Button, StyledLink } from './LogInForm.style';
import { FormCredentialsInterface } from './FormCredentialsInterface';
import axios, { AxiosResponse } from 'axios';

const LogInFormComponent = () => {
  const LogIn = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & FormCredentialsInterface;

    const username = target.username.value;
    const password = target.password.value;

    if (!username || !password) {
      alert('You must enter the credentials');
      return;
    }

    sendCredentialsToServer(username, password);
  }

  const sendCredentialsToServer = async (username: string, password: string) => {
    try {
      const response: AxiosResponse<any> = await axios.post('/auth/login', {
        username,
        password
      });

      if (response.status === 201) {
        sessionStorage.setItem('username', username);
        sessionStorage.setItem('token', response.data.accessToken);
        window.location.href = '/restaurant';
      }
    } catch (err: any) {
      if (err.response.status === 401) {
        alert(`Login failed, ${err.response.data.message}`);
      } else {
        alert('Login failed');
      }
    }
  }

  return (
    <LogInForm onSubmit={LogIn}>
      <Label>
        Username:
        <Input type="text" name="username" required />
      </Label>
      <Label>
        Password:
        <Input type="password" name="password" required />
      </Label>
      <Button>Log In</Button>
      <p style={{ alignSelf: 'center', fontSize: '1.25rem', margin: 8 }}>or</p>
      <Button type="button">
        <StyledLink to='/restaurant'>Explore as the visitor</StyledLink>
      </Button>
    </LogInForm>
  )
}

export default LogInFormComponent;