const Admin = ({name, role, address}) =>{
    return(
        <div className="admin-card">
            <h2>{name}</h2>
            <h3>{role}</h3>
            <h3>{address}</h3>
            
        </div>
    )
}

export default Admin