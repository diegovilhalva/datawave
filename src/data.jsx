import { WiDayCloudyGusts } from "react-icons/wi";
import { BsShieldLock, BsBarChartLine } from "react-icons/bs";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaCode,
  FaHandshake,
} from "react-icons/fa6";
import { FaRegLightbulb } from "react-icons/fa";
import { IoGitNetworkSharp } from "react-icons/io5";
import { HiOutlineLightBulb } from "react-icons/hi";
import { GrSync } from "react-icons/gr";
import {
  headsetImage,
  pencilImage,
  shieldImage,

  //Portfolio images import
  portfolio1,
  portfolio2,
  portfolio3,
  portfolio4,
  portfolio5,
  portfolio6,

  //Clients images import
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
} from "./assets";
import blog1 from "./assets/blog1.jpg";
import blog2 from "./assets/blog2.jpg";
import blog3 from "./assets/blog3.jpg";

import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";


export const navRoutes = [
    { id: "hero", name: "Início" },
    { id: "about", name: "Sobre" },
    { id: "services", name: "Serviços" },
    { id: "portfolio", name: "Portfólio" },
    { id: "blog", name: "Blog" },
    { id: "contact", name: "Contato" },
  ];
  
export const whyChooseUs = [
    {
      title: "Experiência Comprovada",
      imageIcon: shieldImage,
      description: `Com anos de experiência em diversas indústrias, nossa equipe
                  traz profundo conhecimento e expertise técnica para cada projeto,
                  garantindo soluções inovadoras e confiáveis.`,
    },
    {
      title: "Soluções Personalizadas",
      imageIcon: pencilImage,
      description: `Entendemos que cada negócio é único. Nossas soluções são
                  adaptadas às necessidades específicas de cada cliente, oferecendo
                  flexibilidade e escalabilidade para o futuro.`,
    },
    {
      title: "Suporte Excepcional",
      imageIcon: headsetImage,
      description: `Nosso compromisso não termina na entrega do projeto. Fornecemos
                  suporte contínuo para garantir que seu negócio continue a crescer
                  com nossas soluções.`,
    },
  ];
  
export const ourApproaches = [
    {
      title: "Colaboração Centrada no Cliente",
      icon: FaHandshake,
      description: `Priorizamos a colaboração próxima, trabalhando diretamente com
                    clientes para entender sua visão e desafios. Essa parceria garante
                    que cada solução esteja alinhada aos seus objetivos.`,
    },
    {
      title: "Soluções Baseadas em Inovação",
      icon: HiOutlineLightBulb,
      description: `A inovação está no centro do que fazemos. Aplicamos as
                    tecnologias mais recentes e soluções criativas para impulsionar
                    o crescimento e a competitividade a longo prazo.`,
    },
    {
      title: "Ágil e Adaptável",
      icon: GrSync,
      description: `Nossa abordagem ágil nos mantém flexíveis e prontos para nos
                    adaptar a mudanças. Esse método nos permite entregar soluções
                    escaláveis que evoluem com o seu negócio.`,
    },
  ];
  
export const services = [
    {
      title: "Soluções em Nuvem",
      description:
        "Soluções em nuvem seguras e escaláveis para atender às necessidades do seu negócio, permitindo acesso e colaboração de qualquer lugar.",
      icon: WiDayCloudyGusts,
    },
    {
      title: "Cibersegurança",
      description:
        "Proteja seu negócio com soluções robustas de cibersegurança que garantem a segurança dos dados e previnem acessos não autorizados.",
      icon: BsShieldLock,
    },
    {
      title: "Desenvolvimento de Software Personalizado",
      description:
        "Criação de soluções de software sob medida para melhorar a eficiência e se alinhar perfeitamente aos processos e objetivos do seu negócio.",
      icon: FaCode,
    },
    {
      title: "Consultoria em TI",
      description:
        "Aproveite nossa expertise para tomar decisões estratégicas de TI que impulsionam o crescimento e otimizam seus investimentos em tecnologia.",
      icon: FaRegLightbulb,
    },
    {
      title: "Análise de Dados",
      description:
        "Transforme dados brutos em insights valiosos com análises avançadas que orientam decisões de negócios mais inteligentes.",
      icon: BsBarChartLine,
    },
    {
      title: "Infraestrutura de Rede",
      description:
        "Otimize a conectividade do seu negócio com soluções confiáveis e de alta velocidade para garantir operações eficientes e seguras.",
      icon: IoGitNetworkSharp,
    },
  ];

export const portfolio = [
    {
      title: "Plataforma de E-Commerce Segura",
      description:
        "Desenvolvemos uma plataforma de e-commerce de alto desempenho com recursos avançados de segurança, permitindo transações seguras e eficientes para clientes em todo o mundo.",
      image: portfolio1,
    },
    {
      title: "Migração para a Nuvem de uma Empresa Global",
      description:
        "Migramos com sucesso os dados de uma empresa global para um ambiente de nuvem seguro e escalável, melhorando o acesso e reduzindo custos.",
      image: portfolio2,
    },
    {
      title: "Painel de Análise de Dados em Tempo Real",
      description:
        "Criamos um painel de análise em tempo real que fornece insights acionáveis, ajudando empresas a tomarem decisões baseadas em dados com rapidez.",
      image: portfolio3,
    },
    {
      title: "Solução CRM Personalizada para Gestão de Clientes",
      description:
        "Projetamos um sistema CRM personalizado para melhorar as interações com clientes, otimizar fluxos de trabalho e gerenciar leads de forma eficiente.",
      image: portfolio4,
    },
    {
      title: "Sistema de Monitoramento de Cibersegurança com IA",
      description:
        "Criamos um sistema de monitoramento de segurança baseado em IA que detecta e responde a ameaças em tempo real, garantindo uma proteção robusta para os dados dos clientes.",
      image: portfolio5,
    },
    {
      title: "Infraestrutura de Rede de Alta Velocidade para Escritório Corporativo",
      description:
        "Implementamos uma infraestrutura de rede de alta velocidade para aumentar a produtividade e a conectividade em um grande escritório corporativo.",
      image: portfolio6,
    },
  ];
  

