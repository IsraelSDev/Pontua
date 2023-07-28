import './card.scss';
import error from '~/assets/images/error.png';
import React from 'react';

const Card = ({ data }) => {
  const imageUrl = `${data.thumbnail.path}/portrait_xlarge.${data.thumbnail.extension}`;

  return (
    <div className={'card d-flex flex-row w-100'}>
      <img src={data.thumbnail.path ? imageUrl : error} alt='' />
      <div className={'d-flex flex-column '}>
        <h4>{data ? data.name : 'Nome não encontrado :('}</h4>
        <p>{data.description ? data.description : 'Descrição inexistente.'}</p>
      </div>
    </div>
  );
};

export default Card;
