import React, { createRef, useEffect } from 'react';

import ParagraphArray from '../../builder/paraBuilder';

import MapWord from './mapBlock';
import './blockStyles.css';

const ipsem = ParagraphArray();

const ParagraphBlock = () => {
	const containerRef = createRef();
	useEffect(() => {
		console.log(containerRef);
	}, [containerRef]);

	const handleClick = () => {
		containerRef.current.addEventListener('onKeyDown', console.log('ran'));
	};
	return (
		<div className="outer-container">
			<div
				className="para-container"
				role="button"
				ref={containerRef}
				onClick={handleClick}
				onKeyDown={handleClick}
				tabIndex={0}>
				{ipsem.map((word) => (
					<MapWord word={word} key={word} />
				))}
			</div>
		</div>
	);
};

export default ParagraphBlock;
