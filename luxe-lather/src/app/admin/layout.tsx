
export const metadata = {
    title: "Admin-LuxLather"
}

const AdminLayout = ({children}:{children :React.ReactNode}) => {
    return(
        <div className="pt-8">
            <div>Nav</div>
            {children}
        </div>
    )
}

export default AdminLayout;