import Auth from '../../network/auth';
import CheckUserAuth from './check-user-auth';
import Config from '../../config/config';
import Utils from '../../utils/utils';

const Login = {
  async init() {
    CheckUserAuth.checkLoginState();
    this._initialListener();
  },
 
  _initialListener() {
    const loginForm = document.querySelector('#loginForm');
    loginForm.addEventListener(
      'submit',
      async (event) => {
        event.preventDefault();
        event.stopPropagation();
 
        loginForm.classList.add('was-validated');
        await this._getLogged();
      },
      false,
    );
  },
 
  async _getLogged() {
    const formData = this._getFormData();
 
    if (this._validateFormData({ ...formData })) {
      console.log('formData');
      console.log(formData);

      try {
        const response = await Auth.login({
          email: formData.email,
          password: formData.password,
        });
        console.log('Login response:', response);

        Utils.setUserToken(Config.USER_TOKEN_KEY, response.token);
        window.alert('Signed user in detected');
        this._goToDashboardPage();
      } catch (error) {
        console.error(error);
      }
    }
  },
 
  _getFormData() {
    const email = document.querySelector('#validationCustomRecordEmail');
    const password = document.querySelector('#validationCustomPassword');
    return {
      email: email.value,
      password: password.value,
    };
  },
 
  _validateFormData(formData) {
    const formDataFiltered = Object.values(formData).filter((item) => item === '');
 
    return formDataFiltered.length === 0;
  },
 
  _goToDashboardPage() {
    window.location.href = '/';
  },
};
 
export default Login;