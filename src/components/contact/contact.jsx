import { useState } from 'react';
import { Switch } from '@headlessui/react';
import PrivacyPolicyModal from '../policy/privacy'; // Adjust the path based on your project structure

const Contact = () => {
  const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [errors, setErrors] = useState({
    'first-name': '',
    'last-name': '',
    'email': '',
    'phone-number': '',
    'message': '',
    'agreed': ''
  });
  const [successModalOpen, setSuccessModalOpen] = useState(false);

  const [focusedInput, setFocusedInput] = useState('');

  const handlePrivacyPolicyToggle = () => {
    setIsPrivacyPolicyOpen(!isPrivacyPolicyOpen);
  };

  const handleSuccessModalToggle = () => {
    setSuccessModalOpen(!successModalOpen);
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  const scrollToInput = (inputName) => {
    const inputElement = document.getElementById(inputName);
    if (inputElement) {
      inputElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const inputs = ['First-Name', 'Last-Name', 'Email', 'Phone-Number', 'Company', 'Message']; // Include 'company' in the inputs

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFocusedInput('');

    if (!agreed) {
      setErrors((prevErrors) => ({ ...prevErrors, 'agreed': 'You must agree to the privacy policy before submitting.' }));
      scrollToInput('agreed');
      return;
    }

    const newErrors = {};
    let hasErrors = false;
    for (const inputName of inputs) {
      const inputValue = document.getElementById(inputName).value.trim();
      if (inputName !== 'company' && inputValue === '') {
        newErrors[inputName] = `Please fill in the ${inputName.replace('-', ' ')} field.`;
        hasErrors = true;
      }
    }

    if (hasErrors) {
      setErrors((prevErrors) => ({ ...prevErrors, ...newErrors }));
      const firstErrorInput = inputs.find((input) => newErrors[input]);
      if (firstErrorInput) {
        scrollToInput(firstErrorInput);
      }
      return;
    }

    const emailValue = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailValue)) {
      setErrors((prevErrors) => ({ ...prevErrors, 'email': 'Please enter a valid email address.' }));
      scrollToInput('email');
      return;
    }

    const formData = new FormData();
    for (const inputName of inputs) {
      formData.append(inputName, document.getElementById(inputName).value.trim());
    }
    formData.append('agreed', String(agreed));

    try {
      const response = await fetch('https://getform.io/f/b465b753-f7e4-4d16-bbbc-8e3b6c91e224', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setSuccessModalOpen(true);
        for (const inputName of inputs) {
          document.getElementById(inputName).value = '';
        }
        setErrors((prevErrors) => ({ ...prevErrors, 'agreed': '', 'email': '' }));
      } else {
        console.error('Form submission failed:', response);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#b34bee] to-[--Purple] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Please allow us 48 hours for a response.
        </p>
      </div>
      <form
        action="https://getform.io/f/b465b753-f7e4-4d16-bbbc-8e3b6c91e224"
        method="POST"
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          {inputs.map((inputName) => (
            <div key={inputName} className={inputName === 'agreed' ? 'sm:col-span-2' : ''}>
              <label htmlFor={inputName} className="block text-sm font-semibold leading-6 text-gray-900">
                {inputName.replace('-', ' ')}
              </label>
              <div className="mt-2.5">
                <input
                  type={inputName === 'email' ? 'email' : 'text'}
                  name={inputName}
                  id={inputName}
                  autoComplete={inputName === 'first-name' ? 'given-name' : (inputName === 'last-name' ? 'family-name' : (inputName === 'email' ? 'email' : (inputName === 'phone-number' ? 'tel' : 'off')))}
                  onFocus={() => setFocusedInput(inputName)}
                  className={classNames("block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[--Purple] sm:text-sm sm:leading-6", { 'border-red-500': errors[inputName] })}
                />
                {errors[inputName] && <p className="text-red-500 mt-2">{errors[inputName]}</p>}
              </div>
            </div>
          ))}
          <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className={classNames(
                  agreed ? 'bg-[#b34bee]' : 'bg-gray-200',
                  'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b34bee]'
                )}
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    agreed ? 'translate-x-3.5' : 'translate-x-0',
                    'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                  )}
                />
              </Switch>
            </div>
            <Switch.Label className="text-sm leading-6 text-gray-600">
              By selecting this, you agree to our{' '}
              <button
                onClick={handlePrivacyPolicyToggle}
                className="font-semibold text-[--Purple] focus:outline-none hover:underline"
              >
                privacy&nbsp;policy
              </button>
              .
            </Switch.Label>
          </Switch.Group>
          {errors['agreed'] && <p className="text-red-500 mt-2">{errors['agreed']}</p>}
        </div>

        <div className="mt-10">
          <button
            type="submit"
            onClick={handleSubmit}
            className="block w-full rounded-md bg-[--Purple] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#b34bee] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--Purple] transition-transform duration-300 transform hover:scale-105"
          >
            Let's talk
          </button>
        </div>

        {isPrivacyPolicyOpen && <PrivacyPolicyModal onClose={handlePrivacyPolicyToggle} />}
        {successModalOpen && (
          <div className="fixed inset-0 z-10 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative w-auto max-w-[600px] mx-auto my-6 animate-bounce">
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-blueGray-200">
                  <h3 className="text-3xl font-semibold">Submission Successful</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={handleSuccessModalToggle}
                  >
                    <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    Thank you for submitting the form. We'll get back to you soon!
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default Contact;
