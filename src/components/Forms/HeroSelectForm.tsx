import Loading from '~/components/Loading/Loading';
import React from 'react';
import ButtonCustom from '~/components/Button/Button';

const HeroSelectForm = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div>
        <h1>
          Selecione o seu agente mais legal <span>.</span>
        </h1>
        <p>Tenha a visão completa do seu agente.</p>
      </div>
      <div>
        <div className={'row'}>
          <div className={'col-12'}>
            <Loading id={4} />
          </div>
        </div>
      </div>
      <div className={'d-flex mt-2 justify-content-end'}>
        <ButtonCustom id={4} title={'entrar'} />
      </div>
    </form>
  );
};

export default HeroSelectForm;