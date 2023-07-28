import './card.scss';

const GenericListCard = ({ list }) => {
  return list.length > 0 ? (
    <div className={'box-list'}>
      <ul>
        {list.map((el) => (
          <li key={el.id}>{el.name}</li>
        ))}
      </ul>
    </div>
  ) : (
    <div className={'box-list p-4'}>
      <p>Nadinha :(</p>
    </div>
  );
};

export default GenericListCard;