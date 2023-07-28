import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './customTabs.scss';
import HeroPerfilCard from '~/components/Card/HeroPerfilCard';
import GenericListCard from '~/components/Card/GenericListCard';
import { usePageContext } from '~/store/PageContext';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const { hero } = usePageContext();

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }} className={'tabCustom'}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label='basic tabs example'>
          <Tab label='Visão Geral' {...a11yProps(0)} />
          <Tab label='Séries' {...a11yProps(1)} />
          <Tab label='Histórias' {...a11yProps(2)} />
          <Tab label='Quadrinhos' {...a11yProps(3)} />
          <Tab label='Eventos' {...a11yProps(4)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <HeroPerfilCard />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <GenericListCard list={hero.series.items ? hero.series.items : null} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <GenericListCard list={hero ? hero.stories.items : null} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <GenericListCard list={hero ? hero.comics.items : null} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <GenericListCard list={hero ? hero.events.items : null} />
      </CustomTabPanel>
    </Box>
  );
}
