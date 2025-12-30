// 작성버튼을 클릭했을 때,
// 작성된 글 내용을 하나의 객체로 묶어서 서버에 전송하는 기능 구현
const submitBtn = document.getElementById('submit-btn');
const boardInsert = async (e) =>{
    e.preventDefault();
    
    // 1. 작성된 글 내용 가져온 후 하나의 객체로 묶기
    // FormData의 기본 ContentType : multipart/form-data (파일업로드까지가능)
    const boardForm = document.boardForm;
    const boardData = new FormData(boardForm);
    // 2. 서버에 데이터 전송하기
    try{
        console.log("api요청들어갔냐?")
        // let res = await axios.post('http://localhost:8081/api/board/register',boardData) // 테스트
        let res = await axios.post('/api/board/register',boardData)

        // 글 작성완료 후 게시판 페이지로 이동
        location.href = "board.html";
        
    }catch{
        console.log(err)
    }
    // 3. 성공적으로 작성 되었다면, 게시판 페이지로 이동하기
}

submitBtn.addEventListener('click',boardInsert)