import { notFound } from 'next/navigation';
import { getTema, TEMA_IDS } from '@/lib/pitanja';
import TestView from '@/components/TestView';

interface Props { params: Promise<{ id: string }> }

export default async function TestPage({ params }: Props) {
  const { id } = await params;
  const tema = getTema(id);
  if (!tema) notFound();
  return <TestView tema={tema} />;
}

export async function generateStaticParams() {
  return TEMA_IDS.map(id => ({ id }));
}
