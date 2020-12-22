import Nav from "@/components/nav";
import Header from '@/components/header';
import Card from '@/components/card';
import Sidebar from '@/components/sidebar';

export default function IndexPage() {
  return (
    <div className="max-w-screen-xl w-full mx-auto">
      <Header/>
      <div className="flex">
        <Sidebar/>
        <div className="flex-1 space-y-8">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
        
      </div>
    </div>
  );
}
