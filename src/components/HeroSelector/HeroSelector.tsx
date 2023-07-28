import './heroSelector.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import SearchBar from '~/components/SearchBar/SearchBar';
import { Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import GridCustom from '~/components/Grid/Grid';
import Circular from '~/components/Loading/Circular';

import { getMarvelCharacters, getMarvelCharactersNavigate } from '~/services/marvelAPI';

const HeroSelector = () => {
  const [page, setPage] = useState(1);

  const handlePagination = (index, page) => setPage(page);
  const [heroList, setHeroList] = useState([]);
  const [heroListInfo, setheroListInfo] = useState([]);
  const [loading, handleLoading] = useState(false);

  useEffect(() => {
    handleLoading(true);
    const fetchMarvelCharacters = async () => {
      try {
        const data = await getMarvelCharacters();
        setHeroList(data?.data?.results);
        setheroListInfo(data?.data);
        console.log(heroListInfo);
        handleLoading(false);
      } catch (error) {
        console.log('Error: ' + error);
        handleLoading(false);
      }
    };
    // fetchMarvelCharacters();
  }, []);
  useEffect(() => {
    handleLoading(true);
    const fetchMarvelCharacters = async () => {
      try {
        const data = await getMarvelCharactersNavigate(page);
        setHeroList(data?.data?.results);
        setheroListInfo(data?.data);
        console.log(heroListInfo);
        handleLoading(false);
      } catch (error) {
        console.log('Error: ' + error);
        handleLoading(false);
      }
    };
    // fetchMarvelCharacters();
  }, [page]);

  return (
    <div className={'heroContainer  flex-column  '}>
      <SearchBar />
      <button onClick={() => console.log(heroList)}>debug</button>
      {loading ? <Circular /> : <GridCustom data={heroList} />}
      <div className={'m-5 d-flex align-items-center justify-content-center'}>
        <Stack spacing={2}>
          <Pagination
            count={(heroListInfo.total / 10).toFixed()}
            variant='outlined'
            shape='rounded'
            page={page}
            boundaryCount={3}
            size='large'
            onChange={handlePagination}
            renderItem={(item) => (
              <PaginationItem
                slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                {...item}
              />
            )}
          />
        </Stack>
      </div>
    </div>
  );
};

export default HeroSelector;