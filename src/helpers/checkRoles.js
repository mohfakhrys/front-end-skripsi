export default (allowedRole) => {
    const roles = localStorage.getItem('roles') || []

    return roles.includes(allowedRole)
}