import React from "react";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  CalendarDays,
  Users,
  BarChart3,
  Bot,
  Settings,
  HelpCircle,
  Scissors,
  Wallet,
  BadgeDollarSign,
  BriefcaseBusiness,
  Bell,
  Search,
  Plus,
  Menu,
  X,
  Sparkles,
  MessageCircle,
  CreditCard,
  Download,
  FileSpreadsheet,
  Filter,
  ChevronDown,
  Zap,
  TrendingUp,
  Clock,
  Crown,
  Building2,
  ShieldCheck,
  UserPlus,
  CircleDollarSign,
  Target,
  Send,
  Instagram,
  CalendarPlus
} from "lucide-react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  AreaChart,
  Area,
  Legend
} from "recharts";
import "./styles.css";

const menu = [
  { label: "Visão Geral", icon: LayoutDashboard, path: "/dashboard" },
  { label: "Agenda", icon: CalendarDays, path: "/agenda" },
  { label: "Clientes", icon: Users, path: "/clientes" },
  { label: "Profissionais", icon: Scissors, path: "/profissionais" },
  { label: "Serviços", icon: BriefcaseBusiness, path: "/servicos" },
  { label: "Financeiro", icon: Wallet, path: "/financeiro" },
  { label: "Comissões", icon: BadgeDollarSign, path: "/comissoes" },
  { label: "Marketing IA", icon: Bot, path: "/marketing-ia" },
  { label: "Relatórios", icon: BarChart3, path: "/relatorios" }
];

const revenueData = [
  { name: "Out 1", receita: 18000, despesas: 9000, lucro: 9000 },
  { name: "Out 8", receita: 32000, despesas: 20000, lucro: 12000 },
  { name: "Out 15", receita: 28500, despesas: 14500, lucro: 14000 },
  { name: "Out 20", receita: 42000, despesas: 18000, lucro: 24000 },
  { name: "Out 28", receita: 48250, despesas: 21000, lucro: 27250 },
  { name: "Nov", receita: 38500, despesas: 17500, lucro: 21000 },
  { name: "Nov 10", receita: 33000, despesas: 15500, lucro: 17500 }
];

const professionals = [
  {
    initials: "CH",
    name: "Carlos Henrique",
    role: "Master Barber & Educator",
    rating: "4.9",
    revenue: "R$ 12.450,00",
    revenueShort: "R$ 12.450",
    commission: "45%",
    commissionValue: "R$ 5.602,50",
    companyProfit: "R$ 6.847,50",
    weekly: [4,5,6,6,7,7,8],
    target: "R$ 15k",
    targetPercent: 83,
    missing: "R$ 2.542",
    color: "blue"
  },
  {
    initials: "MO",
    name: "Marcos Oliveira",
    role: "Senior Stylist",
    rating: "4.7",
    revenue: "R$ 9.128,00",
    revenueShort: "R$ 9.128",
    commission: "40%",
    commissionValue: "R$ 3.651,20",
    companyProfit: "R$ 5.476,80",
    weekly: [4,5,5,5,6,6,7],
    target: "R$ 12k",
    targetPercent: 76,
    missing: "R$ 2.872",
    color: "purple"
  },
  {
    initials: "JM",
    name: "Julia Mendes",
    role: "Color Specialist",
    rating: "5.0",
    revenue: "R$ 15.670,00",
    revenueShort: "R$ 15.670",
    commission: "50%",
    commissionValue: "R$ 7.835,00",
    companyProfit: "R$ 7.835,00",
    weekly: [5,6,7,7,8,8,9],
    target: "R$ 15k",
    targetPercent: 100,
    missing: "Meta batida",
    color: "pink"
  }
];

const clients = [
  { name: "Beatriz Helena", status: "VIP", phone: "(11) 99203-4321", spent: "R$ 12.450,00", last: "2 dias atrás", freq: "Alta" },
  { name: "Ricardo Mendonça", status: "Novo", phone: "(11) 98821-1120", spent: "R$ 849,00", last: "14 dias atrás", freq: "Baixa" },
  { name: "Camila Torres", status: "Inativo", phone: "(11) 97742-9011", spent: "R$ 5.129,00", last: "45 dias atrás", freq: "Média" }
];

