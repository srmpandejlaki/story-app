import CheckUserAuth from './auth/check-user-auth';

const Developer = {
  async init() {
    CheckUserAuth.checkLoginState();
  },
};
 
export default Developer;