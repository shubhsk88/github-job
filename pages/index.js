import Nav from '../components/nav'

const here = () => {
  
}
export default function IndexPage() {
  return (
    <div>
      <Nav />
      <div className="py-20">
        <h1 className="text-5xl text-center text-gray-700 dark:text-gray-100">
          Next.js + Tailwind CSS 2.0
        </h1>
        <button className="text-2xl px-4 colo py-2 hover:bg-purple-500 ">
          Shubham Singh
        </button>
      </div>
    </div> 
  )
}
