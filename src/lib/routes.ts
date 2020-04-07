import { storage } from '.';
import { injectPageProps } from '.';
import { NotFound, RepoListPage, RepoShowPage } from '../pages';

export const pageRoutes = {
  '/': RepoListPage,
  '/:owner/:repo': RepoShowPage,
  // '/:owner/:repo/collections': CollectionListPage,
  // '/:owner/:repo/collections/:collection': CollectionShowPage,
  '/*': NotFound
};

export const routes = injectPageProps(pageRoutes, (props) => {
  const { repo, owner, collection } = props;

  const pageProps = {
    repo,
    owner,
    collection
  };

  storage.set('pageProps', pageProps);

  return { pageProps };
});
