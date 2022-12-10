import { HomeWrapper, Links } from './styles'
import CreateGlobalStyle from '../../../styles/global'
import Image from 'next/image'
import { InstagramLogo, WhatsappLogo } from 'phosphor-react'
export function HomePage() {
  return (
    <HomeWrapper>
      <CreateGlobalStyle />
      <Image
        alt="logo da empresa"
        src="/logo.jpeg"
        width={200}
        height={200}
        blurDataURL="/logo.jpeg"
        style={{
          borderRadius: '50%'
        }}
      />
      <h3>Vibradores, lubrificantes e diversão com muito prazer! </h3>

      <Links>
        <p>Atendimento pelos links</p>
        <a href="https://www.instagram.com/toquecomdesejo/" target="blank">
          <InstagramLogo />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=5519999483094&text&type=phone_number&app_absent=0"
          target="blank"
        >
          <WhatsappLogo />
        </a>
      </Links>
    </HomeWrapper>
  )
}

// toquecomdesejo atendimento
