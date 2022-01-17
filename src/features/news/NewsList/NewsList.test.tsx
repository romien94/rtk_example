import { render, screen } from '../../../utils/tests';
import NewsListComponent from './NewsList';
import { newsList } from '../../../mocks/data';


it('renders news items correctly', () => {
	render(<NewsListComponent newsList={newsList} data-testid="news-list" />);

	const newsListElement = screen.getByTestId('news-list');

	expect(newsListElement).toBeInTheDocument();
	expect(newsListElement?.children.length).toEqual(newsList.length);
});