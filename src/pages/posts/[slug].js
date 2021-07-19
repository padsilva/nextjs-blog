import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'

import Base from 'components/Base'
import RecommendedPosts from 'components/RecommendedPosts'
import SEO from 'components/seo'

import * as S from 'components/Post/styled'

import { getPostBySlug, getAllPosts } from 'lib/api'
import { markdownToHtml } from 'lib/markdownToHtml'

const Post = ({ post, nextPost, previousPost }) => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Base>
      <SEO title={post.title} description={post.description} />

      <S.PostHeader>
        <S.PostDate>
          {post.date} · {post.readingTime} min read
        </S.PostDate>
        <S.PostTitle>{post.title}</S.PostTitle>
        <S.PostDescription>{post.description}</S.PostDescription>
      </S.PostHeader>

      <S.MainContent>
        <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
      </S.MainContent>

      <RecommendedPosts next={nextPost} previous={previousPost} />
    </Base>
  )
}

export const getStaticProps = async ({ params }) => {
  const post = getPostBySlug(params.slug)
  const content = await markdownToHtml(post.content || '')

  const posts = getAllPosts()
  const index = posts.findIndex(({ slug }) => slug === params.slug)

  const nextPost =
    index < posts.length - 1 ? getPostBySlug(posts[index + 1].slug) : null
  const previousPost = index > 0 ? getPostBySlug(posts[index - 1].slug) : null

  return {
    props: {
      post: {
        ...post,
        content
      },
      nextPost,
      previousPost
    }
  }
}

export const getStaticPaths = async () => {
  const posts = getAllPosts()

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug
      }
    })),
    fallback: false
  }
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  nextPost: PropTypes.object,
  previousPost: PropTypes.object
}

export default Post
