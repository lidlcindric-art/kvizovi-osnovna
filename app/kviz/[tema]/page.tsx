import { notFound } from 'next/navigation';
import { getTema } from '@/lib/pitanja';
import Quiz from '@/components/Quiz';

interface Props {
  params: Promise<{ tema: string }>;
}

export default async function KvizPage({ params }: Props) {
  const { tema: temaId } = await params;
  const tema = getTema(temaId);
  if (!tema) notFound();

  return <Quiz tema={tema} />;
}

export async function generateStaticParams() {
  return [
    { tema: 'rimsko-drustvo' },
    { tema: 'priroda-tlo' },
    { tema: 'pridjevi' },
  ];
}
