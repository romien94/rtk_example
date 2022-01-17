import { render, screen } from '../../../utils/tests';
import NewsItem from './NewsItem';
import { newsList } from '../../../mocks/data';


it('renders single news to the screen', () => {
	const testItem = newsList[0];

	render(<NewsItem {...newsList[0]} />);

	const newsItem = screen.getByText(testItem.title);

	expect(newsItem).toBeInTheDocument();
});
