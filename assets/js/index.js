const boardList = document.getElementById('board-list');

const getList = async () => {
    try {
        // const res = await axios.get('http://localhost:8081/list')
        const res = await axios.get('/api/board/list')
        const boards = res.data;
        boards.forEach(board=>{
            boardList.innerHTML += `
            <tr>
                <td>${board.b_idx}</td>
                <td><a href="">${board.b_title}</a></td>
                <td>${board.b_writer}</td>
                <td>${board.b_datetime}</td>
                <td>${board.b_count}</td>
            </tr>
            `
        })

    } catch (error) {
            console.log(error);
    }
}

document.addEventListener('DOMContentLoaded',()=>{
    getList();
})