const services = [
  { name: "Corte Masculino", price: "R$ 50,00", duration: "45 min", category: "Cabelo", popularity: "Alta", profit: "R$ 20,00" },
  { name: "Barba Completa", price: "R$ 35,00", duration: "30 min", category: "Barba", popularity: "Alta", profit: "R$ 14,00" },
  { name: "Corte + Barba", price: "R$ 80,00", duration: "75 min", category: "Combo", popularity: "Muito alta", profit: "R$ 32,00" }
];

function AppShell({ children }) {
  const [open, setOpen] = React.useState(false);
  const location = useLocation();

  return (
    <div className="app">
      <aside className={`sidebar ${open ? "open" : ""}`}>
        <div className="brand">
          <div className="brand-mark">G</div>
          <div>
            <strong>Gerenc<span>IA</span></strong>
            <small>AI Management</small>
          </div>
          <button className="mobile-close" onClick={() => setOpen(false)}><X size={18} /></button>
        </div>

        <nav>
          {menu.map((item) => (
            <a key={item.path} href={item.path} className={location.pathname === item.path ? "active" : ""}>
              <item.icon size={18} />
              {item.label}
            </a>
          ))}
        </nav>

        <button className="new-btn"><Plus size={16} /> Novo Agendamento</button>

        <div className="sidebar-bottom">
          <a href="/configuracoes" className={location.pathname === "/configuracoes" ? "active" : ""}><Settings size={18} /> Configurações</a>
          <a href="#"><HelpCircle size={18} /> Ajuda</a>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <button className="menu-btn" onClick={() => setOpen(true)}><Menu /></button>
          <div className="search">
            <Search size={16} />
            <input placeholder="Buscar agendamentos, clientes ou métricas..." />
          </div>
          <div className="top-actions">
            <Bell size={18} />
            <div className="avatar">VL</div>
          </div>
        </header>
        {children}
      </main>
    </div>
  );
}

function Page({ title, subtitle, children, actions }) {
  return (
    <div className="page">
      <div className="page-head">
        <div>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
        {actions && <div className="page-actions">{actions}</div>}
      </div>
      {children}
    </div>
  );
}

function Card({ title, subtitle, children, className = "", actions }) {
  return (
    <div className={`card ${className}`}>
      {(title || subtitle || actions) && (
        <div className="card-head">
          <div>
            {title && <h2>{title}</h2>}
            {subtitle && <p>{subtitle}</p>}
          </div>
          {actions}
        </div>
      )}
      {children}
    </div>
  );
}

function StatCard({ title, value, meta, danger, icon: Icon }) {
  return (
    <div className={`card stat ${danger ? "danger" : ""}`}>
      <div className="stat-top">
        <p>{title}</p>
        {Icon && <Icon size={18} />}
      </div>
      <h3>{value}</h3>
      <small>{meta}</small>
    </div>
  );
}

function Dashboard() {
  return (
    <Page title="Bem-vindo de volta, Gerente" subtitle="Sua barbearia está crescendo 12% mais rápido que no mês passado.">
      <section className="stats-grid">
        <StatCard title="Faturamento mensal" value="R$ 48.250" meta="+14,2%" icon={CircleDollarSign} />
        <StatCard title="Lucro líquido" value="R$ 18.400" meta="38,1% margem" icon={TrendingUp} />
        <StatCard title="Agendamentos hoje" value="34" meta="8 confirmados agora" icon={CalendarDays} />
        <StatCard title="Clientes ativos" value="1.240" meta="89% retenção" icon={Users} />
        <StatCard title="Crescimento mensal" value="+12%" meta="Acima da meta" icon={Target} />
        <StatCard title="Comissão pendente" value="R$ 2.410" meta="Revisar agora" danger icon={BadgeDollarSign} />
      </section>

      <section className="dashboard-grid">
        <Card className="wide" title="Performance de Receita" subtitle="Comparativo entre receita e despesas" actions={<button className="ghost-btn">Últimos 30 dias</button>}>
          <RevenueBarChart height={320} />
        </Card>

        <div className="ai-card">
          <Sparkles size={20} />
          <h2>Automação ativa para 1,2k clientes</h2>
          <p>Campanhas, lembretes e conteúdo trabalhando em tempo real.</p>
          <div className="ai-mini"><MessageCircle size={16} /> Campanha WhatsApp <span>342 mensagens enviadas</span></div>
          <div className="ai-mini"><Instagram size={16} /> Conteúdo Instagram <span>Legenda gerada</span></div>
        </div>

        <Card title="Agenda Inteligente" subtitle="Segunda-feira, 28 de outubro">
          <ScheduleList />
        </Card>

        <Card title="Ranking de Comissões" subtitle="Fechamento parcial do mês">
          <ProfessionalsMini />
        </Card>
      </section>

      <div className="banner">
        <div>
          <h2>Faça sua barbearia crescer com Marketing IA</h2>
          <p>Nossa IA encontrou 25% de horários vagos nas terças de manhã. Deseja lançar uma campanha no WhatsApp?</p>
        </div>
        <button>Ativar automação</button>
      </div>
    </Page>
  );
}

