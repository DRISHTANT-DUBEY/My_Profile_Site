import Link from 'next/link';
import Container from '../components/container';

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Hey, I’m Drishtant Dubey
        </h1>
      </div>
    </Container>
  );
}
