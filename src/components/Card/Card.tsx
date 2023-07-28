import './card.scss';
import error from '~/assets/images/error.png';
import React from 'react';
import { usePageContext } from '~/store/PageContext';
import { Link } from 'react-router-dom';

const Card = ({ data }) => {
  const { selectHero, handleCurrentPage } = usePageContext();

  const imageUrl = `${data.thumbnail.path}/portrait_xlarge.${data.thumbnail.extension}`;

  return (
    <Link
      to={'/dashboard/perfil/' + data.id}
      style={{ textDecoration: 'none' }}
      onClick={() => handleCurrentPage('/dashboard/perfil/' + data.id)}
    >
      <div
        className={'card d-flex flex-row w-100'}
        onClick={() => {
          selectHero(data);
        }}
      >
        <img src={data.thumbnail.path ? imageUrl : error} alt='' />
        <div className={'d-flex flex-column '}>
          <h4>{data ? data.name : 'Nome não encontrado :('}</h4>
          <p>{data.description ? data.description : 'Descrição inexistente.'}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
