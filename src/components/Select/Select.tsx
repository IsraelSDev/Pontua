import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import './select.scss';
import Circular from '~/components/Loading/Circular';

import { usePageContext } from '~/store/PageContext';

export default function SelectCustom({ data }) {
  const [age, setAge] = React.useState('');

  const { selectHero } = usePageContext();

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
    selectHero(event.target.value);
  };
  return data?.length > 1 ? (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value='' disabled>
            <em>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
              >
                <path
                  d='M16.6668 17.5V15.8333C16.6668 14.9493 16.3156 14.1014 15.6905 13.4763C15.0654 12.8512 14.2176 12.5 13.3335 12.5H6.66683C5.78277 12.5 4.93493 12.8512 4.30981 13.4763C3.68469 14.1014 3.3335 14.9493 3.3335 15.8333V17.5M13.3335 5.83333C13.3335 7.67428 11.8411 9.16667 10.0002 9.16667C8.15921 9.16667 6.66683 7.67428 6.66683 5.83333C6.66683 3.99238 8.15921 2.5 10.0002 2.5C11.8411 2.5 13.3335 3.99238 13.3335 5.83333Z'
                  stroke='#667085'
                  strokeWidth='1.66667'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              &nbsp; Selecione um agente &nbsp;
            </em>
          </MenuItem>
          {data.map((agent) => (
            <MenuItem key={agent.id} value={agent}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0 15px',
                }}
              >
                <img
                  className={'img-select'}
                  src={`${agent.thumbnail.path}/portrait_xlarge.${agent.thumbnail.extension}`}
                  alt=''
                  style={{
                    width: '24px',
                    margin: '0',
                    height: '24px',
                    borderRadius: '50%',
                    marginRight: '20px',
                  }}
                />

                {agent.name}
              </div>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  ) : (
    <Circular noMargin />
  );
}
