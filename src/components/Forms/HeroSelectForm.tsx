import Loading from '~/components/Loading/Loading';
import React from 'react';
import ButtonCustom from '~/components/Button/Button';
import SelectCustom from '~/components/Select/Select';

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
            <SelectCustom />
          </div>
        </div>
      </div>
      <div className={'d-flex mt-2 justify-content-end'}>
        <ButtonCustom id={2} title={'entrar'} />
      </div>
    </form>
  );
};

export default HeroSelectForm;
