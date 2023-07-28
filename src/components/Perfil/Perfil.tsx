import './perfil.scss';
import BasicTabs from '~/components/Tabs/CustomTabs';

const Perfil = () => {
  return (
    <div className={'perfilContainer d-flex flex-column'}>
      <div className={'d-flex'}>
        <h1>
          Perfil <span>/&nbsp;</span>
        </h1>
        <p>A-Bomb</p>
      </div>

      <div>
        <BasicTabs />
      </div>
    </div>
  );
};

export default Perfil;