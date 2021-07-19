import PropTypes from 'prop-types'
import Link from 'next/link'
import Image from 'next/image'
import { InstantSearch, SearchBox, Hits, Stats } from 'react-instantsearch-dom'
import algoliasearch from 'algoliasearch/lite'

import Hit from './Hit'

import * as S from './styled'

const Search = ({ algolia }) => {
  const searchClient = algoliasearch(algolia.appId, algolia.searchOnlyApiKey)

  return (
    <S.SearchWrapper>
      <InstantSearch searchClient={searchClient} indexName={algolia.indexName}>
        <SearchBox />
        <S.StatsWrapper>
          <Stats />
          <Link href="https://www.algolia.com/?utm_source=instantsearch.js&amp;utm_medium=website&amp;utm_content=instantsearchjs.netlify.app&amp;utm_campaign=poweredby">
            <a
              target="_blank"
              className="ais-PoweredBy-link"
              aria-label="Search by Algolia"
              rel="noopener noreferrer"
            >
              <Image
                src="/img/search-by-algolia-light-background.svg"
                alt="algolia icon"
                layout="fixed"
                width={112}
                height={16}
              />
            </a>
          </Link>
        </S.StatsWrapper>

        <Hits hitComponent={Hit} />
      </InstantSearch>
    </S.SearchWrapper>
  )
}

Search.propTypes = {
  algolia: PropTypes.object.isRequired
}

export default Search
