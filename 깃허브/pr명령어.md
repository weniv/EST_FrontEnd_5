```
############################
 
# 팀장의 역할
# GitHub repo 1개 생성합니다.

test_pr_repo
 
 
#############################
 
# git clone 해서 로컬에 저장소를 가져옵니다.

test_pr_repo > git clone https://github.com/paullabkorea/test_pr_repo.git .

#############################
 
GitHub Wiki > create the first page 클릭
 
# 프롬프트
'''
나는 React로 감귤마켓이라는 마켓 프로젝트를 하고 있어. 팀원은 4명이고, 주니어 개발자도 있어서 상세한 가이드가 필요해. 
 
GitHub Repository에 Wiki를 작성할 수 있도록 도와줘. 
 
1. 코드 컨벤션 - google style guide를 기반해줘
    - Django 백엔드 코드 컨벤션
    - React 프론트엔드 코드 컨벤션
    - API 네이밍 컨벤션
    - 파일/폴더 구조 컨벤션
2. 커밋 컨벤션 
    - 브랜치 전략 (Git Flow 또는 GitHub Flow)
    - 커밋 메시지 형식 - Angular/Conventional Commits를 기반해줘
    - 자주 사용되는 커밋 타입 예시
    - 이슈 연결 방법
3. PR 템플릿과 사용법
    - 기능 개발용 PR 템플릿
    - 버그 수정용 PR 템플릿
    - PR 리뷰 가이드라인
    - PR 크기 제한 가이드
 
필수적인 것이 끝났으면 아래와 같은 것들을 추가할 수 있습니다. 보통은 3번까지만 진행하고 프로젝트를 시작합니다.
 
4. 프로젝트 셋업 가이드
   - 로컬 개발 환경 설정
   - 필요한 환경 변수
   - 테스트 데이터 설정
 
5. 협업 프로세스
   - 일일 스크럼 진행 방식
   - 코드 리뷰 프로세스
   - 배포 프로세스
 
6. 트러블슈팅 가이드
   - 자주 발생하는 이슈와 해결방법
   - 디버깅 팁
 
이렇게 받은 페이지는 아래와 같은 형태로 작성해주시면 됩니다. page아래 있는 것은 heading으로 작성하시면 됩니다.
 
📁 Home - page
    - 프로젝트 소개
    - 목차 (다른 페이지로 이동하는 링크)
    - 퀵 스타트 가이드
 
📁 Conventions - page
    - Code-Conventions
    - Commit-Conventions
    - Branch-Strategy
 
📁 Templates - page
    - PR-Templates
    - Issue-Templates
 
📁 Setup - page
    - Environment-Setup
    - Development-Guide
'''
 
#############################
 
GitHub BE-Team repo에서 Project 클릭 > New Project > ProjectName Project 생성
Project settings(오른쪽 상단 ...)에서 Manage access 클릭 > private 변경 > Public으로 변경
 
#############################

# 우리가 dev라는 브랜치를 만들고, dev 브랜치에 코드가 합쳐지게 할겁니다. main으로 합쳐지는 것이 아니라요!
# GitHub에서 dev라는 브렌치를 만들고, 기본 브랜치를 dev 브렌치로 변경하겠습니다.

전략은 GitHub Flow + develop branch 전략을 사용합니다.
전략상 필요한 dev branch를 만들어줍니다.
 
git branch
git branch dev
git push --set-upstream origin dev
 
settings > General > Default branch > dev 선택
// 이제부터 merge는 develop branch로 합니다.

#############################
 
# 팀장 + 팀원
# 1cicle 시작(다만 dev 브랜치는 단 1번만 만들면 됩니다.)
 
#############################
 
GitHub BE-Team repo에서 Issues 클릭 > New Issue > IssueName Issue 생성
* Add a title: 기능 이름 생성
* Add a description: 기능 내용 생성
* Assignees: 팀원 선택
* Labels: bug, duplicate, enhancement, good first issue, help wanted, invalid, question, wontfix
* Projects: Project 선택
 
submit new issue 클릭
 
Project에서 Todo, In Progress, Done 생성
Development에서 Create a branch 클릭 > BranchName 생성 > Create branch 클릭
 
#############################
 
복사하라고 뜹니다. 복사해주세요. 아직 커멘드 라인에 붙여넣진 않겠습니다.
git fetch origin
git checkout 1-one
 
#############################
 
git branch # 현재 브랜치 확인
git fetch origin # 원격 저장소의 브랜치 정보를 가져옴
git checkout 1-one # 브랜치 생성 및 이동
# 작업 진행
git add . # 변경사항을 스테이징
git commit -m "feat: test one" # 커밋
git push # 원격 저장소에 푸시
 
#############################
 
GitHub BE-Team repo에서 Compare&Pull requests 클릭 또는 Pull requests 클릭 > New pull request 클릭
 
add a title: feat: test one
add a description: feat: test one(내용은 좀 더 상세하게 작성해주세요. table과 같은 것을 넣어주셔도 좋습니다.)
 
Create pull request 클릭
 
#############################
 
Merge pull request 클릭
Confirm merge 클릭
Delete branch 클릭
 
#############################
 
// local에서 해야 하는 것
git checkout dev
git pull
git branch -d 1-one
 
# VSC에 Source control에 가서 view git graph(git log)를 클릭
# 원하는 브랜치에 네모 박스에서 마우스 오른쪽 클릭하고 delete branch 클릭해서
# GUI로도 브랜치 삭제가 가능합니다.
 
#############################
 
# 1cicle 끝, 이렇게 5번 반복합니다.
 
#############################
```