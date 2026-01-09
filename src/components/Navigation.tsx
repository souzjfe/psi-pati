'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  { label: 'Início', href: '/' },
  { label: 'Sobre Mim', href: '/sobre-mim' },
  { label: 'Minha Abordagem', href: '/minha-abordagem' },
  { label: 'Experiências', href: '/experiencias' },
  {
    label: 'Informações',
    href: '/informacoes',
    children: [
      { label: 'O que é', href: '/informacoes#o-que-e' },
      { label: 'Duração da Sessão', href: '/informacoes#duracao-sessao' },
      { label: 'Duração do Processo', href: '/informacoes#duracao-processo' },
      { label: 'Valor', href: '/informacoes#valor' },
      { label: 'Modalidades', href: '/informacoes#modalidades' },
      { label: 'Direitos do Cliente', href: '/informacoes#direitos-cliente' },
    ]
  },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <motion.a
            href="/"
            className="text-xl font-semibold text-foreground"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Patrícia Christan de Souza
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <a
                  href={item.href}
                  className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                >
                  {item.label}
                </a>
                {item.children && (
                  <div className="absolute left-0 top-full pt-2 hidden group-hover:block">
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-card border rounded-lg shadow-lg p-2 min-w-[200px]"
                    >
                      {item.children.map((child) => (
                        <a
                          key={child.href}
                          href={child.href}
                          className="block px-3 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-accent rounded-md transition-colors"
                        >
                          {child.label}
                        </a>
                      ))}
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  <div key={item.href}>
                    <a
                      href={item.href}
                      className="block px-3 py-2 text-base font-medium text-foreground/80 hover:text-foreground hover:bg-accent rounded-md transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                    {item.children && (
                      <div className="ml-4 mt-1 space-y-1">
                        {item.children.map((child) => (
                          <a
                            key={child.href}
                            href={child.href}
                            className="block px-3 py-2 text-sm text-foreground/60 hover:text-foreground hover:bg-accent rounded-md transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
