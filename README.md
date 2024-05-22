# 프로젝트 소개
💰Buget Tracker with Next.js💰

- 개인별 수입 또는 지출내역을 기록하고 자산의 흐름을 파악할 수 있는 웹 어플리케이션 입니다.
- [live demo](https://next-buget-tracker.vercel.app/)

# 👨‍🔧 Stack
- Client: Next(app router), Typescript, Tanstack Query, zod, react-hook-form, Tailwind CSS
- Database: Prisma, Postgre SQL(with Vercel)
- Auth: Clerk(nextjs)
- UI: Shadcn UI, Recharts, emoji-mart, toast(sooner), count animation
- Deploy: Vercel

# 🧑‍💻 Database Schema
![스키마구성](https://develsopher-nextjs.s3.ap-northeast-2.amazonaws.com/budget-tracker-data-schema.png)
# API Setup
|Operation|Implementation|Validation|Client|
|---|---|---|---|
|Read|Http API(API routes)|Zod|React Query and fetch|
|Create|Server action|Zod|React Query|
|Update|Server action|Zod|React Query|
|Delete|Server action|Zod|React Query|

# 기능 소개
- 로그인 및 유저관리는 [Clerk](https://clerk.com/)솔루션을 사용하고 있습니다.
- 유저가 로그인(회원가입)하게 되면 사용할 `Currency`를 설정해야 합니다.
  - 화폐설정은 원, 달러, 엔화가 가능합니다.
  - 유저가 화폐설정이 되어있지 않으면 자동으로 `wizard`페이지로 리다이렉트시켜 유저의 기본세팅을 유도합니다.
  ![image](https://github.com/Develsopher/next-buget-tracker/assets/78126381/fd7a919f-3836-43c6-bcaa-7d176ce3e6f6)
## 수입 및 지출 등록 프로세스
![image](https://github.com/Develsopher/next-buget-tracker/assets/78126381/4d424f8a-2c27-42db-9ac3-e258b219d276)
- Next의 서버액션과 React Query의 Mutation기능을 활용하였습니다.
- validation은 zod를 통해서 체크하고 있으며 react-hook-form을 데이터 생성 및 업데이트시에 사용하였습니다.
- 등록할 카테고리가 없다면 등록모달에서 바로 카테고리 모달로 이동한 후 생성이 가능합니다.

## 수입 및 지출 오버뷰
- 지출, 수입, 잔액 -> `transactions`테이블에서 타입별로 group하여 데이터들을 가져왔습니다.
- 카테고리별 수입 및 지출 -> `transactions`테이블에서 타입, 카테고리명, 카테고리 아이콘을 group하여 데이터들을 가져왔습니다.
- React Query를 활용하여 서버로부터 데이터들을 페칭하였고 유저 경험 상승을 위해 페칭시 **스켈레톤 UI** 및 **Number Count Up**라이브러리를 활용하였습니다.
  
![next-budget-tracker-1](https://github.com/Develsopher/next-buget-tracker/assets/78126381/5073e006-3fb1-4f48-a2eb-686b8bc08990)

## 수입 및 지출 히스토리
![image](https://github.com/Develsopher/next-buget-tracker/assets/78126381/efd6995a-e976-47b6-ba0f-1641278dcc77)
- 입력받는 날짜 파라미터에 따라 `MonthHistory` 및 `YearHistory`에서 데이터를 가져왔습니다.
- Rechart 라이브러리를 커스텀하여 Legend, Tooltip같은 설정을 하였습니다.

## 수입 및 지출 테이블 뷰 구성(/transactions)
![image](https://github.com/Develsopher/next-buget-tracker/assets/78126381/9f3fbf41-9e90-4036-bdb5-4539905f730c)
- Shadcn UI를 기본적으로 참고하며 테이블 뷰를 구성하였습니다.
- 카테고리 및 종류(수입 or 지출)에 따른 토글구성 및 컬럼 숨김기능을 추가하였습니다.
- 내역 삭제(Delete Transaction)또한 서버액션 및 Mutation조합으로 수행하였습니다.
- 해당 검색 결과에 따른 CSV파일 추출이 가능합니다.
![image](https://github.com/Develsopher/next-buget-tracker/assets/78126381/ef81e1bb-f800-4fd2-b07b-73d13bfb6e4e)

## 관리페이지
![image](https://github.com/Develsopher/next-buget-tracker/assets/78126381/0c246656-4ab2-4286-b9b3-0e4de8552319)
- wizard에서 설정한 화폐설정(유저세팅)을 변경할 수 있습니다.
- 그동안 만들었던 카테고리를 확인 및 관리할 수 있습니다.