function RevenueBarChart({ height = 260 }) {
  return (
    <div className="chart" style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={revenueData} barGap={6}>
          <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#eaf1fb" />
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <YAxis hide />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="despesas" radius={[10, 10, 0, 0]} fill="#d9eaff" />
          <Bar dataKey="receita" radius={[10, 10, 0, 0]} fill="#3B82F6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="tooltip">
      <strong>{label}</strong>
      {payload.map((p) => (
        <span key={p.dataKey}>{p.dataKey}: R$ {Number(p.value).toLocaleString("pt-BR")}</span>
      ))}
    </div>
  );
}

function ScheduleList() {
  const items = [
    ["09:00", "Corte - Bruno R.", "Profissional: João Barber", "Confirmado"],
    ["10:30", "Barba - Lucas M.", "Profissional: Felipe Styles", "Pendente"],
    ["11:15", "Horário livre", "Adicionar encaixe rápido", "+ Adicionar"]
  ];
  return (
    <div className="schedule-list">
      {items.map((i) => (
        <div className="schedule-item" key={i[0]}>
          <b>{i[0]}</b>
          <div><strong>{i[1]}</strong><span>{i[2]}</span></div>
          <em>{i[3]}</em>
        </div>
      ))}
    </div>
  );
}

function ProfessionalsMini() {
  return (
    <div className="ranking">
      {professionals.map((p) => (
        <div key={p.name}>
          <div className={`avatar small ${p.color}`}>{p.initials}</div>
          <strong>{p.name}</strong>
          <span>{p.revenueShort}</span>
          <b>{p.companyProfit}</b>
        </div>
      ))}
    </div>
  );
}

function Agenda() {
  const bookings = [
    { day: "Ter 23", service: "Corte Masculino", status: "Confirmado", time: "10:00 - 11:00", type: "blue" },
    { day: "Qua 24", service: "Treinamento facial", status: "Pendente", time: "10:00 - 11:00", type: "purple" },
    { day: "Qui 25", service: "Análise de dados", status: "Em curso", time: "10:00 - 11:00", type: "green" },
    { day: "Sex 26", service: "Corte + Barba", status: "Confirmado", time: "10:00 - 11:00", type: "cyan" }
  ];

  const days = ["Seg 22", "Ter 23", "Qua 24", "Qui 25", "Sex 26"];

  return (
    <Page title="Agenda Inteligente" subtitle="Organize atendimentos com agendamentos automatizados.">
      <div className="toolbar">
        <button><Users size={16} /> Todos profissionais</button>
        <button><BriefcaseBusiness size={16} /> Todos serviços</button>
        <button><Filter size={16} /> Mais filtros</button>
      </div>

      <div className="calendar-fixed card">
        {days.map((day) => (
          <div className="calendar-col" key={day}>
            <h3>{day}</h3>
            {bookings.filter((b) => b.day === day).map((b) => (
              <div className={`booking-card ${b.type}`} key={b.service}>
                <strong>{b.service}</strong>
                <span>{b.status}</span>
                <small>{b.time}</small>
              </div>
            ))}
          </div>
        ))}
      </div>

      <section className="stats-grid three">
        <StatCard title="Ocupação semanal" value="84%" meta="Alta demanda" icon={Clock} />
        <StatCard title="Novos agendamentos" value="+12" meta="Hoje" icon={CalendarPlus} />
        <StatCard title="Sugestões da IA" value="3 otimizações" meta="Disponíveis" icon={Sparkles} />
      </section>
    </Page>
  );
}

