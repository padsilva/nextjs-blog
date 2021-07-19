import Base from 'components/Base'
import Search from 'components/Search'
import SEO from 'components/seo'

const algolia = {
  appId: process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  searchOnlyApiKey: process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY,
  indexName: process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME
}

const SearchPage = () => (
  <Base>
    <SEO title="Search" />
    <Search algolia={algolia} />
  </Base>
)

export default SearchPage
