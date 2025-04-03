import { images } from '@assets/images/images'

import { FooterStyled } from './Footer.styled'

export default function Footer() {
  return (
    <FooterStyled>
      <img src={images.museum_logo_black} alt='Museum logo' />
      <span>Developed by Danila Kuroedov</span>
    </FooterStyled>
  )
}
