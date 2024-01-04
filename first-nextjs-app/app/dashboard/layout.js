
function DashboardLayout(
    {children,
    dailyStatus,
notification,users
}
    ) {
    return (
        <>
      {children}
      <div className="flex gap-5 m-5">
      <div className="flex flex-col gap-5">
   <div className="">{dailyStatus}</div>
   <div>{notification}</div>
      </div>
<div>{users}</div>
      </div>
      </>
    )
  }
  
  export default DashboardLayout;
