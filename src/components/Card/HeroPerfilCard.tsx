import './card.scss';
import photoDefault from '~/assets/images/error.png';
import { usePageContext } from '~/store/PageContext';

const HeroPerfilCard = () => {
  const { hero } = usePageContext();

  const imageUrl = `${hero.thumbnail.path}/portrait_xlarge.${hero.thumbnail.extension}`;

  return (
    <div className={'cardPerfilHero d-flex'}>
      <div>
        <img src={hero.thumbnail.path ? imageUrl : photoDefault} alt={'hero-photo'} />
      </div>
      <div className={'d-flex flex-column boxDesc'}>
        <h3>{hero ? hero.name : 'Nome não encontrado :('}</h3>
        <p>{hero.description ? hero.description : 'Descrição inexistente.'}</p>
      </div>
    </div>
  );
};

export default HeroPerfilCard;