export const contactInfo = [
    {
      title: "Envie um E-mail",
      description: "Suporte rápido e confiável",
      value: "support@datawave.com",
      icon: MdOutlineAlternateEmail,
    },
    {
      title: "Nosso Endereço",
      description: "Venha nos visitar em nosso escritório",
      value: "Avenida Central, 456 - Distrito Tecnológico, São Paulo, Brasil",
      icon: FaLocationCrosshairs,
    },
    {
      title: "Telefone",
      description: "Ligue para nós",
      value: "+55 11 98765-4321",
      icon: FiPhoneCall,
    },
];

export const socialHandles = [
    {
      name: "Facebook",
      icon: FaFacebook,
      link: "https://www.facebook.com",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      link: "https://www.instagram.com",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      link: "https://www.linkedin.com",
    },
    {
      name: "Youtube",
      icon: FaYoutube,
      link: "https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1",
    },

]

export const blogPost = [   
    {
      title:
        "Transformando a Saúde com IA: Como a Datawave Está Melhorando os Resultados dos Pacientes",
      content:
        "Este artigo explora o impacto da Datawave na área da saúde por meio de soluções baseadas em IA, como análise preditiva e ferramentas de machine learning que ajudam profissionais médicos a tomar decisões baseadas em dados e otimizar o atendimento aos pacientes.",
      image: blog1,
    },
    {
      title:
        "Protegendo Empresas Contra Ameaças Cibernéticas: A Abordagem da Datawave para a Segurança Digital Moderna",
      content:
        "Discute as soluções de cibersegurança da Datawave, destacando a detecção avançada de ameaças, o uso de machine learning na análise de riscos e estratégias de defesa proativas que as empresas podem adotar para proteger seus dados em um ambiente cada vez mais digital.",
      image: blog2,
    },
    {
      title:
        "Construindo Cidades Inteligentes com IoT: A Visão da Datawave para um Desenvolvimento Urbano Sustentável",
      content:
        "Este artigo explora como a Datawave está utilizando IoT para viabilizar infraestruturas de cidades inteligentes. Aborda o papel do IoT na criação de cidades mais eficientes, sustentáveis e orientadas por dados, com exemplos de como as soluções da Datawave foram implementadas em projetos de desenvolvimento urbano.",
      image: blog3,
    },
];
  
  
export const clientsReviews = [
    {
      content:
        "A Datawave transformou nossos sistemas ultrapassados em uma infraestrutura segura e eficiente. A equipe é altamente qualificada e sempre disponível para ajudar.",
      name: "Sophia Roberts",
      jobTitle: "Gerente de TI, TechNova",
      rating: 4,
      image: client1,
    },
    {
      content:
        "Trabalhar com a Datawave revolucionou nossas operações digitais. A abordagem inovadora da equipe nos ajudou a escalar com facilidade.",
      name: "Rajesh Patel",
      jobTitle: "CEO, Alpha Logistics",
      rating: 4,
      image: client2,
    },
    {
      content:
        "As soluções em nuvem da Datawave aumentaram nossa produtividade de forma significativa. Recomendo os serviços sem hesitação!",
      name: "Emily Nguyen",
      jobTitle: "Gerente de Operações, Zenith Retail",
      rating: 3,
      image: client3,
    },
    {
      content:
        "Nossa segurança cibernética nunca esteve tão forte. A Datawave identificou vulnerabilidades ocultas e as corrigiu com eficiência.",
      name: "James O’Connor",
      jobTitle: "CTO, Shield Financial Group",
      rating: 5,
      image: client4,
    },
    {
      content:
        "A equipe da Datawave entregou antes do prazo e superou nossas expectativas. Profissionalismo e expertise sem igual.",
      name: "Fatima Yusuf",
      jobTitle: "Líder de Projeto, GreenTech Solutions",
      rating: 4,
      image: client5,
    },
    {
      content:
        "A Datawave forneceu soluções escaláveis que sustentaram nosso rápido crescimento. O suporte contínuo garante que estejamos sempre à frente.",
      name: "Liam Carter",
      jobTitle: "Fundador, BrightSpark Media",
      rating: 4,
      image: client6,
    },
  ];
export const footer = [
  {
    title: "Acessar",
    subRoutes: [
      {
        title: "Sobre Nós",
        id: "about",
      },
      {
        title: "Serviços",
        id: "services",
      },
      {
        title: "Depoimentos",
        id: "testimonials",
      },
      {
        title: "Portfólio",
        id: "portfolio",
      },
    ],
  },
  {
    title: "Serviços",
    subRoutes: [
      {
        title: "Soluções em Nuvem",
        id: "",
      },
      {
        title: "Cibersegurança",
        id: "",
      },
      {
        title: "Desenvolvimento de Software",
        id: "",
      },
      {
        title: "Consultoria em TI",
        id: "",
      },
    ],
  },
];
  
  