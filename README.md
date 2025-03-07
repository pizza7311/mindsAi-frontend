## Minds AI 프론트엔드 과제
Next.js를 이용한 TodoList 구현  
**참고:해당 프로젝트는 저의 css 역량이 부족하여 `tailwind` 를 사용하여 프론트엔드 디자인을 적용하였습니다. CSS-in-js는 학습이 필요할것 같습니다.**

### 기술 스택
* Next.js v15

### 실행 방법
해당 리포지토리를 클론 한 후 `npm install` 실행 후 `npm start dev` 명령어 실행

### 기능 설명
![image](https://github.com/user-attachments/assets/c15980c7-6d40-483d-9bf7-2e911d3b9fd5)
해당 TodoList는 페이지 로드시 localStorage에 저장된 todo가 없을경우 https://jsonplaceholder.typicode.com/todos 에서 데이터를 받아와 20개의 todo를 저장합니다.  
이후 localStorage에 todoList를 저장하며 추가,완료 처리,삭제를 할때마다 localStorage에 저장됩니다.
