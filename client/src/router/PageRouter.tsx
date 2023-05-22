import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Home from "../pages/home/Home";
import DefectList from "../components/DefectList/DefectList";
import CreateIssue from "../components/CreateIssue/CreateIssue";



const PageRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="/defects" element={<DefectList />} />
        <Route path="/create" element={<CreateIssue />}/>
          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
  )
}

export default PageRouter