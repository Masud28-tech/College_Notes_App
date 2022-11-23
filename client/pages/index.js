import { useContext } from "react";

import { UserContext } from "../context/UserContext";
import StudentLogin from "./auth/studentLogin";
import AdminPage from "./adminPage";
import StudentPage from "./studentPage";
import TeacherPage from "./teacherPage";

const Home = () => {

  const { currentUser } = useContext(UserContext);

  if (!currentUser) {
    return <StudentLogin />
  }
  else if (currentUser.userType === "admin")
    return <AdminPage user={currentUser} />

  else if (currentUser.userType === "teacher")
    return <TeacherPage user={currentUser} />

  return <StudentPage user={currentUser} />

}

export default Home;
