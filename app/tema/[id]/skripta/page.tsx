import { notFound } from 'next/navigation';
import { getTema, TEMA_IDS } from '@/lib/pitanja';
import SkriptaView from '@/components/SkriptaView';

interface Props { params: Promise<{ id: string }> }

export default async function SkriptaPage({ params }: Props) {
  const { id } = await params;
  const tema = getTema(id);
  if (!tema) notFound();
  return <SkriptaView tema={tema} />;
}

export async function generateStaticParams() {
  return TEMA_IDS.map(id => ({ id }));
}
