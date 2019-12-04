import { useState, useEffect } from 'react';

function useLocalStorageState(key, initVal) {
	// make piece of state from value in localstorage or use default
	const [ state, setState ] = useState(() => {
		let val;
		try {
			val = JSON.parse(
				window.localStorage.getItem(key) || String(initVal)
			);
		} catch (e) {
			val = initVal;
		}
		return val;
	});

	useEffect(
		() => {
			window.localStorage.setItem(key, JSON.stringify(state));
		},
		[ key, state ]
	);

	return [ state, setState ];
}

export default useLocalStorageState;
 