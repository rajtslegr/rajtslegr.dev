import { getPage } from 'next-page-tester';
import prettier from 'prettier';

describe('Index page', () => {
  it('should match the snapshot', async () => {
    const { serverRenderToString, render } = await getPage({
      route: '/',
      useDocument: true,
    });

    // check correctness of SSR result
    const { html } = serverRenderToString();
    const formattedSSRSnapshot = prettier.format(html, {
      parser: 'html',
    });

    expect(formattedSSRSnapshot).toMatchSnapshot();

    // check hydrated app
    const { nextRoot } = render();
    const formattedHydratedSnapshot = prettier.format(nextRoot.outerHTML, {
      parser: 'html',
    });

    expect(formattedHydratedSnapshot).toMatchSnapshot();
    expect(formattedHydratedSnapshot).toContain('<img>');
  });
});
