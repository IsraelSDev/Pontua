import './perfil.scss';
import BasicTabs from '~/components/Tabs/CustomTabs';
import { usePageContext } from '~/store/PageContext';

const Perfil = () => {
  const { hero } = usePageContext();

  return (
    <div className={'perfilContainer d-flex flex-column'}>
      <div className={'d-flex'}>
        <h1>
          Perfil <span>/&nbsp;</span>
        </h1>
        <p>{hero.name ?? 'Nome não encontrado.'}</p>
      </div>

      <div>
        <BasicTabs />
      </div>
    </div>
  );
};

export default Perfil;
