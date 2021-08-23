import PropTypes from 'prop-types';
import React, { useState } from 'react';

import './mapBlock.css';

const MapWord = ({ word }) => {
	const wordArray = word.split('');
	const [check, setCheck] = useState(true);
	return (
		<div>
			{wordArray.map((elem) => (
				<span className={check ? 'correct' : 'incorrect'} key={Math.random() * 1000}>
					{elem}
				</span>
			))}
		</div>
	);
};

MapWord.propTypes = {
	word: PropTypes.string.isRequired,
};

export default MapWord;
