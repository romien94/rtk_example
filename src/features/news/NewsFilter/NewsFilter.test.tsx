import { render, screen, fireEvent } from '../../../utils/tests';
import NewsFilter from './NewsFilter';


it('renders filter to the screen', () => {
	render(<NewsFilter />);
	const newsItem = screen.getByText(/Показывать все новости/);
	expect(newsItem).toBeInTheDocument();
});

it('changes state when clicked and reverts back when clicked again', () => {
	render(<NewsFilter />);
	const newsItem = screen.getByText(/Показывать все новости/);

	fireEvent.click(newsItem);
	expect(newsItem).toHaveTextContent('Показывать только новости с лайками');

	fireEvent.click(newsItem);
	expect(newsItem).toHaveTextContent('Показывать все новости');
});