import React, { FC, ReactElement } from 'react'
import { render as rtlRender } from '@testing-library/react'
import { Provider } from 'react-redux'

import store from '../app/store';

function render(ui: ReactElement, { ...renderOptions } = {}) {
	const Wrapper: FC = ({ children }) => <Provider store={store}>{children}</Provider>;

	Object.defineProperty(window, 'matchMedia', {
		writable: true,
		value: jest.fn().mockImplementation(query => ({
			matches: false,
			media: query,
			onchange: null,
			addListener: jest.fn(), // deprecated
			removeListener: jest.fn(), // deprecated
			addEventListener: jest.fn(),
			removeEventListener: jest.fn(),
			dispatchEvent: jest.fn(),
		})),
	});
	return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';
export { render };