function Clientes() {
  return (
    <Page title="Clientes CRM" subtitle="Gerencie relacionamentos e acompanhe métricas inteligentes.">
      <section className="stats-grid four">
        <StatCard title="Clientes ativos" value="1.284" meta="+12% no mês" />
        <StatCard title="Ticket médio" value="R$ 4.250" meta="+8,2%" />
        <StatCard title="Retenção" value="94,2%" meta="Estável" />
        <StatCard title="Em risco" value="42" meta="Ação necessária" danger />
      </section>
      <TableCard title="Lista de clientes" rows={clients} columns={["name","status","phone","spent","last","freq"]} labels={["Cliente","Status","Telefone","Valor gasto","Última visita","Frequência"]} />
    </Page>
  );
}

function MiniBars({ data }) {
  return (
    <div className="mini-bars">
      {data.map((v, i) => <span key={i} style={{ height: `${v * 8}px` }} />)}
    </div>
  );
}

function ProfessionalCard({ p }) {
  return (
    <div className="card professional-card">
      <div className="professional-head">
        <div className={`avatar large ${p.color}`}>{p.initials}</div>
        <div>
          <h2>{p.name} <small>★ {p.rating}</small></h2>
          <p>{p.role}</p>
        </div>
      </div>

      <div className="professional-metrics">
        <div><span>Comissão</span><strong>{p.commission} Ativa</strong></div>
        <div><span>Faturamento</span><strong>{p.revenue}</strong></div>
      </div>

      <div className="professional-bottom">
        <div>
          <span>Produtividade semanal</span>
          <MiniBars data={p.weekly} />
        </div>
        <div>
          <span>Meta individual</span>
          <h3>{p.target}</h3>
          <small>{p.targetPercent}% — {p.missing}</small>
          <div className="progress"><span style={{ width: `${p.targetPercent}%` }} /></div>
        </div>
      </div>

      <a href="#">Ver Dashboard Completo →</a>
    </div>
  );
}

function Profissionais() {
  return (
    <Page
      title="Time de Profissionais"
      subtitle="Gestão de performance e comissões em tempo real."
      actions={<button className="primary-action"><UserPlus size={16} /> Adicionar Profissional</button>}
    >
      <section className="stats-grid four">
        <StatCard title="Faturamento total" value="R$ 48.290" meta="+12,4% este mês" />
        <StatCard title="Produtividade média" value="84%" meta="Equipe acima da média" />
        <StatCard title="Comissões a pagar" value="R$ 14.500" meta="Ciclo: 01–15 Abr" />
        <StatCard title="Meta coletiva" value="R$ 60.000" meta="R$ 11.710 restantes" />
      </section>

      <div className="professional-grid">
        {professionals.map((p) => <ProfessionalCard key={p.name} p={p} />)}
        <div className="hire-card">
          <div><Plus size={26} /></div>
          <h3>Contratar Profissional</h3>
          <p>Expanda seu time e gerencie performance com GerencIA.</p>
        </div>
      </div>

      <div className="info-strip">
        <div className="info-icon">i</div>
        <div>
          <h3>Regras de Comissionamento</h3>
          <p>Você possui <strong>3 profissionais</strong> com regras de bônus por produtividade ativas. O próximo fechamento ocorre em <strong>4 dias</strong>.</p>
        </div>
        <button>Gerenciar regras</button>
      </div>
    </Page>
  );
}

function Servicos() {
  return (
    <Page title="Serviços" subtitle="Gerencie preços, duração, categorias e lucratividade.">
      <TableCard title="Catálogo de serviços" rows={services} columns={["name","category","duration","price","popularity","profit"]} labels={["Serviço","Categoria","Duração","Preço","Popularidade","Lucro empresa"]} />
    </Page>
  );
}

