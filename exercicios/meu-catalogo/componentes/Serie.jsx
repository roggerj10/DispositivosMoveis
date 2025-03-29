import React from 'react';
import PropTypes from 'prop-types';

const Serie = ({ nome, ano, diretor, temporadas }) => {
  return (
    <article className="serie-card">
      <div className="serie-info">
        <h2 className="serie-nome">{nome}</h2>
        <p className="serie-ano">Ano: {ano}</p>
        <p className="serie-diretor">Diretor: {diretor}</p>
        <p className="serie-temporadas">Temporadas: {temporadas}</p>
      </div>
    </article>
  );
};

Serie.propTypes = {
  nome: PropTypes.string.isRequired,
  ano: PropTypes.number.isRequired,
  diretor: PropTypes.string.isRequired,
  temporadas: PropTypes.number.isRequired,
};

export default Serie;
