'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { ReactNode } from 'react';

interface SectionCardProps {
  title: string;
  description?: string;
  children?: ReactNode;
  href?: string;
  delay?: number;
  icon?: ReactNode;
}

export function SectionCard({
  title,
  description,
  children,
  href,
  delay = 0,
  icon
}: SectionCardProps) {
  const CardComponent = motion(Card);

  const cardContent = (
    <CardComponent
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="h-full cursor-pointer hover:shadow-lg transition-shadow"
    >
      <CardHeader>
        {icon && (
          <div className="mb-2 text-primary">
            {icon}
          </div>
        )}
        <CardTitle className="text-2xl">{title}</CardTitle>
        {description && <CardDescription className="text-base">{description}</CardDescription>}
      </CardHeader>
      {children && <CardContent>{children}</CardContent>}
    </CardComponent>
  );

  if (href) {
    return (
      <a href={href} className="block h-full">
        {cardContent}
      </a>
    );
  }

  return cardContent;
}
