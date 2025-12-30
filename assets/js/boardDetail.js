
const getBoardDetail = async () =>{
    //board.html에서 전송한 특정 게시글의 글번호 가져오기
    const params = new URLSearchParams(location.search); // => 쿼리스트링을 객체형태로 변환
    const title = document.getElementById("title");
    const writer = document.getElementById("writer");
    const content = document.getElementById("content");
    const downloadLink = document.getElementById("download-link");
    const nullMsg = document.getElementById("null-msg");

    let idx = params.get("idx");
    // let api = `http://localhost:8081/api/board/${idx}`; // 테스트용
    let api = `/api/board/${idx}`;
    try {
        let res = await axios.get(api);
        let board = res.data;
        title.innerText = board.b_title;
        writer.innerText = board.b_writer;
        content.innerText = board.b_content;
        
        // 첨부파일이 없을 때
        if(!board.b_file_path || board.b_file_path == ""){
            console.log(b_file_path)
            downloadLink.style.display = 'none';
            nullMsg.style.display = 'block';
        }else{
            downloadLink.href=`/api/board/${idx}/download`;
            // downloadLink.href=`http://localhost:8081/api/board/${idx}/download`; // 테스트용
        }
    } catch (error) {
        console.log(error);
    }
    if(!idx){
        console.log("게시글 글번호가 없습니다.")
        return;
    }
}

document.addEventListener('DOMContentLoaded',()=>{
    getBoardDetail();
})