import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';

export function Page({
  title,
  description,
  eyebrow,
  heading,
  intro,
  actions,
  children,
}: {
  title: string;
  description: string;
  eyebrow?: string;
  heading: ReactNode;
  intro?: ReactNode;
  actions?: ReactNode;
  children: ReactNode;
}) {
  return (
    <Layout title={title} description={description}>
      <header className="page-hero">
        <div className="container">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1>{heading}</h1>
          {intro && <p>{intro}</p>}
          {actions && <div className="btn-row">{actions}</div>}
        </div>
      </header>
      <main className="page-body">
        <div className="container">{children}</div>
      </main>
    </Layout>
  );
}

export function Card({
  title,
  tone,
  children,
}: {
  title: ReactNode;
  tone?: 'blue' | 'teal' | 'amber' | 'slate';
  children: ReactNode;
}) {
  return (
    <div className="card-x">
      <div className={clsx('card-x__head', tone)}>{title}</div>
      <div className="card-x__body">{children}</div>
    </div>
  );
}
