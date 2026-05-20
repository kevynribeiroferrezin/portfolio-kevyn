import type { Project } from "./types";

export const projects: Project[] = [
  {
    stack: "Python",
    title: "Projeção Telecom",
    icon: "/icons/python.svg",
    description:
      "Aplicação em Streamlit para projeção operacional em telecom, com análise de cargas, serviços e demanda.",
    techs: ["Python", "Streamlit", "Pandas"],
    href: "https://projetos-ciencia-de-dados-dashboard-projecao-telecom.streamlit.app/",
    summary:
      "Dashboard analítico para acompanhamento operacional de fila, vazão e capacidade em uma operação de telecom. A solução consolida indicadores de entrada, finalização, cancelamento, rota inicial, aging e eficiência para apoiar leitura executiva e tomada de decisão diária.",
    technical:
      "O projeto organiza dados operacionais em uma camada de análise interativa com filtros por regional, descrição e período. A modelagem calcula saldos projetados, aging médio, risco de SLA e distribuição por faixa de envelhecimento, permitindo comparar demanda de entrada, capacidade de execução e backlog residual. A interface foi construída em Streamlit com Pandas para transformação dos dados, componentização por abas e foco em leitura executiva dos KPIs.",
    highlights: [
      "Projeção de demanda entrante, finalizações e cancelamentos por período.",
      "Cálculo de rota inicial D+1 para estimar saldo operacional do dia seguinte.",
      "Análise de aging e SLA para identificar fila vencida e risco operacional.",
      "Visão executiva com KPIs, gráficos de tendência e filtros interativos.",
    ],
    images: [
      {
        src: "/projects/telecom-1.png",
        alt: "Visão geral do dashboard BI Horizon com KPIs executivos e tendência de fluxo.",
      },
      {
        src: "/projects/telecom-2.png",
        alt: "Tela de projeção de rota inicial com saldo estimado para o dia seguinte.",
      },
      {
        src: "/projects/telecom-3.png",
        alt: "Análise de saúde da fila, SLA e aging com distribuição por envelhecimento.",
      },
    ],
  },
  {
    stack: "Power BI",
    title: "Dashboard Comercial",
    icon: "/icons/powerbi.svg",
    description:
      "Dashboard executivo com KPIs comerciais, receita, margem, ticket médio, categorias, estados e vendedores.",
    techs: ["Power BI", "DAX", "Power Query", "PostgreSQL"],
    href: "#",
    summary:
      "Dashboard comercial desenvolvido em Power BI para análise executiva de faturamento, lucro, margem, ticket médio e crescimento de KPIs. A solução organiza indicadores de performance por período, categoria, equipe, vendedor e estado, permitindo uma leitura rápida dos principais motores de receita.",
    technical:
      "O projeto utiliza conexão com banco PostgreSQL via Power Query, tratamento e preparação dos dados na etapa de consulta e modelagem relacional no Power BI. A estrutura separa tabelas dimensionais de clientes, produtos, vendedores e calendário da tabela fato de vendas, apoiando medidas DAX para receita, lucro, margem percentual, ticket médio, crescimento e atingimento de meta. O resultado é uma camada analítica consistente para comparação de performance comercial e acompanhamento de metas.",
    highlights: [
      "Conexão com PostgreSQL e preparação dos dados via Power Query.",
      "Modelagem relacional com tabela fato de vendas e dimensões de clientes, produtos, vendedores e calendário.",
      "Medidas DAX para receita, lucro, margem, ticket médio, crescimento e acompanhamento de metas.",
      "Dashboard executivo com filtros, ranking por estado, análise por vendedor e distribuição por categoria.",
    ],
    images: [
      {
        src: "/projects/powerbi-1.png",
        alt: "Dashboard comercial em Power BI com métricas de faturamento, lucro, margem, ticket médio e vendas por estado.",
      },
      {
        src: "/projects/powerbi-2.png",
        alt: "Modelo relacional do Power BI com tabelas de clientes, produtos, vendedores, calendário, medidas e vendas.",
      },
      {
        src: "/projects/powerbi-3.png",
        alt: "Power Query conectado ao banco de dados PostgreSQL para importação e tratamento dos dados comerciais.",
      },
    ],
  },
  {
    stack: "Next.js",
    title: "GOP V2",
    icon: "/icons/nextjs.svg",
    description:
      "Sistema web de gestão operacional com autenticação, Supabase, PostgreSQL e controle de presença.",
    techs: ["Next.js", "TypeScript", "Supabase", "PostgreSQL"],
    href: "#",
    summary:
      "Sistema web para gestão de presença operacional, criado para simplificar o controle diário de colaboradores, exceções e chamadas pendentes. A aplicação centraliza login, dashboard executivo e fluxo de chamada diária em uma interface responsiva, clara e orientada ao uso recorrente por supervisores.",
    technical:
      "O GOP V2 foi estruturado com Next.js e TypeScript, integrando Supabase para autenticação, persistência e operações sobre PostgreSQL. A solução organiza indicadores de presença, faltas, atrasos, colaboradores ativos e chamadas pendentes, além de permitir o lançamento diário de status por colaborador. O fluxo contempla estados como presente, falta, atraso, atestado, folga, férias e afastado, com campos de observação e ações de salvamento/finalização para garantir rastreabilidade operacional.",
    highlights: [
      "Autenticação e controle de acesso para uso interno por supervisores.",
      "Dashboard com indicadores de presença, faltas, atrasos, colaboradores ativos e chamadas pendentes.",
      "Fluxo de chamada diária com seleção de supervisor, status por colaborador e observações opcionais.",
      "Persistência com Supabase/PostgreSQL e interface preparada para rotinas operacionais recorrentes.",
    ],
    images: [
      {
        src: "/projects/gop-1.png",
        alt: "Tela de login do GOP V2 para acesso restrito ao sistema de controle de presença.",
      },
      {
        src: "/projects/gop-2.png",
        alt: "Dashboard do GOP V2 com indicadores de presença, faltas, atrasos e chamadas pendentes.",
      },
      {
        src: "/projects/gop-3.png",
        alt: "Tela de chamada diária do GOP V2 com controle de status dos colaboradores.",
      },
    ],
  },
];
