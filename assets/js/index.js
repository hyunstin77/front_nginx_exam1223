const boardList = document.getElementById('board-list');

const getList = async () => {
    try {
        // const res = await axios.get('http://localhost:8081/api/board/list') // test
        const res = await axios.get('/api/board/list')
        const boards = res.data;
        boardList.innerHTML += `
        <tr >
                <th>번호</th>
                <th>글제목</th>
                <th>작성자</th>
                <th>작성일자</th>
                <th>조회수</th>
        </tr>
        `
        boards.forEach(board=>{
            boardList.innerHTML += `
            <tr>
                <td>${board.b_idx}</td>
                <td><a href="boardDetail.html?idx=${board.b_idx}">${board.b_title}</a></td>
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