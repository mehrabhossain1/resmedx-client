import NoticeTable from "@/components/Dashboard/NoticeTable";
import NoticeUpload from "@/components/NoticeUpload/NoticeUpload";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <div className="h-screen">
      <NoticeUpload />

      <NoticeTable />
    </div>
  );
};

export default DashboardPage;
