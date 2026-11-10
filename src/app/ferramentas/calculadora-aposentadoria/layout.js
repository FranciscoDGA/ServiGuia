export const metadata = {
  title: 'Calculadora de Aposentadoria do Servidor Público (RPPS e Professores) | ServGuia',
  description: 'Simulador online e gratuito de aposentadoria para servidores públicos municipais e estaduais (RPPS). Calcule regras de transição (EC 103/19), idade mínima, pedágio 100% e regras especiais para professores.',
  keywords: [
    'calculadora aposentadoria professor municipal',
    'calculo aposentadoria servidor publico municipal',
    'simulador de aposentadoria do servidor público',
    'aposentadoria rpps',
    'calculadora aposentadoria servidor público',
    'calculo aposentadoria proporcional',
    'regra de transição ec 103 rpps',
    'aposentadoria professor municipal'
  ],
  alternates: {
    canonical: 'https://servi-guia.vercel.app/ferramentas/calculadora-aposentadoria',
  },
  openGraph: {
    title: 'Calculadora de Aposentadoria do Servidor Público (RPPS e Professores)',
    description: 'Descubra quanto tempo falta para se aposentar no Regime Próprio (RPPS). Simule regras de transição da EC 103/2019, pedágio e aposentadoria especial de professor.',
    url: 'https://servi-guia.vercel.app/ferramentas/calculadora-aposentadoria',
    siteName: 'ServGuia',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calculadora de Aposentadoria do Servidor Público (RPPS e Professores)',
    description: 'Simulação rápida e gratuita de regras de transição e aposentadoria para servidores municipais e estaduais.',
  }
}

export default function CalculadoraLayout({ children }) {
  const jsonLdWebApp = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Calculadora de Aposentadoria do Servidor Público (RPPS)',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    browserRequirements: 'Requires JavaScript. Requires HTML5.',
    url: 'https://servi-guia.vercel.app/ferramentas/calculadora-aposentadoria',
    description: 'Simulador previdenciário gratuito para servidores públicos estatutários municipais e estaduais calcularem tempo restante, regras de transição e idade mínima.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'BRL',
    },
    creator: {
      '@type': 'Organization',
      name: 'ServGuia',
      url: 'https://servi-guia.vercel.app'
    }
  }

  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Como funciona a aposentadoria do professor municipal e estadual?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Os professores da educação básica (infantil, fundamental e médio) possuem direito constitucional a uma redução de 5 anos nos requisitos de idade e tempo de contribuição no RPPS. Na regra permanente pós-Reforma, mulheres se aposentam aos 57 anos de idade e 25 anos de contribuição, e homens aos 60 anos de idade e 25 de contribuição, desde que comprovado tempo exclusivo no magistério.'
        }
      },
      {
        '@type': 'Question',
        name: 'O que mudou na aposentadoria do servidor público municipal com a EC 103/2019?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A Emenda Constitucional nº 103/2019 instituiu novas idades mínimas (geral de 62 anos para mulheres e 65 para homens, com 25 anos de contribuição, 10 anos de serviço público e 5 anos no cargo). Para municípios com RPPS, as regras dependem de reforma legislativa própria aprovada pela Câmara de Vereadores ou adoção das regras gerais.'
        }
      },
      {
        '@type': 'Question',
        name: 'Quem tem direito à paridade e à integralidade no serviço público?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Têm direito à integralidade (última remuneração) e paridade (mesmos reajustes dos ativos) os servidores que ingressaram no serviço público efetivo até 31 de dezembro de 2003 (EC 41/2003) e que cumpram os requisitos da regra de transição do pedágio de 100% ou da regra de pontos com a idade mínima exigida.'
        }
      },
      {
        '@type': 'Question',
        name: 'O que é a regra de transição do Pedágio de 100% para o RPPS?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A regra do pedágio de 100% exige idade mínima de 57 anos para mulheres (52 para professoras) e 60 anos para homens (55 para professores), 30 ou 35 anos de contribuição (25 ou 30 para professores), mais um período adicional igual ao tempo que faltava para atingir o tempo de contribuição em 13/11/2019.'
        }
      },
      {
        '@type': 'Question',
        name: 'Como funciona a aposentadoria proporcional do servidor?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A aposentadoria proporcional foi extinta na regra geral permanente da EC 103/2019, permanecendo apenas para servidores que cumpriram todos os requisitos até 13/11/2019 (direito adquirido) ou na aposentadoria compulsória aos 75 anos de idade.'
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebApp) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      {children}
    </>
  )
}
