import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';

export const navItems = [
  { key: 'overview', title: 'Visão Geral', href: paths.dashboard.overview, icon: 'chart-pie' },
  { key: 'search', title: 'Busca de Especialistas', href: paths.dashboard.search, icon: 'users' },
  { key: 'integrations', title: 'Integrações', href: paths.dashboard.integrations, icon: 'plugs-connected' },
  { key: 'settings', title: 'Configurações', href: paths.dashboard.settings, icon: 'gear-six' },
  { key: 'account', title: 'Conta', href: paths.dashboard.account, icon: 'user' },
  { key: 'error', title: 'Erro', href: paths.errors.notFound, icon: 'x-square' },
] satisfies NavItemConfig[];
