# 프로젝트 소개
💰Buget Tracker with Next.js💰

- 개인별 수입 또는 지출내역을 기록하고 자산의 흐름을 파악할 수 있는 웹 어플리케이션 입니다.

# 👨‍🔧 Stack
- Client: Next(app router), Typescript, Tanstack Query, zod, react-hook-form, Tailwind CSS
- Database: Prisma, Postgre SQL(with Vercel)
- Auth: Clerk(nextjs)
- UI: Shadcn UI, Recharts, emoji-mart, toast(sooner), count animation
- Deploy: Vercel

# 🧑‍💻 Database Schema
![스키마구성](https://develsopher-nextjs.s3.ap-northeast-2.amazonaws.com/budget-tracker-data-schema.png)

# 기능 소개
- 로그인 및 유저관리는 [Clerk](https://clerk.com/)솔루션을 사용하고 있습니다.
- 유저가 로그인(회원가입)하게 되면 사용할 `Currency`를 설정해야 합니다.
  - 화폐설정은 원, 달러, 엔화가 가능합니다.
  - 유저가 화폐설정이 되어있지 않으면 자동으로 `wizard`페이지로 리다이렉트시켜 유저의 기본세팅을 유도합니다.
  ![image](https://github.com/Develsopher/next-buget-tracker/assets/78126381/fd7a919f-3836-43c6-bcaa-7d176ce3e6f6)
## 수입 및 지출등록 프로세스
![image](https://github.com/Develsopher/next-buget-tracker/assets/78126381/87f96e2b-8165-4cc0-9eaa-24b1a047b456)

