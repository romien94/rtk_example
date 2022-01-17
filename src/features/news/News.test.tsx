import { render, fireEvent, screen } from '../../utils/tests';
import News from './News';
import { newsList } from '../../mocks/data'

const initialNewsListLength = newsList.length;

it('renders Load Screen while no data is available', () => {
	render(<News data-testid='news-component' />);

	const loadingScreen = screen.getByTestId('loader');
	expect(loadingScreen).toBeInTheDocument();
});

it('renders news component after loading data from api', async () => {
	render(<News data-testid='news-component' />);

	const newsComponent = await screen.findByTestId('news-component');
	expect(newsComponent).toBeInTheDocument();
});

it('renders news items received from server', async () => {
	render(<News data-testid='news-component' />);

	const newsList = await screen.findByTestId('news-list');

	expect(newsList).toBeInTheDocument();
	expect(newsList.children.length).toEqual(initialNewsListLength);
});

it('shows empty list when no elements have been liked and shows all news when toggled again', async () => {
	render(<News data-testid='news-component' />);

	const newsFilter = await screen.findByTestId('news-filter');
	fireEvent.click(newsFilter);

	const newsItems = screen.getByTestId('news-list');

	expect(newsItems).toBeInTheDocument();
	expect(newsItems).toHaveTextContent('Список новостей пуст...');

	fireEvent.click(newsFilter);
	expect(newsItems.children.length).toEqual(initialNewsListLength);
});

it('deletes elements from the list', async () => {
	render(<News data-testid='news-component' />);

	const newsItems = await screen.findByTestId('news-list');

	const firstDeleteButton = newsItems.querySelector('[aria-label="delete"]')!;

	expect(firstDeleteButton).toBeInTheDocument();
	fireEvent.click(firstDeleteButton);

	expect(newsItems.children.length).toEqual(initialNewsListLength - 1);
});

it('shows elements that have been liked after pressing like button and toggling filter', async () => {
	render(<News data-testid='news-component' />);

	const newsItems = await screen.findByTestId('news-list');

	const firstHeartButton = newsItems.querySelector('[aria-label="heart"]')!;
	expect(firstHeartButton).toBeInTheDocument();

	fireEvent.click(firstHeartButton);

	const newsFilter = await screen.findByTestId('news-filter');
	fireEvent.click(newsFilter);

	const filteredNewsItems = await screen.findByTestId('news-list');
	expect(filteredNewsItems.children.length).toEqual(1);
});