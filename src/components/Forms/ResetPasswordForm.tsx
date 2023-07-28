import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import SvgIcon from '@mui/material/SvgIcon';
import React from 'react';
import Loading from '~/components/Loading/Loading';

const ResetPasswordForm = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div>
        <h1>
          Recuperar senha <span>.</span>
        </h1>
        <p>
          Informe o e-mail do seu cadastro. Nós estaremos realizando o envio de um link com as
          instruções para você redefinir a sua senha.
        </p>
      </div>
      <div>
        <FormControl sx={{ m: 1, width: '25ch' }} variant='outlined'>
          <OutlinedInput
            id='outlined-size-small'
            placeholder='Informe seu e-mail'
            endAdornment={
              <InputAdornment position='end'>
                <SvgIcon>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='17'
                    height='17'
                    viewBox='0 0 17 17'
                    fill='none'
                  >
                    <path
                      d='M8.50037 0C6.24688 0.0024367 4.08638 0.898482 2.49292 2.49153C0.899455 4.08458 0.00317821 6.24452 0.000740883 8.49743C-0.0885052 15.2763 7.90469 19.423 13.3877 15.449C13.4664 15.3966 13.5339 15.329 13.5861 15.2501C13.6384 15.1712 13.6742 15.0826 13.6916 14.9896C13.709 14.8966 13.7076 14.8011 13.6874 14.7086C13.6673 14.6162 13.6288 14.5287 13.5743 14.4514C13.5197 14.3741 13.4503 14.3085 13.3699 14.2584C13.2896 14.2084 13.2001 14.175 13.1066 14.1601C13.0132 14.1453 12.9177 14.1493 12.8258 14.1719C12.7339 14.1946 12.6475 14.2354 12.5717 14.292C8.00456 17.601 1.34652 14.1468 1.41735 8.49743C1.8062 -0.896479 15.196 -0.894355 15.5834 8.49743V9.91367C15.5834 10.2893 15.4341 10.6495 15.1685 10.9151C14.9028 11.1807 14.5425 11.3299 14.1668 11.3299C13.7911 11.3299 13.4308 11.1807 13.1651 10.9151C12.8994 10.6495 12.7502 10.2893 12.7502 9.91367V8.49743C12.5717 2.88275 4.42834 2.88346 4.25056 8.49743C4.2588 9.3585 4.52782 10.1969 5.02217 10.902C5.51651 11.6072 6.21298 12.1461 7.01977 12.4476C7.82656 12.7492 8.70582 12.7992 9.54165 12.5912C10.3775 12.3833 11.1306 11.9269 11.7019 11.2825C12.0092 11.8246 12.4867 12.2503 13.0605 12.4937C13.6343 12.7371 14.2723 12.7844 14.8758 12.6285C15.4793 12.4726 16.0145 12.1221 16.3985 11.6313C16.7825 11.1405 16.9939 10.5368 17 9.91367V8.49743C16.9976 6.24452 16.1013 4.08458 14.5078 2.49153C12.9144 0.898482 10.7539 0.0024367 8.50037 0V0ZM8.50037 11.3299C7.74896 11.3299 7.02832 11.0315 6.49699 10.5003C5.96566 9.9691 5.66716 9.24865 5.66716 8.49743C5.66716 7.74621 5.96566 7.02576 6.49699 6.49457C7.02832 5.96338 7.74896 5.66496 8.50037 5.66496C9.25179 5.66496 9.97242 5.96338 10.5038 6.49457C11.0351 7.02576 11.3336 7.74621 11.3336 8.49743C11.3336 9.24865 11.0351 9.9691 10.5038 10.5003C9.97242 11.0315 9.25179 11.3299 8.50037 11.3299Z'
                      fill='#293D71'
                    />
                  </svg>
                </SvgIcon>
              </InputAdornment>
            }
          />
        </FormControl>
        <div className={'row'}>
          <div className={'col-12'}>
            <Loading id={2} />
          </div>
        </div>
      </div>
      <div className={'d-flex mt-2 justify-content-end'}></div>
    </form>
  );
};

export default ResetPasswordForm;
