import { LogInForm, Label, Input, Button } from './LogInForm.style';

const LogInFormComponent = () => {
  return (
    <LogInForm>
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
      <Button type="button">Explore as a visitor</Button>
    </LogInForm>
  )
}

export default LogInFormComponent;