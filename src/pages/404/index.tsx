import { Link } from 'react-router-dom';

const Page404 = () => {
  return (
    <div className="grid gap-4 md:flex md:min-h-[60vh] md:items-center">
      <div className="text-center md:text-start">
        <h1 className="text-3xl">Page not Found</h1>

        <div className="grid gap-2">
          <p>It&apos;s Okay!</p>
          <div>
            <Link to="/">Let&apos;s Head Back</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page404;
