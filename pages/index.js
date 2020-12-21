import Nav from "@/components/nav";
import Header from '@/components/header';
import Card from '@/components/card';
import Sidebar from '@/components/sidebar';

export default function IndexPage() {
  return (
    <>
      <Header></Header>
      <div>
        <Sidebar></Sidebar>
        <div>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
    </>
  );
}
