import md5 from 'md5';
import React from 'react';

const publicKey = import.meta.env.VITE_API_PUBLIC_KEY;
const privateKey = import.meta.env.VITE_API_PRIVATE_KEY;
const apiUrl = import.meta.env.VITE_API_URL;

const timestamp = new Date().getTime();
const hash = md5(timestamp + privateKey + publicKey);

const getMarvelCharacters = async () => {
  const url = `${apiUrl}?limit=10&apikey=${publicKey}&ts=${timestamp}&hash=${hash}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro na chamada da API da Marvel:', error);
    throw error;
  }
};
const getMarvelCharactersNavigate = async (page: number) => {
  const urlNavigate = `${apiUrl}?limit=10&offset=${
    page * 10
  }&apikey=${publicKey}&ts=${timestamp}&hash=${hash}`;
  try {
    const response = await fetch(urlNavigate);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro na chamada da API da Marvel:', error);
    throw error;
  }
};

export { getMarvelCharacters, getMarvelCharactersNavigate };
