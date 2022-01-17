import React, { PropsWithChildren } from 'react';

interface ErrorBoundaryState {
	errorCatched: boolean,
	errorMessage: string
}

type ErrorBoundaryProps = PropsWithChildren<any> & Record<string, any>;

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props)
		this.state = { errorCatched: false, errorMessage: '' };
	}

	static getDerivedStateFromError(error: Error) {
		return { errorCatched: true, errorMessage: error.message };
	}

	render() {
		if (this.state.errorCatched) {
			return <h1>Something went wrong...</h1>
		}
		return this.props.children;
	}
}

export default ErrorBoundary;