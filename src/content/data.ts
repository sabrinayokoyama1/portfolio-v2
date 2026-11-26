// Professional facts and links are kept here so portfolio updates do not require layout changes.
export type Locale = 'pt' | 'en';
export type Localized = { pt: string; en: string };
export const tr = (value: Localized, locale: Locale) => value[locale];
export const links = {
  github: 'https://github.com/sabrinayokoyama1',
  linkedin: 'https://www.linkedin.com/in/sabrina-yokoyama/',
  certificates: 'https://www.linkedin.com/in/sabrina-yokoyama/details/certifications/',
  email: 'mailto:sabrinayokoyama1@gmail.com',
  whatsapp: 'https://wa.me/5511974705951',
};
export const skills = [
  {
    icon: 'analytics',
    title: 'Data Analytics',
    description: {
      pt: 'Análise exploratória, SQL avançado, indicadores e comportamento de clientes.',
      en: 'Exploratory analysis, advanced SQL, metrics and customer behavior.',
    },
    tags: ['SQL', 'Python', 'Analytics'],
    href: '/experience',
  },
  {
    icon: 'bi',
    title: 'Business Intelligence',
    description: {
      pt: 'Dados transformados em informação estratégica para apoiar decisões.',
      en: 'Turning data into strategic information that supports decisions.',
    },
    tags: ['Power BI', 'KPIs', 'Data Visualization'],
    href: '/experience',
  },
  {
    icon: 'engineering',
    title: 'Data Engineering & Automation',
    description: {
      pt: 'Integração, processamento, padronização e automação de fluxos de dados.',
      en: 'Integration, processing, standardization and automation of data flows.',
    },
    tags: ['AWS', 'ETL', 'Data Lake'],
    href: '/experience',
  },
  {
    icon: 'ai',
    title: 'Data Science & AI',
    description: {
      pt: 'Soluções analíticas e aplicações de inteligência artificial.',
      en: 'Analytical solutions and artificial intelligence applications.',
    },
    tags: ['Machine Learning', 'Generative AI', 'RAG'],
    href: '/projects',
  },
] as const;
export const moments = [
  {
    title: 'AWS Summit 2026',
    description: {
      pt: 'Participação no AWS Summit São Paulo 2026.',
      en: 'Attended AWS Summit São Paulo 2026.',
    },
    image: '/images/img1.jpg',
    alt: {
      pt: 'Sabrina em frente à entrada do AWS Summit São Paulo',
      en: 'Sabrina outside the AWS Summit São Paulo venue',
    },
  },
  {
    title: 'Talk ITEMM',
    description: {
      pt: 'Palestrante convidada para uma conversa sobre mercado de trabalho, soft skills e IA.',
      en: 'Guest speaker on careers, soft skills and AI.',
    },
    image: '/images/img2.jpg',
    alt: {
      pt: 'Sabrina falando ao microfone no Talk ITEMM',
      en: 'Sabrina speaking into a microphone at Talk ITEMM',
    },
  },
  {
    title: 'Uniso Quantum Day',
    description: {
      pt: 'Participação no Uniso Quantum Day da Universidade de Sorocaba.',
      en: 'Participated in the University of Sorocaba’s Uniso Quantum Day.',
    },
    image: '/images/img3.jpg',
    alt: {
      pt: 'Sabrina no espaço do Uniso Quantum Day',
      en: 'Sabrina at the Uniso Quantum Day event',
    },
  },
  {
    title: 'Projeto MIW',
    description: {
      pt: 'Apresentação universitária de uma plataforma de educação financeira e investimentos.',
      en: 'University presentation of a financial education and investment platform.',
    },
    image: '/images/img4.jpg',
    alt: {
      pt: 'Equipe do projeto MIW em apresentação na Universidade de Sorocaba',
      en: 'The MIW project team presenting at the University of Sorocaba',
    },
  },
] as const;
export const experience = [
  {
    role: { pt: 'Analista de Dados', en: 'Data Analyst' },
    period: { pt: 'Jul 2026 — atual', en: 'Jul 2026 — present' },
    company: 'Banco Afinz',
    description: {
      pt: 'Evolução para a posição de Analista de Dados após atuações em assistência e aprendizagem na mesma instituição.',
      en: 'Promoted to Data Analyst after earlier data assistant and apprenticeship roles at the same institution.',
    },
    bullets: {
      pt: ['Atuação em análise de dados no setor financeiro.'],
      en: ['Data analytics in financial services.'],
    },
    tags: ['Financial Analytics', 'SQL', 'Python', 'BI'],
  },
  {
    role: { pt: 'Assistente de Dados', en: 'Data Assistant' },
    period: { pt: 'Fev 2024 — Jul 2026', en: 'Feb 2024 — Jul 2026' },
    company: 'Banco Afinz',
    description: {
      pt: 'Automação da ingestão e melhoria da qualidade de dados provenientes de fontes externas.',
      en: 'Automated ingestion and improved the quality of data from external sources.',
    },
    bullets: {
      pt: [
        'Rotinas de limpeza, validação e reconciliação de dados.',
        'Análise financeira apoiada por modelos contábeis e econômicos.',
      ],
      en: [
        'Data cleaning, validation and reconciliation routines.',
        'Financial analysis informed by accounting and economic models.',
      ],
    },
    tags: ['AWS Athena', 'SQL', 'Python', 'Data Quality'],
  },
  {
    role: {
      pt: 'Aprendiz de Dados e Tecnologia · Análise e BI',
      en: 'Data & Technology Apprentice · Analytics & BI',
    },
    period: { pt: 'Set 2023 — Fev 2024', en: 'Sep 2023 — Feb 2024' },
    company: 'Banco Afinz',
    description: {
      pt: 'Análise exploratória e construção de indicadores para Marketing e CRM.',
      en: 'Exploratory analysis and KPI development for Marketing and CRM.',
    },
    bullets: {
      pt: [
        'Automação de processos com SQL e Power BI.',
        'Segmentação de clientes e comunicação de insights a stakeholders.',
      ],
      en: [
        'Process automation with SQL and Power BI.',
        'Customer segmentation and communication of insights to stakeholders.',
      ],
    },
    tags: ['SQL', 'Power BI', 'Oracle', 'CRM'],
  },
  {
    role: {
      pt: 'Aprendiz de Dados e Tecnologia · Engenharia de Dados',
      en: 'Data & Technology Apprentice · Data Engineering',
    },
    period: { pt: 'Mar 2023 — Set 2023', en: 'Mar 2023 — Sep 2023' },
    company: 'Banco Afinz',
    description: {
      pt: 'Desenvolvimento de pipelines ETL/ELT, integrações via API e modelos de dados em ambiente AWS.',
      en: 'Developed ETL/ELT pipelines, API integrations and data models in AWS.',
    },
    bullets: {
      pt: [
        'Automação e monitoramento de fluxos de dados.',
        'Criação de indicadores com Python e Power BI.',
      ],
      en: ['Automated and monitored data flows.', 'Built indicators with Python and Power BI.'],
    },
    tags: ['ETL/ELT', 'AWS', 'Python', 'APIs'],
  },
  {
    role: {
      pt: 'Aprendiz de Dados e Tecnologia · Implantação e Pós-vendas',
      en: 'Data & Technology Apprentice · Implementation & After-Sales',
    },
    period: { pt: 'Out 2022 — Mar 2023', en: 'Oct 2022 — Mar 2023' },
    company: 'Banco Afinz',
    description: {
      pt: 'Apoio a indicadores operacionais, organização de processos, treinamentos e melhoria contínua.',
      en: 'Supported operational KPIs, process organization, training and continuous improvement.',
    },
    bullets: {
      pt: ['Acompanhamento de processos e indicadores operacionais.'],
      en: ['Tracked operational processes and indicators.'],
    },
    tags: ['KPIs', 'Process Improvement'],
  },
] as const;
export type CaseStudy = {
  slug: string;
  title: Localized;
  area: Localized;
  metric: string;
  metricLabel: Localized;
  estimated: boolean;
  summary: Localized;
  problem: Localized;
  solution: Localized;
  technologies: string[];
  impacts: { value: string; label: Localized; estimated?: boolean }[];
  strategic?: Localized[];
  keywords: string[];
};
export const cases: CaseStudy[] = [
  {
    slug: 'historico-de-contas',
    title: {
      pt: 'Consolidação histórica de contas e inteligência de crédito',
      en: 'Historical account consolidation and credit intelligence',
    },
    area: { pt: 'Crédito · Análise de Dados · BI', en: 'Credit · Data Analytics · BI' },
    metric: '75%',
    metricLabel: {
      pt: 'redução estimada no preparo e integração de dados',
      en: 'estimated reduction in data preparation and integration time',
    },
    estimated: true,
    summary: {
      pt: 'Base histórica unificada de contas de cartão de crédito desde 2020, integrando quatro origens sistêmicas.',
      en: 'Unified credit card account history since 2020, integrating four system sources.',
    },
    problem: {
      pt: 'Migrações entre processadoras fragmentavam o histórico de contas e dificultavam análises de comportamento, rentabilidade e longevidade.',
      en: 'Processor migrations fragmented account histories and complicated analyses of behavior, profitability and customer longevity.',
    },
    solution: {
      pt: 'Uma base histórica centralizada em SQL e AWS Athena integra camadas analíticas e refinadas, preservando a rastreabilidade entre quatro origens.',
      en: 'A centralized historical dataset built with SQL and AWS Athena integrates analytical and refined layers while preserving traceability across four sources.',
    },
    technologies: ['SQL', 'AWS Athena'],
    impacts: [
      {
        value: '75%',
        label: {
          pt: 'menos tempo para preparo e integração · time de Dados',
          en: 'less preparation and integration time · Data team',
        },
        estimated: true,
      },
      {
        value: '60%',
        label: {
          pt: 'menos tempo para análises estratégicas · Crédito',
          en: 'less time for strategic analysis · Credit team',
        },
        estimated: true,
      },
      {
        value: '50%',
        label: {
          pt: 'menos esforço em análises históricas · companhia',
          en: 'less effort in historical analyses · company',
        },
        estimated: true,
      },
    ],
    keywords: ['SQL', 'AWS Athena', 'Data Integration', 'Credit Analytics', 'BI'],
  },
  {
    slug: 'governanca-de-seguros',
    title: {
      pt: 'Automação e governança de dados de seguros',
      en: 'Insurance data automation and governance',
    },
    area: { pt: 'Seguros · Cobrança · Governança', en: 'Insurance · Collections · Governance' },
    metric: '86%',
    metricLabel: {
      pt: 'aumento de eficiência operacional',
      en: 'increase in operational efficiency',
    },
    estimated: false,
    summary: {
      pt: 'Automação e padronização de 14 arquivos de seguradoras, com informações centralizadas no Data Lake.',
      en: 'Automated and standardized 14 insurer files, centralizing information in the Data Lake.',
    },
    problem: {
      pt: 'Processos manuais e dados descentralizados limitavam a visibilidade do ciclo de vida de produtos de seguros.',
      en: 'Manual processes and decentralized data limited visibility into insurance product lifecycles.',
    },
    solution: {
      pt: 'O recebimento e processamento de 14 arquivos foram automatizados e padronizados no Data Lake. A estrutura apoia o monitoramento de períodos de degustação, adesões e cancelamentos.',
      en: 'The intake and processing of 14 files were automated and standardized in the Data Lake. The resulting structure supports monitoring of trial periods, subscriptions and cancellations.',
    },
    technologies: [],
    impacts: [
      {
        value: '86%',
        label: {
          pt: 'ganho de eficiência · Seguros e Cobrança',
          en: 'efficiency gain · Insurance and Collections',
        },
      },
      {
        value: '80h',
        label: {
          pt: 'operação economizada por mês · companhia',
          en: 'operational hours saved per month · company',
        },
      },
      {
        value: '960h',
        label: {
          pt: 'projeção anual, se o ganho mensal se mantiver',
          en: 'annual projection if monthly savings continue',
        },
        estimated: true,
      },
      {
        value: '14/14',
        label: {
          pt: 'arquivos padronizados e centralizados',
          en: 'files standardized and centralized',
        },
      },
    ],
    keywords: ['Data Governance', 'Data Automation', 'Data Lake', 'Data Quality', 'ETL'],
  },
  {
    slug: 'saldo-devedor',
    title: {
      pt: 'Rastreabilidade e reconstrução do saldo devedor',
      en: 'Debt balance traceability and reconstruction',
    },
    area: { pt: 'Crédito · Conformidade · Dados', en: 'Credit · Compliance · Data' },
    metric: '80%',
    metricLabel: {
      pt: 'redução estimada no tempo de reconstrução',
      en: 'estimated reduction in reconstruction time',
    },
    estimated: true,
    summary: {
      pt: 'Reconstrução histórica da composição do saldo devedor de cartões para apoiar o Documento Descritivo do Crédito.',
      en: 'Reconstructed credit card debt balance histories to support the Descriptive Credit Document.',
    },
    problem: {
      pt: 'A composição histórica do saldo devedor precisava ser rastreável para solicitações de clientes e exigências regulatórias.',
      en: 'Historical debt balance composition needed to be traceable for customer requests and regulatory requirements.',
    },
    solution: {
      pt: 'Uma base analítica em SQL e AWS Athena reconstrói faturas, pagamentos, juros, encargos, parcelamentos e crédito rotativo, padronizando o detalhamento financeiro.',
      en: 'An analytical dataset in SQL and AWS Athena reconstructs statements, payments, interest, charges, installments and revolving credit, standardizing financial breakdowns.',
    },
    technologies: ['SQL', 'AWS Athena'],
    impacts: [
      {
        value: '80%',
        label: {
          pt: 'menos tempo de reconstrução · Dados',
          en: 'less reconstruction time · Data team',
        },
        estimated: true,
      },
      {
        value: '70%',
        label: {
          pt: 'menos esforço em demonstrativos · negócio',
          en: 'less work preparing statements · business teams',
        },
        estimated: true,
      },
      {
        value: '60%',
        label: {
          pt: 'menos esforço operacional · companhia',
          en: 'less operational work · company',
        },
        estimated: true,
      },
    ],
    keywords: ['SQL', 'AWS Athena', 'Credit Analytics', 'Data Traceability', 'DDC'],
    strategic: [
      {
        pt: 'Fortalecimento da conformidade com as exigências do Banco Central.',
        en: 'Stronger compliance with Central Bank requirements.',
      },
      { pt: 'Mitigação de riscos regulatórios.', en: 'Reduced regulatory risk.' },
      {
        pt: 'Maior transparência nas operações de crédito.',
        en: 'Greater transparency in credit operations.',
      },
      {
        pt: 'Padronização das informações financeiras.',
        en: 'Standardized financial information.',
      },
    ],
  },
];
export const degree = {
  title: {
    pt: 'Ciência de Dados e Inteligência Artificial',
    en: 'Data Science and Artificial Intelligence',
  },
  subtitle: {
    pt: 'Bacharelado · Universidade de Sorocaba (UNISO) · Conclusão prevista: dez/2027',
    en: 'B.Sc. · Universidade de Sorocaba (UNISO) · Expected completion: Dec 2027',
  },
  description: {
    pt: 'Formação multidisciplinar em computação, estatística, modelagem de dados e aprendizado de máquina para resolver problemas reais.',
    en: 'Multidisciplinary studies in computing, statistics, data modeling and machine learning to solve real-world problems.',
  },
  tags: [
    'Bancos relacionais',
    'Bancos não relacionais',
    'Infraestrutura de TI',
    'Big Data',
    'Redes neurais',
    'Machine Learning',
  ],
};
export const courses = [
  {
    title: 'Data Fundamentals',
    issuer: 'IBM',
    tags: ['Data Literacy', 'Data Analytics', 'Data Management'],
  },
  {
    title: 'Cloud Onboarding',
    issuer: 'Alura',
    tags: ['Cloud Computing', 'Cloud Infrastructure', 'Cloud Services'],
  },
  { title: 'Python Pandas', issuer: 'Alura', tags: ['Python', 'Pandas', 'Data Manipulation'] },
  {
    title: 'IA na Prática',
    issuer: 'Fundação Bradesco',
    tags: ['Artificial Intelligence', 'AI Applications', 'Generative AI'],
  },
  {
    title: 'Engenharia de Dados',
    issuer: 'Alura',
    tags: ['Data Engineering', 'ETL', 'Data Pipelines'],
  },
  {
    title: 'Indicadores Estratégicos',
    issuer: 'SEBRAE',
    tags: ['KPIs', 'Business Strategy', 'Performance Analysis'],
  },
  {
    title: 'LGPD',
    issuer: 'Fundação Bradesco',
    tags: ['Data Privacy', 'Data Protection', 'Compliance'],
  },
  { title: 'Excel Avançado', issuer: 'ITEMM', tags: ['Excel', 'Data Analysis', 'Spreadsheets'] },
  {
    title: 'Soluções Ágeis',
    issuer: 'SEBRAE',
    tags: ['Agile', 'Problem Solving', 'Project Management'],
  },
  {
    title: 'Google Analytics 4',
    issuer: 'Alura',
    tags: ['Web Analytics', 'Digital Metrics', 'GA4'],
  },
] as const;
export const projects = [
  {
    title: 'Cognitive AI',
    area: { pt: 'Educação · Inteligência Artificial', en: 'Education · Artificial Intelligence' },
    description: {
      pt: 'Tutor educacional com IA generativa e arquitetura RAG. O método socrático estimula pensamento crítico por meio de perguntas contextualizadas.',
      en: 'Educational tutor using generative AI and RAG. A Socratic approach encourages critical thinking through contextual questions.',
    },
    tags: ['Python', 'Streamlit', 'RAG', 'TF-IDF', 'Scikit-learn', 'GPT', 'Jupyter Notebook'],
    repo: 'https://github.com/sabrinayokoyama1/cognitive-ai-v2',
    note: {
      pt: 'Protótipo. Respostas por GPT dependem de chave de API.',
      en: 'Prototype. GPT responses require an API key.',
    },
    motto: 'Think twice. Ask why.',
  },
  {
    title: 'Indicadores Financeiros',
    area: { pt: 'Finanças · Análise de Dados', en: 'Finance · Data Analytics' },
    description: {
      pt: 'Consultas SQL avançadas em uma base bancária fictícia para construir indicadores, identificar padrões de comportamento e apoiar decisões.',
      en: 'Advanced SQL on a fictional banking dataset to build metrics, identify behavioral patterns and support decisions.',
    },
    tags: ['Advanced SQL', 'GitHub'],
    repo: 'https://github.com/sabrinayokoyama1/project_advanced_sql',
    note: null,
    motto: null,
  },
] as const;
