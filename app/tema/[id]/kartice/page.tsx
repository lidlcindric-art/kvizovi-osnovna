import { notFound } from 'next/navigation';
import { getTema, TEMA_IDS } from '@/lib/pitanja';
import KarticeView from '@/components/KarticeView';

interface Props { params: Promise<{ id: string }> }

export default async function KarticePage({ params }: Props) {
  const { id } = await params;
  const tema = getTema(id);
  if (!tema) notFound();
  return <KarticeView tema={tema} />;
}

export async function generateStaticParams() {
  return TEMA_IDS.map(id => ({ id }));
}
