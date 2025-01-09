import UserCard from "@/components/UserCard";

const admin = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      <div className="w-full lg:w-2/3">
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="admin" />
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
        </div>
      </div>
      <div className="w-full lg:w-1/3"></div>
    </div>
  );
};

export default admin;
