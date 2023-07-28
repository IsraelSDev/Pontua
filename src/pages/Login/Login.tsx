import './login.scss';
import logo from '~/assets/logo/logo_pontua_white.svg';
import { Link } from 'react-router-dom';

import build from '~/assets/images/bro.svg';

import LoginForm from '~/components/Forms/LoginForm';
import { useState } from 'react';
import { useformContext } from '~/store/FormContext';
import ResetPasswordForm from '~/components/Forms/ResetPasswordForm';
import SucessFull from '~/components/Forms/SucessFull';
import HeroSelectForm from '~/components/Forms/HeroSelectForm';
import CadForm from '~/components/Forms/CadForm';

const Login = () => {
  const { step, handleStep } = useformContext();

  const [isFlipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!isFlipped);
  };

  return (
    <>
      <div className={'container-fluid login-bg'}>
        <div className={'container-xxl'}>
          <div className={'row'}>
            <div className={'col-12'}>
              <Link to={'/login'}>
                <img alt={''} src={logo} />
              </Link>
            </div>
          </div>
          <div className={'row'}>
            <div className={'col-8 d-flex justify-content-arround'}>
              <div className={'box-one text-center'}>
                <img alt={''} src={build} />
              </div>
            </div>
            <div className={'col-4 d-flex align-items-end justify-content-center card-container'}>
              <div className={`box-two`}>
                {step === 0 ? (
                  <div className='front'>
                    <CadForm />
                  </div>
                ) : step === 1 ? (
                  <div className='front'>
                    <LoginForm />
                  </div>
                ) : step === 2 ? (
                  <div className='back'>
                    <ResetPasswordForm />
                  </div>
                ) : step === 3 ? (
                  <div className='back'>
                    <SucessFull />
                  </div>
                ) : step === 4 ? (
                  <div className='back'>
                    <HeroSelectForm />
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
