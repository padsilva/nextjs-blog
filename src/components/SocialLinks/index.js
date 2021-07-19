import * as S from './styled'
import Icons from './Icons'

const links = [
  {
    label: 'Github',
    url: 'https://github.com/padsilva'
  },
  {
    label: 'Linkedin',
    url: 'https://www.linkedin.com/in/padsilva88/'
  },
  {
    label: 'Twitter',
    url: 'https://twitter.com/padsilva88'
  }
]

const SocialLinks = () => (
  <S.SocialLinksWrapper>
    <S.SocialLinksList>
      {links.map((link, i) => {
        const Icon = Icons[link.label]

        return (
          <S.SocialLinksItem key={i}>
            <S.SocialLinksLink
              href={link.url}
              title={link.label}
              target="_blank"
              rel="noopener no referrer"
            >
              <S.IconWrapper>
                <Icon />
              </S.IconWrapper>
            </S.SocialLinksLink>
          </S.SocialLinksItem>
        )
      })}
    </S.SocialLinksList>
  </S.SocialLinksWrapper>
)

export default SocialLinks