function Financeiro() {
  return (
    <Page
      title="Pulso Financeiro"
      subtitle="Monitore fluxo de caixa, despesas e lucratividade em tempo real."
      actions={<><button className="secondary-action"><Download size={16} /> Exportar Relatório</button><button className="primary-action">📊 Visão ao Vivo</button></>}
    >
      <section className="finance-layout">
        <Card className="finance-main" title="Performance de Receita" subtitle="Comparativo entre Receita e Despesas" actions={<button className="ghost-btn">Últimos 30 dias</button>}>
          <RevenueBarChart height={420} />
        </Card>

        <div className="finance-side">
          <div className="ai-card finance-profit">
            <Wallet size={22} />
            <h2>R$ 54.200</h2>
            <p>Lucro líquido — 72% da meta mensal atingida.</p>
            <div className="progress light"><span style={{ width: "72%" }} /></div>
          </div>

          <Card title="Despesas por categoria" subtitle="Este mês">
            <div className="expense-list">
              <div><span>Infra & IA</span><strong>R$ 12,4k</strong></div>
              <div><span>Comissões</span><strong>R$ 28,3k</strong></div>
              <div><span>Produtos</span><strong>R$ 3,8k</strong></div>
            </div>
          </Card>
        </div>

        <Card title="Insights GerencIA" subtitle="Análise automática da IA">
          <p className="muted">A IA identificou aumento de 14% em despesas com produtos. Revise fornecedores para economizar até R$ 1,2k/mês.</p>
        </Card>

        <Card title="Transações recentes" subtitle="Últimos lançamentos">
          <div className="small-list">
            <div>Corte Bruno R. — R$ 50,00 <span>Pago</span></div>
            <div>Barba Lucas M. — R$ 35,00 <span>Pago</span></div>
            <div>Combo André S. — R$ 80,00 <span>Processando</span></div>
          </div>
        </Card>
      </section>
    </Page>
  );
}

