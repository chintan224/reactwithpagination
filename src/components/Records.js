

const Records = ({data}) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">User ID</th>
                    <th scope="col">Id</th>
                    <th scope="col">Title</th>
                    <th scope="col">Body</th>
                </tr>
            </thead>
            <tbody>
                {data.map(item => {
                    <tr>
                        <td>{item.userId}</td>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.body}</td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}

export default Records;