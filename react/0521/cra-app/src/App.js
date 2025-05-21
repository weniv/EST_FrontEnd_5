import { BrowserRouter, Routes, Route, Link, useLocation, Outlet } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Link to="/"> home </Link>
      <Link to="/one"> one </Link>
      <Link to="/two"> two </Link>
      <Link to="/three"> three </Link>
      {/* 라우트를 감싸줍니다. */}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/one" element={<One name='licat' />} />
        <Route path="/two" element={<Two />} />
        <Route path="/three" element={<HojunCont />}>
          {/* <Route index element={<HojunIndex />} /> */}
          <Route path="hojunone" element={<HojunOne />} />
          <Route path="hojuntwo" element={<HojunTwo />} />
        </Route>
        <Route path="/blog/:id" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

function Index() {
  return <h1>hello world0</h1>
}

function One({ name }) {
  return <h1>{name} world1</h1>
}

function Two() {
  return <h1>hello world2</h1>
}

function Three() {
  return <h1>hello world3</h1>
}

function Blog() {
  const location = useLocation();
  console.log(location)
  return <h1>hello Blog</h1>
}

function HojunCont() {
  return (
    <>
      <h1>hello Hojun container</h1>
      <div>
        <Outlet />
      </div>
    </>
  )
}


function HojunIndex() {
  return <h2>hello Hojun index</h2>
}

function HojunOne() {
  return <h2>hello Hojun 1</h2>
}

function HojunTwo() {
  return <h2>hello Hojun 2</h2>
}

export default App;