import renderer from 'react-test-renderer';
import IndexPage from '../pages';

describe('Index page', () => {
  it('should match the snapshot', () => {
    const tree = renderer.create(<IndexPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
