import Home_comp1 from '@/components/home _comp1';
import Home_comp2 from '@/components/home _comp2';
import Home_comp3 from '@/components/home _comp3';
import Home_comp4 from '@/components/home_comp4';
import Home_comp5 from '@/components/home_comp5';
import Container from '../components/container';
// import Link from 'next/link';

export default function Home() {
  return (
    <Container>
      <Home_comp1 />
      <Home_comp2 />
      <Home_comp3 />
      <Home_comp4 />
      <Home_comp5 />
    </Container>
  );
}
