import styled from 'styled-components';
import Button from '../components/Button';

const ContactPageWrapper = styled.div`
  height: 100vh;
  width: 100%;
`;

const ContactPageTitle = styled.h1`
  color: white;
`;

const ContactForm = styled.form`
  background-color: rgba(119, 119, 119, 0.3);
  backdrop-filter: blur(5px);
  padding: 2.4rem;
  color: white;
  width: 50%;
`;

const ContactFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: flex-start;
`;

const FormLabel = styled.label``;

const FormInput = styled.input`
  border-radius: 4px;
  padding: 0.4rem 0 0.4rem 0.4rem;
`;

const FormTextArea = styled.textarea`
  border-radius: 8px;
  padding: 0.4rem;
`;

const ContactFormBtnGroup = styled.div``;

const ContactPage = () => {
  return (
    <ContactPageWrapper className='page contact-page'>
      <ContactPageTitle>I Would Love to Hear From You!</ContactPageTitle>
      <ContactForm>
        <ContactFormGroup>
          <FormLabel for='name'>Name</FormLabel>
          <FormInput
            type='text'
            name='name'
            id='name'
            placeholder='Full Name'
            required
          />
          <FormLabel for='email'>Email</FormLabel>
          <FormInput
            type='email'
            name='email'
            id='email'
            placeholder='Example@email.com'
            required
          />
        </ContactFormGroup>
        <ContactFormGroup>
          <FormLabel for='thoughts'>Your Thoughts</FormLabel>
          <FormTextArea
            name='thoughts'
            id='thoughts'
            cols='50'
            rows='10'
            placeholder='Thank you for showing interest in my page!'
          />
        </ContactFormGroup>
        <ContactFormBtnGroup>
          <Button text='Submit' color='primary' />
          <Button text='Cancel' color='mild' />
        </ContactFormBtnGroup>
      </ContactForm>
    </ContactPageWrapper>
  );
};

export default ContactPage;
