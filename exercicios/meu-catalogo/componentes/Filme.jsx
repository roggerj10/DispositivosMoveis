import React from 'react';
import PropTypes from 'prop-types';

const Filme = ({ nome, ano, diretor, tipo, capa }) => {
  return (
    <div className="filme-card">
      <img src={capa} alt={`Capa do filme ${nome}`} className="filme-capa" />
      <div className="filme-info">
        <h2 className="filme-nome">{nome}</h2>
        <p className="filme-ano">Ano: {ano}</p>
        <p className="filme-diretor">Diretor: {diretor}</p>
        <p className="filme-tipo">Gênero: {tipo}</p>
      </div>
    </div>
  );
};

Filme.propTypes = {
  nome: PropTypes.string.isRequired,
  ano: PropTypes.number.isRequired,
  diretor: PropTypes.string.isRequired,
  tipo: PropTypes.string.isRequired,
  capa: PropTypes.string.isRequired,
};