import { LogInForm, Label, Input, Button, StyledLink } from './LogInForm.style';
import { FormCredentialsInterface } from './FormCredentialsInterface';

const LogInFormComponent = () => {
  const LogIn = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & FormCredentialsInterface;

    const username = target.username.value;
    const password = target.password.value;

    console.log(username, password);
  }

  return (
    <LogInForm onSubmit={LogIn}>
      <Label>
        Username:
        <Input type="text" name="username" />
      </Label>
      <Label>
        Password:
        <Input type="password" name="password" />
      </Label>
      <Button>Log In</Button>
      <p style={{ alignSelf: 'center', fontSize: '1.25rem', margin: 8 }}>or</p>
      <Button type="button">
        <StyledLink to='/restaurant'>Explore as a visitor</StyledLink>
      </Button>
    </LogInForm>
  )
}

export default LogInFormComponent;