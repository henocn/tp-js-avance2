import Navbar from '../components/Navbar'
import '../components/styles/contact.css'
import StudentFormList from '../components/StudentFormList';

const Students = () => {
  return (
    <>
      <Navbar />
      <div className="main-content">
        <StudentFormList />
      </div>
    </>
  );
}

export default Students 