function Comissoes() {
  return (
    <Page
      title="Sistema de Comissões"
      subtitle="Cálculo automático de comissões em tempo real."
      actions={<button className="primary-action"><Plus size={16} /> Nova Regra</button>}
    >
      <section className="stats-grid four">
        <StatCard title="Total comissões" value="R$ 14.500" meta="Este ciclo" />
        <StatCard title="Receita empresa" value="R$ 33.750" meta="60,4% do faturamento" />
        <StatCard title="Próximo fechamento" value="4 dias" meta="01–15 Abr" />
        <StatCard title="Profissionais ativos" value="3" meta="Com comissão ativa" />
      </section>

      <section className="commission-grid">
        <Card title="Modelo de Comissão" subtitle="Configure porcentagem, aluguel ou híbrido">
          <div className="tabs">
            <button className="active">Porcentagem</button>
            <button>Aluguel</button>
            <button>Híbrido</button>
          </div>

          <div className="commission-example">
            <p>Exemplo: Corte — R$ 50,00</p>
            <div>
              <div><span>Profissional (60%)</span><strong>R$ 30,00</strong></div>
              <div><span>Empresa (40%)</span><strong>R$ 20,00</strong></div>
            </div>
          </div>

          <div className="commission-rules">
            {professionals.map((p) => (
              <div key={p.name}>
                <div className={`avatar small ${p.color}`}>{p.initials}</div>
                <div><strong>{p.name}</strong><span>{p.role}</span></div>
                <b>{p.commission}</b>
                <em>{100 - Number(p.commission.replace("%",""))}%</em>
                <button>Editar</button>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Ranking de Fechamento" subtitle="Valores calculados automaticamente">
          <div className="commission-ranking">
            <div className="rank-head"><span>Profissional</span><span>Faturamento</span><span>Comissão</span><span>Lucro empresa</span></div>
            {professionals.map((p) => (
              <div key={p.name}>
                <div><div className={`avatar small ${p.color}`}>{p.initials}</div><strong>{p.name}</strong></div>
                <span>{p.revenueShort}</span>
                <em>{p.commissionValue}</em>
                <b>{p.companyProfit}</b>
              </div>
            ))}
          </div>
        </Card>

        <Card className="wide-chart" title="Performance de Comissão" subtitle="Evolução do ciclo atual">
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="commissionGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.25}/>
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#eaf1fb" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis hide />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="lucro" stroke="#3B82F6" fill="url(#commissionGradient)" strokeWidth={3} />
            </AreaChart>
          </ResponsiveContainer>
        </Card>
      </section>
    </Page>
  );
}

function MarketingIA() {
  return (
    <Page title="Criação de Conteúdo IA" subtitle="Gere campanhas, legendas e mensagens inteligentes para vender mais.">
      <section className="marketing-grid">
        <Card title="Assistente IA" subtitle="Online">
          <div className="chat">
            <p>Olá! Posso criar posts, legendas, campanhas de WhatsApp e ideias para preencher horários vagos.</p>
            <div className="chat-bubble">Crie uma legenda para promoção de corte masculino na terça.</div>
            <div className="input-action">
              <input placeholder="Digite sua ideia..." />
              <button><Send size={16} /></button>
            </div>
          </div>
        </Card>

        <section className="marketing-stats">
          <StatCard title="Taxa de engajamento" value="4,2%" meta="+12,8%" />
          <StatCard title="Mensagens enviadas" value="12.4k" meta="Estável" />
          <StatCard title="Taxa de conversão" value="0,85%" meta="+4,2%" />
        </section>

        <Card title="Automações Ativas" subtitle="Campanhas em execução">
          <div className="automation"><MessageCircle /> WhatsApp Blast <span>Rodando</span></div>
          <div className="automation"><Instagram /> Instagram Post <span>Agendado</span></div>
        </Card>

        <Card title="Mapa de Engajamento" subtitle="Performance semanal">
          <RevenueBarChart height={220} />
        </Card>

        <Card className="content-card" title="Calendário Visual de Conteúdo" subtitle="Organização de posts e campanhas">
          <div className="content-calendar">
            <div className="today"><small>Hoje</small><strong>Lifestyle Promo Real</strong></div>
            <div className="empty"><Plus /></div>
            <div><small>Qui 24</small><strong>Dicas de Estilo</strong></div>
            <div className="purple-card"><small>Sex 25</small><strong>Promoção Fim de Semana</strong></div>
          </div>
        </Card>
      </section>
    </Page>
  );
}

function Relatorios() {
  return (
    <Page
      title="Relatórios & Analytics"
      subtitle="Insights avançados e performance em tempo real de todas as unidades."
      actions={<><button className="secondary-action"><Download size={16} /> Exportar PDF</button><button className="primary-action"><FileSpreadsheet size={16} /> Planilha Excel</button></>}
    >
      <div className="filters-row">
        <button>Unidade: <strong>Todas as Unidades</strong> <ChevronDown size={14} /></button>
        <button>Período: <strong>Últimos 30 dias</strong> <ChevronDown size={14} /></button>
        <button className="active">Relatório Ativo</button>
        <button>Comparativo</button>
      </div>

      <section className="stats-grid four">
        <StatCard title="Faturamento total" value="R$ 142.850" meta="+12,5%" />
        <StatCard title="Retenção de clientes" value="78,4%" meta="+8,2%" />
        <StatCard title="Taxa de ocupação" value="92,1%" meta="-2,1%" danger />
        <StatCard title="NPS Score" value="9,2/10" meta="+0,4" />
      </section>

      <section className="reports-grid">
        <Card className="report-main" title="Performance de Faturamento" subtitle="Comparativo mensal entre unidades principais">
          <ResponsiveContainer width="100%" height={390}>
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="reportGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.28}/>
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#eaf1fb" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis hide />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="receita" stroke="#2563eb" fill="url(#reportGradient)" strokeWidth={3} />
              <Line type="monotone" dataKey="lucro" stroke="#93C5FD" strokeWidth={3} strokeDasharray="6 4" />
            </AreaChart>
          </ResponsiveContainer>
        </Card>

        <Card title="Serviços Mais Vendidos" subtitle="Top do mês">
          <div className="service-ranking">
            {[
              ["Corte Masculino", "R$ 42.000", 95],
              ["Corte + Barba", "R$ 28.500", 70],
              ["Barba Completa", "R$ 19.200", 55],
              ["Sobrancelha", "R$ 12.400", 35]
            ].map(([name, value, percent]) => (
              <div key={name}>
                <div><strong>{name}</strong><span>{value}</span></div>
                <div className="progress"><span style={{ width: `${percent}%` }} /></div>
              </div>
            ))}
          </div>
          <div className="insight-box">💡 <strong>Insight da IA:</strong><br/>Corte Masculino cresceu 15% este mês. Recomendamos criar pacote promocional para o próximo trimestre.</div>
        </Card>

        <Card title="Horários de Pico" subtitle="Volume de atendimento">
          <HeatMap />
        </Card>

        <Card title="Retenção por Unidade" subtitle="Análise detalhada de fidelidade">
          <div className="retention-table">
            {[
              ["São Paulo - Itaim", "124", "98", "79%"],
              ["Rio de Janeiro - Barra", "86", "68", "79%"],
              ["Curitiba - Batel", "54", "46", "85%"]
            ].map(([unit, news, kept, rate]) => (
              <div key={unit}><strong>{unit}</strong><span>{news}</span><span>{kept}</span><b>{rate}</b><div className="progress"><span style={{ width: rate }} /></div></div>
            ))}
          </div>
        </Card>
      </section>
    </Page>
  );
}

function HeatMap() {
  const rows = ["08h", "10h", "12h", "14h", "16h", "18h"];
  const days = ["SEG", "TER", "QUA", "QUI", "SEX", "SAB", "DOM"];
  return (
    <div className="heatmap">
      <div></div>
      {days.map(d => <b key={d}>{d}</b>)}
      {rows.map((r, ri) => (
        <React.Fragment key={r}>
          <span>{r}</span>
          {days.map((d, di) => <i key={`${r}-${d}`} style={{ opacity: 0.25 + ((ri + di) % 5) * 0.15 }} />)}
        </React.Fragment>
      ))}
      <div className="heatmap-scale"><span>Baixo</span><div></div><span>Alto</span></div>
    </div>
  );
}

function Configuracoes() {
  return (
    <Page title="Configurações do Sistema" subtitle="Gerencie perfil, plano, equipe, integrações e segurança.">
      <section className="settings-grid">
        <Card title="Perfil da empresa" subtitle="Informações públicas e privadas">
          <label>Nome da empresa<input defaultValue="Barbearia Premium" /></label>
          <label>E-mail corporativo<input defaultValue="contato@gerencia.ai" /></label>
          <label>Descrição<textarea defaultValue="Barbearia moderna focada em experiência premium." /></label>
          <button>Salvar alterações</button>
        </Card>

        <Card title="Plano atual" subtitle="Business">
          <div className="plan-card">Business<br/><strong>R$ 149,90/mês</strong></div>
          <button>Alterar plano</button>
        </Card>

        <Card title="Integrações" subtitle="Canais conectados">
          <div className="automation"><MessageCircle /> WhatsApp <span>Conectado</span></div>
          <div className="automation"><CreditCard /> Pagamentos <span>Pendente</span></div>
        </Card>

        <Card title="Marca do sistema" subtitle="Assinatura oficial">
          <div className="made-by">Desenvolvido por <strong>LealSoft Labs</strong></div>
        </Card>
      </section>
    </Page>
  );
}

function TableCard({ title, rows, columns, labels }) {
  return (
    <div className="card table-card">
      <div className="card-head"><h2>{title}</h2><button>Exportar</button></div>
      <div className="table">
        <div className="tr head">{labels.map((l) => <span key={l}>{l}</span>)}</div>
        {rows.map((r, idx) => <div className="tr" key={idx}>{columns.map((c) => <span key={c}>{r[c]}</span>)}</div>)}
      </div>
    </div>
  );
}

function Root() {
  return (
    <BrowserRouter>
      <Routes>

        {/* AUTH */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* APP */}
        <Route
          path="*"
          element={
            <AppShell>
              <Routes>
                <Route path="/" element={<Navigate to="/dashboard" />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/agenda" element={<Agenda />} />
                <Route path="/clientes" element={<Clientes />} />
                <Route path="/profissionais" element={<Profissionais />} />
                <Route path="/servicos" element={<Servicos />} />
                <Route path="/financeiro" element={<Financeiro />} />
                <Route path="/comissoes" element={<Comissoes />} />
                <Route path="/marketing-ia" element={<MarketingIA />} />
                <Route path="/relatorios" element={<Relatorios />} />
                <Route path="/configuracoes" element={<Configuracoes />} />
              </Routes>
            </AppShell>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
